import React, { useRef, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import setBodyColor from "../setBodyColor";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import ErrorBlock from "./UI/ErrorBlock";

const Login = () => {
  const email_id = "surajbhola@gmail.com";
  const password = "12345";
  const email_ref = useRef("");
  const pass_ref = useRef("");
  const loginSubmitHandler = (e) => {
    if (
      email_ref.current.value === email_id &&
      pass_ref.current.value === password
    ) {
      navigate("/dashboard");
    } else {
      e.preventDefault();
      throw new Error("Failed to Login");
    }
  };
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginSubmitHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foodItems"] }); 
      navigate("/dashboard");
    }, 
  });

  function handleSubmit(e) {
    mutate(e);
  }

  setBodyColor({ color: "#591c68" });
  return (
    <div>
      <div className="loginDiv">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="loginform">
          <div className="formheadingDiv">
            <h2>Welcome to</h2>
            <h1>RestroDine Tech</h1>
          </div>
          <div className="socialLoginDiv">
            <div className="sociallogin">
              <img src="./google.png" alt="" />
              <p>Login with Google</p>
            </div>
            <div className="sociallogin">
              <img src="./facebook.png" alt="" />
              <p>Login with Facebook</p>
            </div>
          </div>
          <div className="linebarDiv">
            <img src="./linebar.png" alt="" />
            <p>OR</p>
            <img src="./linebar.png" alt="" />
          </div>
          <form action="">
            <div className="LoginInput">
              <MailOutlineIcon className="mailIcon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                ref={email_ref}
                required
              />
            </div>
            <div className="LoginInput">
              <LockOpenIcon className="passIcon" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                ref={pass_ref}
                required
              />
            </div>
            <div className="loginBtnDiv">
              {isError && (
                <div className="error-block">
                  <div className="error-block-icon">!</div>
                  <div className="error-block-text">
                    <h2>{"Failed to login"}</h2>
                    <p>
                      {
                        "Failed to login. Please check your input and try again later"
                      }
                    </p>
                  </div>
                </div>
              )}
              {isPending && "Logging..."}
              {!isPending && (
                <button className="loginBtn" onClick={handleSubmit}>
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
