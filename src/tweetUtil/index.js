import flow from 'lodash/fp/flow';
import replace from 'lodash/fp/replace';
import truncate from 'lodash/fp/truncate';
import _unescape from 'lodash/fp/unescape';
import toString from 'lodash/toString';

export function addApproval(str) {
  return `${str} Right, dad?`;
}

export function cropText(str) {
  const options = {
    length: 128,  // 140 - ' Right, dad?'.length (12)
    separator: ' ',
    omission: '...?',
  };
  return truncate(options, str);
}

export function isAuthor(followId, tweet) {
  return toString(followId) === tweet.user.id_str;
}

export function getTweetText(tweet) {
  return (tweet.truncated ? tweet.extended_tweet.full_text : tweet.text);
}

/* eslint-disable quotes */
export const stripEscapeChars = flow(
  replace('\'', "'"),
  replace("\"", '"'),
);
/* eslint-enable */

export const buildApprovalText = flow(
  _unescape,
  stripEscapeChars,
  cropText,
  addApproval,
);
