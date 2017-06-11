'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onTweetPosted = onTweetPosted;
/* eslint-disable import/prefer-default-export */

function onTweetPosted(err) {
  if (err) {
    console.error('tweeting failed :(');
    console.error(err);
  }
}
//# sourceMappingURL=util.js.map