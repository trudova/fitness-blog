import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

    
    return (
       <div className="login">
           <span className="loginTitle">Login</span>

            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Username:</label>
                <input type="text" name="" id="email" placeholder="Enter your username"  className="loginInput" ref={userRef} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="" id="password" placeholder="Enter your password" className="loginInput" ref={passwordRef}  />
                <button className="loginButton" type="submit" disabled={isFetching} >Login</button>
            </form>
             <button className="liginRegisterButton"> <Link className="link" to="/register">Register</Link>  </button>
            
        </div>
    )
}
