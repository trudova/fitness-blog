import "./register.css"
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios"
export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handelSubmit = async (e)=>{
        e.preventDefault();
        setError(false)
        try {
             const res = await axios.post("/auth/register",{
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login")
        } catch (error) {
             setError(true)
        }
       
       
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handelSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="" id="username" placeholder="Enter your username..."  className="registerInput"
                onChange ={e=> setUsername(e.target.value)}/>
                
                <label htmlFor="email">Email:</label>
                <input type="text" name="" id="email" placeholder="Enter your email..."  className="registerInput"  onChange ={e=> setEmail(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input type="password" name="" id="password" placeholder="Enter your password..." className="registerInput" 
                 onChange ={e=> setPassword(e.target.value)}/>
                <button className="registerButton" type="submit">Register</button>
            </form>
             <button className="registerLoginButton" type="submit"> <Link className="link" to="/login">Login</Link> </button>
            {error && <span className="err">somfing went wrong try again</span>}
        </div>
    )
}
