import { postRequestFactory,handleResponse} from "../utils/fetchUtil";

const BASE_URL = "https://reqres.in/api/";

export const login = async (data) => {
  const response = await fetch(BASE_URL + "login", postRequestFactory(data));
  return await handleResponse(response);
};

export const register = async (data) => {
  const response = await fetch(BASE_URL + "register", postRequestFactory(data));
  return await handleResponse(response);
};

