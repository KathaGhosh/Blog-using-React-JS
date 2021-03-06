import { Link } from "react-router-dom"
import "./topbar.css"
import img from "./Katha.jpeg"
export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><a className="link" href="/">HOME</a></li>
                <li className="topListItem"><a className="link" href="/">ABOUT</a></li>
                <li className="topListItem"><a className="link" href="/">CONTACT</a></li>
                <li className="topListItem"><a className="link" href="/write">WRITE</a></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
        {user ? (<img 
        className="topImage"
        src= {img} alt="" />) : (
          <ul className="topList">
            <li className="topListItem"><a className="link" href="/login">LOGIN</a></li>
            <li className="topListItem"><a className="link" href="/register">REGISTER</a></li>
          </ul>
        )}
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
