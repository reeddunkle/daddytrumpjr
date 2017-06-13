'use strict';

var _index = require('./index');

var _mocks = require('../mocks');

var dtJrId = 39344374;

test('True when authored', function () {
  expect((0, _index.isAuthor)(dtJrId, _mocks.authoredTweet)).toBe(true);
});

test('False when not author (1)', function () {
  expect((0, _index.isAuthor)(dtJrId, _mocks.noiseTweetOne)).toBe(false);
});

test('False when not author (2)', function () {
  expect((0, _index.isAuthor)(dtJrId, _mocks.noiseTweetTwo)).toBe(false);
});
//# sourceMappingURL=isAuthor.test.js.map