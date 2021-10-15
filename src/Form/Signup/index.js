import React from "react";
import {Box } from "@mui/material";
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
      console.log(values);
      // submit form
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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
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
          label="email"
          id="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <InputField
          required
          label="password"
          type="password"
          id="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <InputField
          required
          label="confirm password"
          type="password"
          id="confirmPassword"
          placeholder="confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <Button style={btnstyle} fullWidth color="error" variant="contained">
          SignUp
        </Button>
        <Link to="/">
          {" "}
          <h4>Already have an account ? Login</h4>
        </Link>
      </div>
    </Box>
  );
};

export default SignUpForm;
