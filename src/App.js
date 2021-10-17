import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};

export default App;
