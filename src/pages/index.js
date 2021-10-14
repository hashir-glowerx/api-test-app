import React, { useState } from "react";
import SignUp from "../SignUp";
import SignIn from "../Signin";
const Page = () => {
  const [nextbutton, setNextbutton] = useState(true);
  const handleOnChange = () => {
    setNextbutton(!nextbutton);
  };
  return (
    <div>
      {/* {false ?<SignIn handleOnChange={handleOnChange} /> : <SignUp />} */}
      <SignUp />
    </div>
  );
};

export default Page;
