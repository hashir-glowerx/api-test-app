import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/Input";
const SignUpForm = () => {
  const btnstyle = { margin: "15px 0" };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      const response = fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        console.log(response.status);
    
    },
    validationSchema: yup.object({
      name: yup.string().required("This field is required."),
      email: yup.string().email().required("This field is required."),
      password: yup
        .string()
        .min(6, "Password is too short.")
        .max(12, "Password is too long.")
        .required("This field is required."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Confirm password is required."),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        fullWidth
        required
        label="name"
        id="name"
        placeholder="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <InputField
        required
        fullWidth
        label="email"
        id="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <InputField
        required
        fullWidth
        label="password"
        type="password"
        id="password"
        placeholder="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <InputField
        required
        fullWidth
        label="confirm password"
        type="password"
        id="confirmPassword"
        placeholder="confirm Password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      <Button
        type="submit"
        style={btnstyle}
        fullWidth
        color="success"
        variant="contained"
      >
        SignUp
      </Button>
      <Link to="/">
        {" "}
        <h4>Already have an account ? Login</h4>
      </Link>
    </form>
  );
};

export default SignUpForm;
