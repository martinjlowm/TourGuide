// @ts-ignore
const [, _NS] = [...FILE_ARGUMENTS] as [void, INamespace];

_NS.TourGuide.registerGuide('No Guide', null, null, function() {
  return 'A No guide loaded... |N|Click to select a guide|';
});
