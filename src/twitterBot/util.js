/* eslint-disable import/prefer-default-export */

export function onTweetPosted(err) {
  if (err) {
    console.error('tweeting failed :(');
    console.error(err);
  }
}
