import * as yup from "yup";

class Signup {
  static signupValidation = yup.object({
    name: yup.string().required("This field is required."),
    email: yup.string().email().required("This field is required."),
    password: yup.string().min(4, "Password is too short.").max(12, "Password is too long.").required("This field is required."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Confirm password is required."),
  });
}

export default Signup;
