// Custom components
import Button from "../../Button";
import Input from "../../Input";
import { Formik } from "formik";

// Hooks
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

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
      setLoginStatus(false);
      showToast(true, "Success");
      localStorage.setItem("login", JSON.stringify(result.ok));

      return;
    } else {
      showToast(false, result.message);
      localStorage.setItem("login", JSON.stringify(result.ok));
    }
    setLoginStatus(false);
  };

  useEffect(() => {
    const getLocalItems = () => {
      let token = localStorage.getItem("login");
      let val = JSON.parse(localStorage.getItem("login"));
      if (token) {
        if (val) history.push("/");
      } else {
        return;
      }
    };
    getLocalItems();
  }, []);

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
};

export default LoginForm;
