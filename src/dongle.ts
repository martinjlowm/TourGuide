// Copyright (c) 2006-2007, Dongle Development Team
// All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met.

// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following
// disclaimer in the {cumentation and/or other materials provided
// with the distribution.
// * Neither the name of the Dongle Development Team nor the names of
// its contributors may be used to endorse or promote products derived
// from this software without specific prior written permission.

// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS and CONTRIBUTORS
// "AS IS" and ANY EXPRESS or IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY and FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER or CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, or CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS or SERVICES; LOSS OF USE,
// DATA, or PROFITS; or BUSINESS INTERRUPTION) HOWEVER CAUSED and ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, or TORT
// (INCLUDING NEGLIGENCE or OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

let major = 'DongleStub';
let minor = tonumber(string.match('$Revision. 313 $', '(%d+)')[0] || 1);

function NullCopyTable(src, dest) {
  for (const [k,v] of pairs(dest)) {
    dest[k] = null;
  }

  for (const [k,v] of pairs(src)) {
    dest[k] = v;
  }
}

function activateStub(this: void, n, o) {
  // This code ensures that we'll move the versions table even
  // if the major version names are different, in the case of
  // DongleStub
  if (!o) {
    o = _G.DongleStub;
  }

  if (o) {
    n.versions = o.versions;
    n.log = o.log;
  }

  _G.DongleStub = n;
}

export interface IDongleStub {
  versions: {
    [version: string]: {
      deactivate(this: void, oldInstance: IDongleStub, newInstance: IDongleStub): void;
      instance: IDongleStub;
    };
  };

  /* __call signature */
  (this: void, name: string): IDongleStub;

  log: string[];

  /** @tupleReturn */
  getVersion(this: IDongleStub,): [string, number];

  isNewerVersion(this: IDongleStub, major: string, minor: number): boolean;

  register(this: IDongleStub, newInstance: IDongleStub, activate: (this: void, newInstance: IDongleStub, oldInstance?: IDongleStub) => void, deactivate?: (oldInstance: IDongleStub, newInstance: IDongleStub) => void): IDongleStub;
}

if (!_G.DongleStub || _G.DongleStub.isNewerVersion(major, minor)) {
  let lib = setmetatable({} as IDongleStub, {
    __call(this, name: string) {
      if (type(this.versions) === 'table' && this.versions[name]) {
        return this.versions[name].instance;
      } else {
        throw `Cannot find a library with name '${name}'`;
      }
    }
  });

  /** @tupleReturn */
  lib.getVersion = function() {
    return [major, minor];
  };

  lib.isNewerVersion = function(major, minor) {
    const versionData = this.versions && this.versions[major]

    // If DongleStub versions have differing major version names
    // such as DongleStub-Beta0 and DongleStub-1.0-RC2 then a second
    // instance will be loaded, with older logic.  This code attempts
    // to compensate for that by matching the major version against
    // '^DongleStub', && handling the version check correctly.

    if (string.find(major, '^DongleStub')) {
      const [oldmajor, oldminor] = this.getVersion()
      if (this.versions && this.versions[oldmajor]) {
        return minor > oldminor;
      } else {
        return true;
      }
    }

    if (!versionData) {
      return true;
    }

    const [, oldminor] = versionData.instance.getVersion();
    return minor > oldminor;
  };

  lib.register = function(newInstance: IDongleStub, activate: (this: void, newInstance: IDongleStub, oldInstance?: IDongleStub) => undefined, deactivate?: (this: void, oldInstance: IDongleStub, newInstance: IDongleStub) => undefined) {
    assert(typeof newInstance.getVersion === 'function',
           "Attempt to register a library with DongleStub that does not have a 'GetVersion' method.")

    const [major, minor] = newInstance.getVersion();
    assert(typeof major === 'string',
           'Attempt to register a library with DongleStub that does not have a proper major version.')
    assert(typeof minor === 'number',
           'Attempt to register a library with DongleStub that does not have a proper minor version.')

    // Generate a log of all library registrations
    if (!this.log) {
      this.log = [];
    }

    table.insert(this.log, ('Register. %s, %s').format(major, minor));

    if (!this.isNewerVersion(major, minor)) {
      return;
    }
    if (!this.versions) {
      this.versions = {};
    }

    let versionData = this.versions[major];
    if (!versionData) {
      // New major version
      versionData = {
        instance: newInstance,
        deactivate,
      };

      this.versions[major] = versionData;
      if (typeof activate === 'function') {
        table.insert(this.log, ('activate. %s, %s').format(major, minor));
        activate(newInstance);
      }

      return newInstance;
    }

    const oldDeactivate = versionData.deactivate
    const oldInstance = versionData.instance

    versionData.deactivate = deactivate

    let skipCopy: boolean;
    if (typeof activate === 'function') {
      table.insert(this.log, ('activate. %s, %s').format(major, minor));
      skipCopy = activate(newInstance, oldInstance);
    }

    // Deactivate the old libary if necessary
    if (typeof oldDeactivate === 'function') {
      const [major, minor] = oldInstance.getVersion();
      table.insert(this.log, ('deactivate. %s, %s').format(major, minor));
      oldDeactivate(oldInstance, newInstance);
    }

    // Re-use the old table, && discard the new one
    if (!skipCopy) {
      NullCopyTable(newInstance, oldInstance)
    }

    return oldInstance;
  };

  const stub: IDongleStub = _G.DongleStub || lib;
  lib = stub.register(lib, activateStub);
}

const DongleStub: IDongleStub = _G.DongleStub;

// Begin Library Implementation

major = 'Dongle-1.0';
minor = tonumber(string.match('$Revision. 612 $', '(%d+)')[0] || 1) + 500;
// ** IMPORTANT NOTE **
// Due to some issues we had previously with Dongle revision numbers
// we need to artificially inflate the minor revision number, to ensure
// we load sequentially.

