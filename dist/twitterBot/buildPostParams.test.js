'use strict';

var _util = require('./util');

var _mocks = require('../mocks');

test('Adds status to params', function () {
  var str = 'What a jerk.';
  var actual = (0, _util.buildPostParams)(_mocks.authoredTweet, str).status;
  expect(actual).toBe(str);
});

test('Adds in_reply_to_status_id_str to params if is reply', function () {
  var str = 'What a jerk.';
  var actual = (0, _util.buildPostParams)(_mocks.truncatedReplyingTweet, str).in_reply_to_status_id_str;
  var expected = '874285480606674945';

  expect(actual).toBe(expected);
});
//# sourceMappingURL=buildPostParams.test.js.map