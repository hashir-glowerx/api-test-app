import * as yup from "yup";

class LoginValidation {
  static stg = yup.object({
    email: yup.string().email().required("This field is required."),
    password: yup.string().required("This field is required."),
  });
}

export default LoginValidation;