assert(DongleStub, ('%s requires DongleStub.').format(major));

if (!DongleStub.isNewerVersion(major, minor)) {
  // @ts-ignore
  return;
}

interface IEventMap {
  [event: string]: {
    [subscriberName: string]: {
      obj: IDongle,
      func: string | ((...args: VarArg<any>) => any),
    },
  }
}

interface IPattern {
  desc: string;
  handler: string | ((...args: VarArg<any>) => void);
  pattern: string;
}
type ICommand = IDongle & {
  desc: string;
  name: string;
  patterns: IPattern[];
  parent: IDongle;
  slashes: any;
};

interface IRegistry {
  obj: any;
  name: string;
  debugLevel?: number;
  debugFrame?: WoWAPI.Frame;
  modules?: {
    [name: string]: any
  };
}


interface ICache {
  __cache?: {
    [key: string]: any
  };
}

type IDatabase = IDongle & {
  children: IDatabase[]; // Namespaces

  profile: any; // deprecated
  profiles: {
    [profileKey: string]: any;
  };
  keys: {
    char: string;
    realm: string;
    class: string;
    race: string;
    faction: string;
    factionrealm: string;
    global: boolean;
    profile: string;
    profiles: boolean;
  };
  sv: {
    char: {
      [profileKey: string]: any;
    };
    profileKeys: {
      [profileKey: string]: any;
    };
    profiles?: {
      [profileKey: string]: any;
    }
    [key: string]: any;
  }; // Saved variables
  sv_name: string; // Root name
  defaults: any;
  parent: IDatabase;
}

export interface IDongle extends IDongleStub {

  initialized: boolean;
  name: string;

  registry: { [key: string]: IRegistry };
  lookup: { [key: string]: IRegistry };
  loadqueue: any[];
  loadorder: any[];
  events: IEventMap;
  databases: { [dbName: string]: IDatabase };
  commands: { [cmd: string]: any };
  messages: { [key: string]: any };
  frame: WoWAPI.Frame;

  /** @tupleReturn */
  _new<T extends { name: string }>(this: IDongle, name: string, obj?: T): [T, string];

  initialize(): void;
  enable(): void;
  disable(): void;

  /** @tupleReturn */
  newModule(this: IDongle, name: string, obj: IDongle): [IDongle, string];
  hasModule(this: IDongle, module): boolean;

  /** @tupleReturn */
  iterateModules(this: IDongle): [typeof moduleIterator, any];
  registerEvent(this: IDongle, event: string, func?: string | ((...args: VarArg<any>) => any)): void;
  unregisterEvent(this: IDongle, event: string): void;
  unregisterAllEvents(this: IDongle): void;
  isEventRegistered(this: IDongle, event: string): IEventMap[keyof IEventMap];
  registerMessage(this: IDongle, msg: string, func): void;
  unregisterMessage(this: IDongle, msg: string): void;
  unregisterAllMessages(this: IDongle): void;
  triggerMessage(this: IDongle, msg: string, ...args: VarArg<any>): void;
  isMessageRegistered(this: IDongle, msg: string): boolean;
  enableDebug(this: IDongle, level: number, frame?: WoWAPI.Frame): void;
  isDebugEnabled(this: IDongle): [number, WoWAPI.Frame];
  print(this: IDongle, msg: string, ...args: VarArg<any>): void;
  printF(this: IDongle, msg: string, ...args: VarArg<any>): void;
  echo(this: IDongle, msg: string, ...args: VarArg<any>): void;
  echoF(this: IDongle, msg: string, ...args: VarArg<any>): void;
  _debug(this: IDongle, level: number, msg: string, ...args: VarArg<any>): void;
  debugF(this: IDongle, level: number, msg: string, ...args: VarArg<any>): void;
  initializeDB(this: IDongle, name: string, defaults: any, defaultProfile?: string): IDatabase;
  registerDefaults(this: IDongle, db: any, defaults: any): void;
  clearDBDefaults(this: IDongle): void;
  setProfile(this: IDongle, db: IDatabase, name: string): void;
  getProfiles(this: IDatabase, t?: string[]): [string[], number];
  getCurrentProfile(this: IDongle, db: IDatabase): IDatabase['profile'];
  deleteProfile(this: IDongle, db: IDatabase, name: string): void;
  copyProfile(this: IDongle, db: IDatabase, name: string): void;
  resetProfile(this: IDongle, db: IDatabase): void;
  resetDB(this: IDongle, db: IDatabase, defaultProfile?: string): IDatabase;
  registerNamespace(this: IDongle, db: IDatabase, name: string, defaults: IDatabase): IDatabase;
  initializeSlashCommand(this: IDongle, desc: string, name: string, ...args: VarArg<any>): ICommand;
  registerSlashHandler(this: IDongle, cmd: ICommand, desc: string, pattern: string, handler?: any): void;
  printUsage(this: IDongle, cmd: ICommand): void;
  injectDBCommands(this: IDongle, cmd: ICommand, db: IDatabase, ...args: VarArg<any>): void;
}

const Dongle: IDongle = {
  name: `${major}-${minor}`,
} as IDongle;

const methods = [
  'registerEvent', 'unregisterEvent', 'unregisterAllEvents', 'isEventRegistered',
  'registerMessage', 'unregisterMessage', 'unregisterAllMessages', 'triggerMessage', 'isMessageRegistered',
  'enableDebug', 'isDebugEnabled', 'print', 'printF', '_debug', 'debugF', 'echo', 'echoF',
  'initializeDB',
  'initializeSlashCommand',
  'newModule', 'hasModule', 'iterateModules',
];

