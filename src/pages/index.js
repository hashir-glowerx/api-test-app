import React from "react";
import SignUp from "./SignUp";
import SignIn from "./Signin";
import {   BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

const Page = ()=>{
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/signup" component={SignUp}/>
    </Switch>
    </Router>
 
  );
};

export default Page;
