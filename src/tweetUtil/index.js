import curry from 'lodash/fp/curry';
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

export const log = curry((f, arg) => {
  console.log(`
    Ran ${f}
    ...Received: ${arg}
  `);
  return arg;
});

export function getTweetText(tweet) {
  const output = (tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text);
  return output;
}

export const buildApprovalText = flow(
  _unescape,
  truncateText,
  addApproval,
);