let registry: {
  [key: string]: IRegistry
} = {};
let lookup: {
  [key: string]: IRegistry,
} = {};
let loadqueue = [];
let loadorder = [];
let events: IEventMap = {};
let databases: { [dbName: string]: IDatabase } = {};
let commands: { [cmd: string]: any } = {};
let messages: { [key: string]: any } = {};
let frame: WoWAPI.Frame;

const L = {
  ADDMESSAGE_REQUIRED: "The frame you specify must have an 'AddMessage' method.",
  ALREADY_REGISTERED: "A Dongle with the name '%s' is already registered.",
  BAD_ARGUMENT: "bad argument #%d to '%s' (%s expected, got %s)",
  BAD_ARGUMENT_DB: "bad argument #%d to '%s' (DongleDB expected)",
  CANNOT_DELETE_ACTIVE_PROFILE: 'You cannot delete your active profile. Change profiles, then attempt to delete.',
  DELETE_NONEXISTANT_PROFILE: 'You cannot delete a non-existant profile.',
  MUST_CALLFROM_DBOBJECT: "You must call '%s' from a Dongle database object.",
  MUST_CALLFROM_REGISTERED: "You must call '%s' from a registered Dongle.",
  MUST_CALLFROM_SLASH: "You must call '%s' from a Dongle slash command object.",
  PROFILE_DOES_NOT_EXIST: "Profile '%s' doesn't exist.",
  REPLACE_DEFAULTS: 'You are attempting to register defaults with a database that already contains defaults.',
  SAME_SOURCE_DEST: 'Source/Destination profile cannot be the same profile.',
  EVENT_REGISTER_SPECIAL: "You cannot register for the '%s' event. Use the '%s' method instead.",
  Unknown: 'Unknown',
  INJECTDB_USAGE: "Usage. DongleCmd.InjectDBCommands(db, ['copy', 'delete', 'list', 'reset', 'set'])",
  DBSLASH_PROFILE_COPY_DESC: 'profile copy <name> - Copies profile <name> into your current profile.',
  DBSLASH_PROFILE_COPY_PATTERN: '^profile copy (.+)$',
  DBSLASH_PROFILE_DELETE_DESC: 'profile delete <name> - Deletes the profile <name>.',
  DBSLASH_PROFILE_DELETE_PATTERN: '^profile delete (.+)$',
  DBSLASH_PROFILE_LIST_DESC: 'profile list - Lists all valid profiles.',
  DBSLASH_PROFILE_LIST_PATTERN: '^profile list$',
  DBSLASH_PROFILE_RESET_DESC: 'profile reset - Resets the current profile.',
  DBSLASH_PROFILE_RESET_PATTERN: '^profile reset$',
  DBSLASH_PROFILE_SET_DESC: 'profile set <name> - Sets the current profile to <name>.',
  DBSLASH_PROFILE_SET_PATTERN: '^profile set (.+)$',
  DBSLASH_PROFILE_LIST_OUT: 'Profile List.',
};

const argcheck = function(this: void, value, num, ...arg: VarArg<any>) {
  if (typeof num !== 'number') {
    throw (L.BAD_ARGUMENT).format(2, 'argcheck', 'number', typeof num);
  }

  for (let i = 1; i <= select('#', ...arg); i++) {
    if (type(value) === select(i, ...arg)[0]) {
      return;
    }
  }

  const types = string.join(', ', ...arg);
  const [name] = string.match(debugstack(2,2,0), ". in function [`<](.-)['>]");
  throw (L.BAD_ARGUMENT).format(num, name, types, type(value));
}

const safecall = function(this: void, func, ...arg: any[]) {
  const [success, err] = pcall(func, ...arg);
  if (!success) {
    geterrorhandler()(err);
  }
}

/** @tupleReturn */
Dongle._new = function<T extends { name: string }>(name: string, obj: T) {
  argcheck(name, 2, 'string');
  argcheck(obj, 3, 'table', 'nil');

  if (!obj) {
    obj = {} as T;
  }

  if (registry[name]) {
    throw (L.ALREADY_REGISTERED).format(name);
  }

  obj.name = name;

  const reg = {
    obj,
    name,
  };

  registry[name] = reg;
  lookup[name] = reg;

  for (const [, v] of ipairs(methods)) {
    obj[v] = this[v];
  }

  // Add this Dongle to the end of the queue
  table.insert(loadqueue, obj);
  return [obj, name];
}


/** @tupleReturn */
Dongle.newModule = function(name, obj) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('NewModule'));
  argcheck(name, 2, 'string');
  argcheck(obj, 3, 'table', 'nil');

  [obj, name] = this._new<IDongle>(name, obj);

  if (!reg.modules) {
    reg.modules = {};
  }

  reg.modules[name] = obj;

  return [obj, name];
};

Dongle.hasModule = function(module) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('hasModule'));
  argcheck(module, 2, 'string', 'table');

  return reg.modules && reg.modules[module];
}

const moduleIterator = function(t: any, name: any) {
  if (!t) {
    return;
  }

  let obj: any;
  do {
    [name, obj] = next(t, name);
  } while (typeof name !== 'string' || name);

  return [name, obj];
};


Dongle.iterateModules = function() {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('iterateModules'));

  return [moduleIterator, reg.modules];
};


const OnEvent = function(this: WoWAPI.Frame, event: string, ...args: VarArg<any>) {
  const eventTbl = events[event];
  if (eventTbl) {
    for (const [, objFuncPair] of pairs(eventTbl)) {
      const { obj, func } = objFuncPair;

      if (typeof func === 'string') {
        if (typeof obj[func] === 'function') {
          safecall(obj[func], obj, event, ...args)
        }
      } else {
        safecall(func, event, ...args);
      }
    }
  }
};

const specialEvents = {
  PLAYER_LOGIN: 'Enable',
  PLAYER_LOGOUT: 'Disable',
};

