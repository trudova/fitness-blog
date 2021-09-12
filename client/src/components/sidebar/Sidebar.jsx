
import axios from 'axios';
import { useEffect, useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
export default function Sidebar() {
   const [cats, setCats] = useState([]);
   useEffect(()=>{
    const getCats = async()=>{
        const res = await axios.get("/categories");
        setCats(res.data)
    }
    getCats();
   },[])
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img src="https://sun9-31.userapi.com/impf/c623325/v623325219/2fdf2/w-PC_Mx4JPs.jpg?size=1280x853&quality=96&sign=9d9c07120500fd58b02b9a16a50d8184&type=album" alt="" />
               <p id="about">Hello. My Name Liubov Trudova, I am Web Developer and tester, with a hobbies in in Mobile development, fitness, acting traveling, and sleeping, the lest one is never enough. I hope this application will be helpful for you.  I will try to share all my knowledge of body and face fitness here.
               <br /> you can contact me by: <strong>liubovtrudovaapplying@gmail.com</strong> </p>
           </div>

           <div className="sidebarItem">
               <span className="sidebarTitle"> CATEGORIES</span>
               <ul className="sidebarList">
                   {cats.map(c=>(
                       <Link to={`/?cat=${c.name}`} className="link sidebarListItem">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                   ))}
               </ul>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle"> FOLLOW ME</span>
                <div className="sidebarSocial">
                     <a href="https://www.instagram.com/liubovtrudova/?hl=en" rel="noreferrer" target="_blank" class="link"><i className="sidebarIcon fab fa-instagram-square"></i></a> 
                </div>
            </div>   
        </div>
    )
}
