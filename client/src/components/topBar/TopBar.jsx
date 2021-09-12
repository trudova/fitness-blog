import "./topBar.css"
import {Link} from "react-router-dom"; 
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
     const {user, dispatch} = useContext(Context);
     const PF = "http://localhost:5000/images/"
     const handleLogout =() =>{
        dispatch({type: "LOGOUT"})
     }
    return (
        <div className="top">
             <div className="topLeft">
                <a href="https://www.instagram.com/liubovtrudova/?hl=en" rel="noreferrer" target="_blank" class="link"><i className="topIcon fab fa-instagram-square"></i></a>
            </div>

             <div className="topCenter">
             <ul className="topList">
                 <li className="topListItem"> <Link className="link" to="/">HOME</Link> </li>
                 <li className="topListItem"> <Link className="link" to="/about">ABOUT</Link> </li>
                 <li className="topListItem"> <Link to="/write" className="link">WRITE</Link> </li>
                 <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
             </ul>
             </div>

              <div className="topRight">
                  {user? (
                <Link to="/settings">
                <img className="topImg" src={PF + user.profilePic} alt="" />
                </Link> 
                  ):(
                      <ul className="topList">
                          <li className="topListItem">
                       <Link className="link" to="/login">LOGIN</Link></li>
                       <li className="topListItem">
                      <Link className="link" to="/register">REGISTER</Link>
                      </li>

                      </ul>
                  )}
                
              </div>
        </div>
    )
}
