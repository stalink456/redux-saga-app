import axios from "axios";

export const getQuery = async (queryId) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${queryId}&_limit=6`;
  return await axios.get(url);
};
