import "./sidebar.css"
import img from './mtfuji.jpg'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImg" src={img} alt="" />
        <p className="sidebarPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, possimus ea impedit, veritatis voluptate
          autem molestiae ipsa similique perferendis nam ullam corrupti dolorem fugit recusandae debitis iure cumque nihil placeat.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Anime</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Movies</li>
          <li className="sidebarListItem">Fashion</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