// Event registration system
Dongle.registerEvent = function(event, func?) {
  const reg = lookup[this.name];

  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('registerEvent'));
  argcheck(event, 2, 'string');
  argcheck(func, 3, 'string', 'function', 'nil');

  const special = (this !== Dongle) && specialEvents[event];
  if (special) {
    error((L.EVENT_REGISTER_SPECIAL).format(event, special), 3);
  }

  // Name the method the same as the event if necessary
  if (!func) {
    func = event;
  }

  if (!events[event]) {
    events[event] = {};
    frame.RegisterEvent(event);
  }

  events[event][this.name] = {
    obj: this,
    func,
  };
};

Dongle.unregisterEvent = function(event) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('unregisterEvent'));
  argcheck(event, 2, 'string');

  const tbl = events[event];
  if (tbl) {
    tbl[this.name] = null;
    if (!next(tbl)) {
      events[event] = null;
      frame.UnregisterEvent(event);
    }
  }
};

Dongle.unregisterAllEvents = function() {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('unregisterAllEvents'));

  for (const [event, tbl] of pairs(events)) {
    tbl[this.name] = null;
    if (!next(tbl)) {
      events[event] = null;
      frame.UnregisterEvent(`${event}`);
    }
  }
};

Dongle.isEventRegistered = function(event) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('isEventRegistered'));
  argcheck(event, 2, 'string');

  return events[event];
}

// Inter-Addon Messaging System
Dongle.registerMessage = function(msg, func) {
  argcheck(this, 1, 'table');
  argcheck(msg, 2, 'string');
  argcheck(func, 3, 'string', 'function', 'null');

  // Name the method the same as the message if necessary
  if (!func) {
    func = msg;
  }

  if (!messages[msg]) {
    messages[msg] = {}
  }

  messages[msg][this.name] = func
}

Dongle.unregisterMessage = function(msg) {
  argcheck(this, 1, 'table');
  argcheck(msg, 2, 'string');

  const tbl = messages[msg];
  if (tbl) {
    tbl[this.name] = null;
    if (!next(tbl)) {
      messages[msg] = null;
    }
  }
};

Dongle.unregisterAllMessages = function() {
  argcheck(this, 1, 'table');

  for (const [msg, tbl] of pairs(messages)) {
    tbl[this.name] = null;
    if (!next(tbl)) {
      messages[msg] = null;
    }
  }
};

Dongle.triggerMessage = function(msg, ...args: VarArg<any>) {
  argcheck(this, 1, 'table');
  argcheck(msg, 2, 'string');

  const msgTbl = messages[msg];
  if (!msgTbl) {
    return;
  }

  for (const [obj, func] of pairs(msgTbl)) {
    if (typeof func === 'string') {
      if (typeof obj[func] === 'function') {
        safecall(obj[func], obj, msg, ...args);
      } else {
        safecall(func, msg, ...args);
      }
    }
  }
}

Dongle.isMessageRegistered = function(msg) {
  argcheck(this, 1, 'table');
  argcheck(msg, 2, 'string');

  const tbl = messages[msg];
  return tbl[this.name];
}

// Debug and Print utility functions
Dongle.enableDebug = function(level, frame) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('EnableDebug'));
  argcheck(level, 2, 'number', 'nil');
  argcheck(frame, 3, 'table', 'nil');

  assert(3, type(frame) === 'nil' || type(frame.AddMessage) === 'function', L.ADDMESSAGE_REQUIRED);
  reg.debugFrame = frame || ChatFrame1;
  reg.debugLevel = level;
}

/** @tupleReturn */
Dongle.isDebugEnabled = function() {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('EnableDebug'));

  return [reg.debugLevel, reg.debugFrame];
}

Dongle.print = function(msg, ...args) {
  const reg = lookup[this.name]
  assert(1, reg, (L.MUST_CALLFROM_REGISTERED).format('Print'));
  argcheck(msg, 2, 'number', 'string', 'boolean', 'table', 'function', 'thread', 'userdata');
  printHelp(this, 'Print', true, DEFAULT_CHAT_FRAME, msg, ...args);
}

Dongle.printF = function(msg, ...args) {
  const reg = lookup[this.name]
  assert(1, reg, (L.MUST_CALLFROM_REGISTERED).format('PrintF'));
  argcheck(msg, 2, 'number', 'string', 'boolean', 'table', 'function', 'thread', 'userdata');
  printFHelp(this, 'PrintF', true, DEFAULT_CHAT_FRAME, msg, ...args);
};

Dongle.echo = function(msg, ...args) {
  const reg = lookup[this.name];
  assert(1, reg, (L.MUST_CALLFROM_REGISTERED).format('Echo'));
  argcheck(msg, 2, 'number', 'string', 'boolean', 'table', 'function', 'thread', 'userdata');
  printHelp(this, 'Echo', false, DEFAULT_CHAT_FRAME, msg, ...args);
}

Dongle.echoF = function(msg, ...args) {
  const reg = lookup[this.name];
  assert(1, reg, (L.MUST_CALLFROM_REGISTERED).format('EchoF'));
  argcheck(msg, 2, 'number', 'string', 'boolean', 'table', 'function', 'thread', 'userdata');
  printFHelp(this, 'EchoF', false, DEFAULT_CHAT_FRAME, msg, ...args);
}

Dongle._debug = function(level, msg, ...args) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('Debug'));
  argcheck(level, 2, 'number');

  if (reg.debugLevel && level <= reg.debugLevel) {
    printHelp(this, 'Debug', true, reg.debugFrame, msg, ...args);
  }
}

Dongle.debugF = function(level, msg, ...args) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('DebugF'));
  argcheck(level, 2, 'number');

  if (reg.debugLevel && level <= reg.debugLevel) {
    printFHelp(this, 'DebugF', true, reg.debugFrame, msg, ...args);
  }
};

