import truncate from 'lodash/fp/truncate';
import toString from 'lodash/toString';

export function addApproval(text) {
  return `${text} Right, dad?`;
}

export function cropText(text) {
  const options = {
    length: 128,  // 140 - ' Right, dad?'.length (12)
    separator: ' ',
  };
  return truncate(options, text);
}

export function isAuthor(followId, tweet) {
  return toString(followId) === tweet.user.id_str;
}
