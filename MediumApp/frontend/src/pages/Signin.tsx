import React from "react";
import Quote from "../components/Quote";
import Auth from "../components/Auth";
function Signin() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Auth type="signin"></Auth>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default Signin;
