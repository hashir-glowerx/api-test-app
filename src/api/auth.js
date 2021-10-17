/**************  Bad code  *****************/
// export const login = async (data) => {
//   try {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };
//     const response = await fetch("https://reqres.in/api/login", requestOptions);

//     const status = response.status;
//     switch (true) {
//       case status >= 200 && status < 300:
//         const json = await response.json();
//         return { ok: true, message: "Success", data: json };
//       case status >= 400 && status < 500:
//         throw "Bad request";
//       default:
//         throw "Server Error!";
//     }
//   } catch (error) {
//     return { ok: false, message: error };
//   }
// };

// export const register = async (data) => {
//   try {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };
//     const response = await fetch("https://reqres.in/api/register", requestOptions);

//     const status = response.status;
//     switch (true) {
//       case status >= 200 && status < 300:
//         const json = await response.json();
//         return { ok: true, message: "Success", data: json };
//       case status >= 400 && status < 500:
//         throw "Bad request";
//       default:
//         throw "Server Error!";
//     }
//   } catch (error) {
//     return { ok: false, message: error };
//   }
// };

/**************  Bad code ends  *****************/

/**************  Good Practices  *****************/

const BASE_URL = "https://reqres.in/api/";

const postRequestFactory = (data, headers) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(data),
  };
};

const handleResponse = async (response) => {
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

// Apis

export const login = async (data) => {
  const response = await fetch(BASE_URL + "login", postRequestFactory(data));
  return await handleResponse(response);
};

export const register = async (data) => {
  const response = await fetch(BASE_URL + "register", postRequestFactory(data));
  return await handleResponse(response);
};

/**************  Good Practices ****************/
