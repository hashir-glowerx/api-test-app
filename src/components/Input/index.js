import React from "react";
import { TextField } from "@mui/material";
import "./index.css";

const Input = ({ label, placeholder, value, handleChange, ...rest }) => {
  return <TextField className={"form-input"} size={"small"} fullWidth label={label} placeholder={placeholder} onChange={handleChange} value={value} {...rest} />;
};

export default Input;
