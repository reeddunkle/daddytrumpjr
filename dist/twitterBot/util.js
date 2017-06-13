'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onTweetPosted = onTweetPosted;
exports.buildPostParams = buildPostParams;
/* eslint-disable import/prefer-default-export */

function onTweetPosted(err) {
  if (err) {
    console.error('tweet failed.');
    console.error(err);
  }
}

function buildPostParams(tweet, status) {
  var params = { status: status };
  if (tweet.quoted_status) params.in_reply_to_status_id = tweet.quoted_status_id;
  return params;
}
//# sourceMappingURL=util.js.map