// Database
Dongle.initializeDB = function(name, defaults, defaultProfile?) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('initializeDB'));
  argcheck(name, 2, 'string', 'table');
  argcheck(defaults, 3, 'table', 'nil');
  argcheck(defaultProfile, 4, 'string', 'nil');

  return initdb(this, name, defaults, defaultProfile);
}

// This function operates on a Dongle DB object
Dongle.registerDefaults = function(db, defaults) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('registerDefaults'));
  assert(3, db.defaults === null, L.REPLACE_DEFAULTS);
  argcheck(defaults, 2, 'table');

  for (const [section, key] of pairs(db.keys)) {
    if (defaults[section] && rawget(db, section)) {
      copyDefaults(db[section], defaults[section]);
    }
  }

  db.defaults = defaults;
}

Dongle.clearDBDefaults = function() {
  for (const [, db] of pairs(databases)) {
    const defaults = db.defaults;
    const sv = db.sv;

    if (db && defaults) {
      for (const [section, key] of pairs(db.keys)) {
        if (defaults[section] && rawget(sv, section)) {
          removeDefaults(sv[section], defaults[section]);
        }
      }

      for (const [section, key] of pairs(db.keys)) {
        const tbl = rawget(sv, section);
        if (tbl && !next(tbl)) {
          if (sv[section]) {
            if (typeof key === 'string') {
              sv[section][key] = null;
            } else {
              sv[section] = null
            }
          }
        }
      }
    }
  }
};

Dongle.setProfile = function(db, name) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('SetProfile'));
  argcheck(name, 2, 'string');

  const old = db.profile;
  const defaults = db.defaults && db.defaults.profile;

  if (defaults) {
    // Remove the defaults from the old profile
    removeDefaults(old, defaults);
  }

  db.profile = null;
  db.keys['profile'] = name;
  db.sv.profileKeys[db.keys.char] = name;

  Dongle.triggerMessage('DONGLE_PROFILE_CHANGED', db, db.parent, db.sv_name, db.keys.profile);
};

Dongle.getProfiles = function(t) {
  assert(3, databases[this.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('GetProfiles'));
  argcheck(t, 2, 'table', 'null');

  t = t || [];
  let i = 1;
  for (const [profileKey] of pairs(this.sv.profiles)) {
    t[i] = `${profileKey}`;
    i++;
  }

  return [t, i - 1];
};

Dongle.getCurrentProfile = function(db) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('GetCurrentProfile'));
  return db.keys.profile;
}

Dongle.deleteProfile = function(db, name) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('DeleteProfile'));
  argcheck(name, 2, 'string');

  if (db.keys.profile === name) {
    error(L['CANNOT_DELETE_ACTIVE_PROFILE'], 2);
  }

  assert(type(db.sv.profiles[name]) === 'table', L['DELETE_NONEXISTANT_PROFILE']);

  db.sv.profiles[name] = null;
  Dongle.triggerMessage('DONGLE_PROFILE_DELETED', db, db.parent, db.sv_name, name);
};

Dongle.copyProfile = function(db, name) {
  assert(3, databases[name], (L.MUST_CALLFROM_DBOBJECT).format('CopyProfile'));
  argcheck(name, 2, 'string');

  assert(3, db.keys.profile !== name, L.SAME_SOURCE_DEST);
  assert(3, type(db.sv.profiles[name]) === 'table', (L.PROFILE_DOES_NOT_EXIST).format(name));

  const profile = db.profile;
  const source = db.sv.profiles[name];

  copyDefaults(profile, source, true);
  Dongle.triggerMessage('DONGLE_PROFILE_COPIED', db, db.parent, db.sv_name, name, db.keys.profile);
}

Dongle.resetProfile = function(db) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('ResetProfile'));

  const profile = db.profile;

  for (const [k] of pairs(profile)) {
    profile[k] = null
  }

  const defaults = db.defaults && db.defaults.profile;
  if (defaults) {
    copyDefaults(profile, defaults);
  }

  Dongle.triggerMessage('DONGLE_PROFILE_RESET', db, db.parent, db.sv_name, db.keys.profile);
};

Dongle.resetDB = function(db, defaultProfile) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('ResetDB'));
  argcheck(defaultProfile, 2, 'null', 'string');

  const sv = db.sv;
  for (const [k, v] of pairs(sv)) {
    sv[k] = null;
  }

  const parent = db.parent;

  initdb(parent, db.sv_name, db.defaults, defaultProfile, db);
  Dongle.triggerMessage('DONGLE_DATABASE_RESET', db, parent, db.sv_name, db.keys.profile);
  Dongle.triggerMessage('DONGLE_PROFILE_CHANGED', db, db.parent, db.sv_name, db.keys.profile);
  return db;
};

Dongle.registerNamespace = function(db, name, defaults) {
  assert(3, databases[db.sv_name], (L.MUST_CALLFROM_DBOBJECT).format('RegisterNamespace'));
  argcheck(name, 2, 'string');
  argcheck(defaults, 3, 'null', 'string');

  const sv = db.sv;
  if (! sv.namespaces) {
    sv.namespaces = {};
  }
  if (! sv.namespaces[name]) {
    sv.namespaces[name] = {};
  }

  const newDB = initdb(db, sv.namespaces[name], defaults, db.keys.profile);
  // Remove the .SetProfile method from newDB
  newDB.setProfile = null;

  if (!db.children) {
    db.children = [];
  }
  table.insert(db.children, newDB);
  return newDB;
}

