import * as yup from "yup";


const LoginValidation = yup.object({
  email: yup.string().email().required("This field is required."),
  password: yup.string().required("This field is required."),
});

export default LoginValidation;
