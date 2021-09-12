import { useContext } from "react";
import { Context } from "../../context/Context";
import "./about.css"

export default function About() {
      const { user } = useContext(Context);
      const PF = "http://localhost:5000/images/"
    return (
        <div className="about">
         <img src={PF+"1631222160694Screen Shot 2021-08-30 at 3.41.42 PM.png"} alt=""  className="aboutImg"/>
         <div className="aboutInfo">
             <h1>Hello, My name is Liubov Trudova</h1>
             <p>Hello. My Name Liubov Trudova, I am Web Developer and tester, with a hobbies in in Mobile development, fitness, acting traveling, and sleeping. Code and sleep are never enough. <br /> I got addicted to code once and still enjoying my addiction, trying to learn new technology every day of my life. Where is so my to learn for me, so much to mastering. But for today I hope you will enjoy this simple blog application. Hopefully you will learn something new from it too.Feel free to register as well. <br />You can contact me by: <b>liubovtrudovaapplying@gmail.com</b> 
</p>


         </div>
        </div>
    )
}
