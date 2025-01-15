const requestConfig = {
  baseUrl: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_sHTJFxrUksyPzxBgrAtRU2t5aiCqI4ZN9SZBwwoDQ7IgmUCwKTh9xdTyaTmHY3HO",
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
};

export const getCards = () => {
  return fetch(`${requestConfig.baseUrl}/images/search?limit=10&page=1`, {
    method: "GET",
    headers: requestConfig.headers,
  }).then(checkResponse);
};