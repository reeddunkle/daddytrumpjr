'use strict';

var _index = require('./index');

// Note: this test should probably be removed,
// as it is just a piping of the pure functions tested elsewhere

var encodedTweet = 'I wonder how much of this "art" is funded by taxpayers? Serious question, when does "art" become political speech &amp;… https://t.co/zSHHD8Z6IJ';

test('returns full_text when truncated', function () {
  var expected = 'I wonder how much of this "art" is funded by taxpayers? Serious question, when does "art" become political speech &…...? Right, dad?';
  expect((0, _index.buildApprovalText)(encodedTweet)).toBe(expected);
});
//# sourceMappingURL=buildApprovalText.test.js.map