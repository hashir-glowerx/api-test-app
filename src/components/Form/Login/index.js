// Custom components
import Button from "../../Button";
import Input from "../../Input";
import { Formik } from "formik";

// Hooks
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useState } from "react";

// Validation classes
import LoginValidation from "../../../validations/login";

// api
import api from "../../../api";

// utils
import showToast from "../../../utils/notificationUtil";

// Custom css file
import "../../../common.css";

const LoginForm = () => {
  const history = useHistory();
  const [loginStatus, setLoginStatus] = useState(false);

  const handleSignUp = async (data) => {
    setLoginStatus(true);

    const result = await api.login(data);
    if (result.ok) {
      showToast(true, "Success");
      localStorage.setItem("login", JSON.stringify(result.data["token"]));
      history.push("/");
    } else {
      showToast(false, result.message);
    }

    setLoginStatus(false);
  };

  const isLogin = () => {
    let token = localStorage.getItem("login");
    if (token) return true;
    return false;
  };
  if (!isLogin())
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSignUp}
        validationSchema={LoginValidation}
      >
        {(formikProps) => (
          <form
            onSubmit={formikProps.handleSubmit}
            className="card-container__form"
          >
            <Input name="email" label="Email" placeholder="Email" />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Button
              loading={loginStatus}
              type="submit"
              value={"Log in"}
              fullWidth
              color="primary"
              variant="outlined"
            />
          </form>
        )}
      </Formik>
    );
  return (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );
};

export default LoginForm;
