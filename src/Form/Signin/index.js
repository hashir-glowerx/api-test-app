import React from "react";
import Button from "../../components/Button"
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/Input";

const SignInForm = () => {
  const btnstyle = { margin: "15px 0" };
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      alert(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter valid email")
        .required("This Field is Required"),
      password: Yup.string()
        .min(6, "Password is to short")
        .max(8, "Password is to long")
        .required("This Field is Required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
      fullWidth
          required
          label="email"
          id="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
    
        <InputField
        fullWidth
          required
          label="password"
          type="password"
          id="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      <Button style={btnstyle} fullWidth color="primary" variant="contained">
        SignIn
      </Button>
      <Link to="/signup">
        {" "}
        <h4>Create an account ? <span>Sign Up</span> </h4>
      </Link>
    </form>
  );
};

export default SignInForm;
