import { handleResponse } from "../utils/fetchUtil";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async (page=1) => {
  const response = await fetch(`${BASE_URL}?_limit=10`);
  return await handleResponse(response);
};
