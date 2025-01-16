const requestConfig = {
  baseUrl: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key":
      "live_sHTJFxrUksyPzxBgrAtRU2t5aiCqI4ZN9SZBwwoDQ7IgmUCwKTh9xdTyaTmHY3HO",
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
};

export const getCards = (limit = 10, page = 0) => {
  return fetch(
    `${requestConfig.baseUrl}images/search?limit=${limit}&page=${page}`,
    {
      method: "GET",
      headers: requestConfig.headers,
    }
  )
    .then(checkResponse)
    .then((cats) => {
      // let result = [];
      // cats.forEach((cat) => {
      //   result.push((({ id, url, like }) => ({ id, url, like: false }))(cat));
      // });
      // return result;
      return cats.reduce((pr, cat) => {
        return [
          ...pr,
          (({ id, url, like }) => ({ id, url, like: false }))(cat),
        ];
      }, []);
    });
};
