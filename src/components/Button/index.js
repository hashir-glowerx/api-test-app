import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import "./index.css";

const Button = ({ color, type, variant, value, loading, ...rest }) => {
  return (
    <MuiButton className="form-button" fullWidth color={color} variant={variant} {...rest} disabled={loading} type={type}>
      {loading && <CircularProgress className="form-button__loading" size={16} />}
      {value}
    </MuiButton>
  );
};

export default Button;
