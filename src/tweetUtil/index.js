import flow from 'lodash/fp/flow';
import truncate from 'lodash/fp/truncate';
import _unescape from 'lodash/fp/unescape';
import toString from 'lodash/toString';

export function addApproval(str) {
  return `${str} Right, dad?`;
}

export function truncateText(str) {
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
  return (tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text);
}

export const buildApprovalText = flow(
  _unescape,
  truncateText,
  addApproval,
);