Dongle.initializeSlashCommand = function(desc, name, ...args) {
  const reg = lookup[this.name];
  assert(3, reg, (L.MUST_CALLFROM_REGISTERED).format('InitializeSlashCommand'));
  argcheck(desc, 2, 'string');
  argcheck(name, 3, 'string');
  argcheck(args[1], 4, 'string');
  for (let i = 2; i < args.length + 1; i++) {
    argcheck(args[i], i + 2, 'string');
  }

  const cmd: ICommand = {} as ICommand;
  cmd.desc = desc;
  cmd.name = name;
  cmd.parent = this;
  cmd.slashes = { args };
  for (const [, method] of ipairs(slashCmdMethods)) {
    cmd[method] = Dongle[method];
  }

  for (let i = 1; i < args.length + 1; i++) {
    _G[`SLASH_${name}${i}`] = `/${args[i]}`;
  }

  _G.SlashCmdList[name] = function(...args: VarArg<any>) {
    OnSlashCommand(cmd, ...args);
  };

  commands[cmd.name] = true;

  return cmd;
};

Dongle.registerSlashHandler = function(cmd, desc, pattern, handler) {
  assert(3, commands[cmd.name], (L.MUST_CALLFROM_SLASH).format('RegisterSlashHandler'));

  argcheck(desc, 2, 'string');
  argcheck(pattern, 3, 'string');
  argcheck(handler, 4, 'function', 'string');

  if (!cmd.patterns) {
    cmd.patterns = [];
  }

  table.insert(cmd.patterns, {
    desc,
    handler,
    pattern,
  });
};

Dongle.printUsage = function(cmd: ICommand) {
  assert(3, commands[cmd.name], (L.MUST_CALLFROM_SLASH).format('PrintUsage'));
  const parent = cmd.parent;

  parent.echo(`${cmd.desc}\n/${table.concat(cmd.slashes, ', /')}.\n`);
  if (cmd.patterns) {
    for (const [, tbl] of ipairs(cmd.patterns)) {
      parent.echo(` - ${tbl.desc}`);
    }
  }
};

Dongle.injectDBCommands = function(cmd, db, ...args) {
  assert(3, commands[cmd.name], (L.MUST_CALLFROM_SLASH).format('InjectDBCommands'));
  assert(3, databases[db.sv_name], (L.BAD_ARGUMENT_DB).format(2, 'InjectDBCommands'));
  const argc = select('#', ...args);
  assert(3, argc > 0, L['INJECTDB_USAGE'])

  for (let i = 1; i < argc + 1; i++) {
    const cmdname = args[i].toLowerCase();
    const entry = dbcommands[cmdname];
    assert(entry, L.INJECTDB_USAGE);

    let handler: any;
    if (cmdname === 'list') {
      handler = function(...args: VarArg<any>) {
        const [profiles] = db.getProfiles();
        db.parent.print(`${L.DBSLASH_PROFILE_LIST_OUT}\n${string.join('\n', ...profiles)}`);
      }
    } else {
      handler = function(...args: VarArg<any>) {
        db[entry[3]](db, ...args);
      }
    }

    cmd.registerSlashHandler(entry[1], entry[2], handler);
  }
};

/** @tupleReturn */
const argsToStrings = function(this: void, firstArg?: any, ...args: VarArg<any>) {
  if (select('#', ...args) > 0) {
    return [tostring(firstArg), ...argsToStrings(...args)]
  } else {
    return [tostring(firstArg)];
  }
}

const printHelp = function(this: void, obj: IDongle, method: string, header: boolean, frame: WoWAPI.Frame, msg: string, ...args: VarArg<any>) {
  const reg = lookup[obj.name];
  assert(4, reg, (L.MUST_CALLFROM_REGISTERED).format(method));

  let name = reg.name;

  if (header) {
    msg = `|cFF33FF99${name}|r. ${msg}`;
  }

  if (select('#', ...args) > 0) {
    msg = string.join(', ', msg, ...argsToStrings(...args));
  }

  frame.AddMessage(msg);
};

const printFHelp = function(this: void, obj: IDongle, method: string, header: boolean, frame: WoWAPI.Frame, msg: string, ...args: VarArg<any>) {
  const reg = lookup[obj.name]
  assert(4, reg, (L.MUST_CALLFROM_REGISTERED).format(method));

  const name = reg.name
  let success: boolean;
  let txt: string;

  if (header) {
    msg = `|cFF33FF99%s|r. ${msg}`;
    [success, txt] = pcall((...args: VarArg<any>) => msg.format(name, ...args), ...args);
  } else {
    [success, txt] = pcall((...args: VarArg<any>) => msg.format(...args), ...args);
  }

  if (success) {
    frame.AddMessage(txt);
  } else {
    error(string.gsub(txt, "'%?'", ("'%s'").format(method))[0], 3);
  }
}


// Database System
const dbMethods = [
  'RegisterDefaults', 'SetProfile', 'GetProfiles', 'DeleteProfile', 'CopyProfile',
  'GetCurrentProfile', 'ResetProfile', 'ResetDB',
  'RegisterNamespace',
];

const copyTable = function(src: any) {
  const dest: any = {}

  for (let [k, v] of pairs(src)) {
    if (type(k) === 'table') {
      k = copyTable(k);
    }
    if (type(v) === 'table') {
      v = copyTable(v);
    }
    dest[k] = v;
  }

  return dest;
}

