import React from "react";
import SignUp from "./signup";
import SignIn from "./signin";
import {   BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

const Page = ()=>{
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={()=><h1>Success</h1>}/>
      <Route  path="/signin" component={SignIn}/>
      <Route  path="/signup" component={SignUp}/>
    </Switch>
    </Router>
 
  );
};

export default Page;
