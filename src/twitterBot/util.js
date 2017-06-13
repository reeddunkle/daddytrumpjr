/* eslint-disable import/prefer-default-export */

export function onTweetPosted(err) {
  if (err) {
    console.error('tweet failed.');
    console.error(err);
  }
}

export function buildPostParams(tweet, status) {
  const params = { status };
  if (tweet.quoted_status) params.in_reply_to_status_id = tweet.quoted_status_id;
  return params;
}
