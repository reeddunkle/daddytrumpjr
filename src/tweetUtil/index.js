import truncate from 'lodash/fp/truncate';
import toString from 'lodash/toString';
import flow from 'lodash/fp/flow';
import replace from 'lodash/fp/replace';

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

export const decodeHTML = flow(
  replace('&amp;', '&'),
  replace('&gt;', '>'),
  replace('&lt;', '<'),
  replace('&quot;', '"'),
  replace('&#39;', "'"),
);
