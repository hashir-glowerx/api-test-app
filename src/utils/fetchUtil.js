export const BASE_URL = "https://reqres.in/api/";

export const postRequestFactory = (data, headers) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(data),
  };
};

export const handleResponse = async (response) => {
  try {
    const status = response.status;
    const json = await response.json();
    switch (true) {
      case status >= 200 && status < 300:
        return { ok: true, message: "Success", data: json };
      case status >= 400 && status < 500:
        throw json.error;
      default:
        throw "Server Error!";
    }
  } catch (error) {
    return { ok: false, message: error };
  }
};