import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";
import "./index.css";

const Input = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    size: "small",
    variant: "outlined",
    error: false,
    autoComplete: "off",
    helperText: "",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField className="form-input" {...configTextField} />;
};

export default Input;
