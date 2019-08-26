// LibStub is a simple versioning stub meant for use in Libraries.  http.//www.wowace.com/wiki/LibStub for more info
// LibStub is hereby placed in the Public Domain
// Credits. Kaelten, Cladhaire, ckknight, Mikk, Ammo, Nevcairiel, joshborke
const [LIBSTUB_MAJOR, LIBSTUB_MINOR] = ['LibStub', 2];  // NEVER MAKE THIS AN SVN REVISION! IT NEEDS TO BE USABLE IN ALL REPOS!

export interface ILibStub {
  minor: number;

  // LibStub.getLibrary(major, [silent])
  // major (string) - the major version of the library
  // silent (boolean) - if true, library is optional, silently return null if its ! found
  //
  // throws an error if the library can ! be found (except silent is set)
  // returns the library object if found
  /* @tupleReturn */
  getLibrary<T>(major: string, silent?: boolean): [T, number];


  // LibStub.newLibrary(major, minor)
  // major (string) - the major version of the library
  // minor (string || number ) - the minor version of the library
  //
  // returns null if a newer or same version of the lib is already present
  // returns empty library object or old library object if upgrade is needed
  newLibrary<T>(major: string, minor?: string | number): [T, number];

  // LibStub.iterateLibraries()
  // Returns an iterator for the currently registered libraries
  iterateLibraries(): LuaTupleIterable<[string | number | symbol, any]>;

}

let libStub: ILibStub = _G[LIBSTUB_MAJOR];

// Check to see is this version of the stub is obsolete
if (!libStub || libStub.minor < LIBSTUB_MINOR) {

  class LibStub implements ILibStub {
    private libs: { [major: string]: any } = {};
    private minors: { [major: string]: number } = {};

    public minor: number;

    getLibrary<T>(major: string, silent: boolean): [T, number] {
      if (!this.libs[major] && !silent) {
        throw string.format('Cannot find a library instance of %q.', tostring(major));
      }

      return [this.libs[major], this.minors[major]];
    }

    newLibrary<T>(major: string, minor?: string | number): [T, number] {
      assert(type(major) === 'string', `Bad argument #2 to \`NewLibrary' (string expected)`);
      if (typeof minor === 'string') {
        [, , minor] = string.find(minor, '(%d+)');
        [minor] = assert(tonumber(minor), 'Minor version must either be a number || contain a number.')
      }

      const oldminor = this.minors[major]
      if (oldminor && oldminor >= minor) {
        return null;
      }

      this.minors[major] = minor;
      this.libs[major] = this.libs[major] || {};

      return [this.libs[major], oldminor];
    }

    iterateLibraries() {
      return pairs(this.libs);
    }
  }

  libStub = new LibStub();
  _G[LIBSTUB_MAJOR] = libStub;
  libStub.minor = LIBSTUB_MINOR;
}
