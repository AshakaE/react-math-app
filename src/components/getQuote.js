/* eslint-disable no-console */
function getQuote() {
  return fetch('https://type.fit/api/quotes')
    .then((response) => response.json());
}

export default getQuote;
