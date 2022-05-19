import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"
import img from "./parrot.jpg"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={img} alt="" />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="mail" placeholder="example@mail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
