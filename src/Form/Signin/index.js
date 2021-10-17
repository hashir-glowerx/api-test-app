import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/Input";
import Snackbar from "../../components/Snackbar";
const SignInForm = () => {
  const btnstyle = { margin: "15px 0" };
  const [response, setresponse] = React.useState();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      const res = fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          setresponse(response.status);
          response.json()})
        .then((json) => console.log(json));
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter valid email")
        .required("This Field is Required"),
      password: Yup.string()
        .min(6, "Password is to short")
        .max(12, "Password is to long")
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
      <Button
        type="submit"
        style={btnstyle}
        fullWidth
        color="success"
        variant="contained"
      >
        SignIn
      </Button>

      <Link to="/signup">
        {" "}
        <h4>
          Create an account ? <span>Sign Up</span>{" "}
        </h4>
      </Link>
      {response === 400 ? <Snackbar /> : <></>}
    </form>
  );
};

export default SignInForm;
