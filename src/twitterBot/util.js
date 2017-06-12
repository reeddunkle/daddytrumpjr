/* eslint-disable import/prefer-default-export */

export function onTweetPosted(err) {
  if (err) {
    console.error('tweet failed.');
    console.error(err);
  }
}
