'use strict';

var _index = require('./index');

var _mocks = require('../mocks');

test('returns full_text when available', function () {
  var expected = 'Great call by these companies. #enoughisenough Of course CNN\'s parent company Time Warner remains a sponsor, but that should shock no one! https://t.co/rs2Zy2MfOU';
  expect((0, _index.getTweetText)(_mocks.truncatedReplyingTweet)).toBe(expected);
});

test('returns text when truncated but no full_text', function () {
  var expected = 'I wonder how much of this "art" is funded by taxpayers? Serious question, when does "art" become political speech &amp;… https://t.co/zSHHD8Z6IJ';
  expect((0, _index.getTweetText)(_mocks.truncatedNoExtendedEncodedTweet)).toBe(expected);
});

test('returns regular text when not truncated', function () {
  var expected = 'I thought this was awesome. My friend Kevin from @tradgeeks sent it to me. It was apparently… https://t.co/gaHOYfUUeY';
  expect((0, _index.getTweetText)(_mocks.authoredTweet)).toBe(expected);
});
//# sourceMappingURL=getTweetText.test.js.map