/* eslint-disable import/prefer-default-export */
import curry from 'lodash/fp/curry';

export function onTweetPosted(err) {
  if (err) {
    console.error('tweet failed.');
    console.error(err);
  }
}

export const buildPostParams = curry((tweet, status) => {
  const params = { status };
  if (tweet.quoted_status) params.in_reply_to_status_id_str = tweet.quoted_status_id_str;
  return params;
});