const copyDefaults = function(this: void, dest: any, src: any, force?: boolean) {
  for (const [k, v] of pairs(src)) {
    if (k === '*') {
      if (type(v) === 'table') {
        // Values are tables, need some magic here
        const mt = {
          __cache: {},
          __index: function(this: void, t, k: string) {
            const mt: LuaMetatable<any> & ICache = getmetatable(dest);
            const cache = rawget(mt, '__cache');
            let tbl = rawget(cache, k);
            if (!tbl) {
              const parent = t;
              const parentkey = k;
              tbl = copyTable(v);
              rawset(cache, k, tbl);
              let mt = getmetatable(tbl);
              if (!mt) {
                mt = {};
                setmetatable(tbl, mt);
              }

              const newindex = function(t, k, v) {
                rawset(parent, parentkey, t)
                rawset(t, k, v)
              }
              rawset(mt, '__newindex', newindex)
            }
            return tbl
          },
        }
        setmetatable(dest, mt)
        // Now need to set the metatable on any child tables
        for (const [dkey, dval] of pairs(dest)) {
          copyDefaults(dval, v)
        }
      } else {
        // Values are not tables, so this is just a simple return
        const mt = {
          __index: function() {
            return v;
          }
        };
        setmetatable(dest, mt);
      }
    } else if (type(v) === 'table') {
      if (!dest[k]) {
        dest[k] = {};
      }

      copyDefaults(dest[k], v, force);
    } else {
      if ((dest[k] === null) || force) {
        dest[k] = v;
      }
    }
  }
};

const removeDefaults = function(db, defaults) {
  if (!db) {
    return;
  }

  for (const [k, v] of pairs(defaults)) {
    if (k === '*' && type(v) === 'table') {
      // check for any defaults that have been changed
      const mt: LuaMetatable<any> & ICache = getmetatable(db)
      const cache = rawget(mt, '__cache')

      for (const [cacheKey, cacheValue] of pairs(cache)) {
        removeDefaults(cacheValue, v);
        if (next(cacheValue) !== null) {
          // Something's changed
          rawset(db, cacheKey, cacheValue);
        }
      }
      // Now loop through all the actual k,v pairs && remove
      for (const [key, value] of pairs(db)) {
        removeDefaults(value, v)
      }
    } else if (type(v) === 'table' && db[k]) {
      removeDefaults(db[k], v)
      if (!next(db[k])) {
        db[k] = null;
      } else {
        if (db[k] === defaults[k]) {
          db[k] = null;
        }
      }
    }
  }
};

const initSection = function(db, section, svstore, key, defaults) {
  const sv = rawget(db, 'sv');

  let tableCreated: boolean;
  if (!sv[svstore]) {
    sv[svstore] = {};
  };
  if (!sv[svstore][key]) {
    sv[svstore][key] = {};
    tableCreated = true;
  }

  const tbl = sv[svstore][key];

  if (defaults) {
    copyDefaults(tbl, defaults);
  }
  rawset(db, section, tbl);

  return [tableCreated, tbl];
}

const dbmt = {
  __index: function(this: void, t, section) {
    const keys = rawget(t, 'keys');
    const key = keys[section];
    if (key) {
      const defaultTbl = rawget(t, 'defaults');
      const defaults = defaultTbl && defaultTbl[section];

      if (section === 'profile') {
        const n = initSection(t, section, 'profiles', key, defaults);
        if (n) {
          Dongle.triggerMessage('DONGLE_PROFILE_CREATED', t, rawget(t, 'parent'), rawget(t, 'sv_name'), key);
        }
      } else if (section === 'profiles') {
        const sv = rawget(t, 'sv');
        if (!sv.profiles) {
          sv.profiles = {};
        }
        rawset(t, 'profiles', sv.profiles);
      } else if (section === 'global') {
        const sv = rawget(t, 'sv');
        if (!sv.global) {
          sv.global = {};
        }
        if (defaults) {
          copyDefaults(sv.global, defaults);
        }
        rawset(t, section, sv.global)
      } else {
        initSection(t, section, section, key, defaults)
      }
    }

    return rawget(t, section)
  }
};

const initdb = function(parent, name, defaults, defaultProfile, olddb?: IDatabase) {
  // This allows us to use an arbitrary table as base instead of saved variable name
  let sv;
  if (typeof name === 'string') {
    sv = _G[name];
    if (!sv) {
      sv = {};
      _G[name] = sv;
    }
  } else if (type(name) === 'table') {
    sv = name;
  }

  // Generate the database keys for each section
  const char = ('%s - %s').format(UnitName('player'), GetRealmName());
  const realm = GetRealmName();
  const [, cls] = UnitClass('player');
  const [, race] = UnitRace('player');
  const [faction] = UnitFactionGroup('player');
  const factionrealm = ('%s - %s').format(faction, realm);

  // Make a container for profile keys
  if (!sv.profileKeys) {
    sv.profileKeys = {};
  }

  // Try to get the profile selected from the char db
  const profileKey = sv.profileKeys[char] || defaultProfile || char;
  sv.profileKeys[char] = profileKey;

  const keyTbl = {
    char,
    realm,
    class: cls,
    race,
    faction,
    factionrealm,
    global: true,
    profile: profileKey,
    profiles: true, // Don't create until we need
  }

  // If we've been passed an old database, clear it out
  if (olddb) {
    for (const [k] of pairs(olddb)) {
      olddb[k] = null;
    }
  }

  // Give this database the metatable so it initializes dynamically
  const db: IDatabase = setmetatable(olddb || {} as IDatabase, dbmt);

  // Copy methods locally
  for (const [, method] of ipairs(dbMethods)) {
    db[method] = Dongle[method];
  }

  // Set some properties in the object we're returning
  db.profiles = sv.profiles;
  db.keys = keyTbl;
  db.sv = sv;
  db.sv_name = name;
  db.defaults = defaults;
  db.parent = parent;

  databases[db.sv_name] = db;

  return db;
};

// Slash Command System

const slashCmdMethods = [
  'injectDBCommands',
  'registerSlashHandler',
  'printUsage',
];

