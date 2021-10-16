import Input from "../../Input";
import Button from "../../Button";

const SignUpForm = ({ formik, signUpStatus }) => {
  return (
    <form onSubmit={formik.handleSubmit} className="card-container__form">
      <Input
        required
        label="Name"
        id="name"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        helperText={formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
        value={formik.values.name}
      />
      <Input
        required
        label="Email"
        id="email"
        placeholder="Email"
        onChange={formik.handleChange}
        helperText={formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
        value={formik.values.email}
      />
      <Input
        required
        label="Password"
        type="password"
        id="password"
        placeholder="Password"
        helperText={formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Input
        required
        label="Confirm password"
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        helperText={formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : ""}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <Button loading={signUpStatus} type="submit" value={"Sign Up"} fullWidth color="primary" variant="outlined" />
    </form>
  );
};

export default SignUpForm;
