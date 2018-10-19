import curry from 'lodash/fp/curry';
import flow from 'lodash/fp/flow';
import truncate from 'lodash/fp/truncate';
import _unescape from 'lodash/fp/unescape';
import toString from 'lodash/toString';

const TWEET_LENGTH = 240;
const APPROVAL_TEXT = 'Right, dad?';

export function addApproval(str) {
  return `${str} ${APPROVAL_TEXT}`;
}

export function truncateText(str) {
  const charsNeeded = APPROVAL_TEXT.length + 1; // One space
  const options = {
    length: TWEET_LENGTH - charsNeeded,
    separator: ' ',
    omission: '...',
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
  return tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text;
}

export const buildApprovalText = flow(
  _unescape,
  truncateText,
  addApproval,
);