const OnSlashCommand = function(cmd: ICommand, cmdLine?: string) {
  if (cmd.patterns) {
    for (const [, tbl] of ipairs(cmd.patterns)) {
      const pattern = tbl.pattern;
      if (string.match(cmdLine, pattern)) {
        const handler = tbl.handler;
        if (typeof handler === 'string') {
          let obj;
          // Look in the command object before we look at the parent object
          if (cmd[handler]) {
            obj = cmd;
          }

          if (cmd.parent[handler]) {
            obj = cmd.parent;
          }
          if (obj) {
            obj[handler](obj, string.match(cmdLine, pattern));
          }
        } else {
          handler(string.match(cmdLine, pattern))
        }
        return
      }
    }
  }
  cmd.printUsage(cmd);
};


const dbcommands = {
  copy: [
    'DBSLASH_PROFILE_COPY_DESC',
    'DBSLASH_PROFILE_COPY_PATTERN',
    'CopyProfile',
  ],
  'delete': [
    'DBSLASH_PROFILE_DELETE_DESC',
    'DBSLASH_PROFILE_DELETE_PATTERN',
    'DeleteProfile',
  ],
  list: [
    'DBSLASH_PROFILE_LIST_DESC',
    'DBSLASH_PROFILE_LIST_PATTERN',
  ],
  reset: [
    'DBSLASH_PROFILE_RESET_DESC',
    'DBSLASH_PROFILE_RESET_PATTERN',
    'ResetProfile',
  ],
  'set': [
    'DBSLASH_PROFILE_SET_DESC',
    'DBSLASH_PROFILE_SET_PATTERN',
    'SetProfile',
  ],
};

// Lets nuke any Dongle deactivate functions, please
// I hate nasty hacks.
if (DongleStub.versions && DongleStub.versions[major]) {
  const reg = DongleStub.versions[major];
  reg.deactivate = null;
}

const PLAYER_LOGOUT = function(event: string) {
  Dongle.clearDBDefaults();
  for (const [, v] of pairs(registry)) {
    const obj = v.obj;
    if (typeof obj.disable === 'function') {
      safecall(obj.disable, obj);
    }
  }
}

const PLAYER_LOGIN = function() {
  Dongle.initialized = true;

  for (let i = 0; i < loadorder.length; i++) {
    const obj = loadorder[i];

    if (typeof obj.enable === 'function') {
      safecall(obj.enable, obj);
    }

    loadorder[i] = null;
  }
}

const PLAYER_ENTERING_WORLD = function() {
  for (let i = 0; i < loadqueue.length; i++) {
    const obj = loadqueue[i];

    table.insert(loadorder, obj);

    if (typeof obj.initialize === 'function') {
      safecall(obj.initialize, obj);
    }

    loadqueue[i] = null;
  }

  if (!Dongle.initialized) {
    if (typeof IsLoggedIn === 'function') {
      Dongle.initialized = IsLoggedIn();
    } else {
      Dongle.initialized = ChatFrame1.defaultLanguage
    }
  }

  if (Dongle.initialized) {
    for (let i = 0; i < loadorder.length; i++) {
      const obj = loadorder[i];
      if (typeof obj.enable === 'function') {
        safecall(obj.enable, obj);
      }

      loadorder[i] = null;
    }
  }
}


const DONGLE_PROFILE_CHANGED = function(msg: string, db: IDatabase, parent, sv_name, profileKey) {
  const children = db.children;
  if (children) {
    for (const [, namespace] of ipairs(children)) {
      const old = namespace.profile;
      const defaults = namespace.defaults && namespace.defaults.profile;

      if (defaults) {
        // Remove the defaults from the old profile
        removeDefaults(old, defaults);
      }

      namespace.profile = null;
      namespace.keys['profile'] = profileKey;
    }
  }
};

Dongle.getVersion = function() {
  return [major, minor];
}

const Activate = function(this: void, next: IDongle, old: IDongle) {
  if (old) {
    registry = old.registry || registry;
    lookup = old.lookup || lookup;
    loadqueue = old.loadqueue || loadqueue;
    loadorder = old.loadorder || loadorder;
    events = old.events || events;
    databases = old.databases || databases;
    commands = old.commands || commands;
    messages = old.messages || messages;
    frame = old.frame || CreateFrame('Frame');
  } else {
    frame = CreateFrame('Frame');
    const reg = {
      obj: next,
      name: 'Dongle',
    };
    registry[major] = reg;
    lookup[next.name] = reg;
    lookup[major] = reg;
  }

  next.registry = registry;
  next.lookup = lookup;
  next.loadqueue = loadqueue;
  next.loadorder = loadorder;
  next.events = events;
  next.databases = databases;
  next.commands = commands;
  next.messages = messages;
  next.frame = frame;

  frame.SetScript('OnEvent', OnEvent);

  const lib: IDongle = old || next

  // Lets make sure the lookup table has us.
  lookup[lib.name] = lookup[major]

  // Register for events using Dongle itthis
  lib.registerEvent('PLAYER_ENTERING_WORLD', PLAYER_ENTERING_WORLD)
  lib.registerEvent('PLAYER_LOGIN', PLAYER_LOGIN)
  lib.registerEvent('PLAYER_LOGOUT', PLAYER_LOGOUT)
  lib.registerMessage('DONGLE_PROFILE_CHANGED', DONGLE_PROFILE_CHANGED)

  // Convert all the modules handles
  for (const [, obj] of pairs(registry)) {
    for (const [k, v] of ipairs(methods)) {
      obj[k] = next[v];
    }
  }

  // Convert all database methods
  for (const [,db] of pairs(databases)) {
    for (const [, method] of ipairs(dbMethods)) {
      db[method] = next[method];
    }
  }

  // Convert all slash command methods
  for (const [cmd] of pairs(commands)) {
    for (const [, method] of ipairs(slashCmdMethods)) {
      cmd[method] = next[method];
    }
  }
}

_G.Dongle = DongleStub.register(Dongle, Activate);

export {};
