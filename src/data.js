const fetch = require("node-fetch");

const getData = async (bookId) => {
  const res = await fetch(
    "https://us-central1-gishohaku.cloudfunctions.net/api-book?id=" + bookId
  );
  return await res.json();
};

module.exports = {
  getData,
};
