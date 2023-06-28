import "./Navbar.css"
import { NavLink } from "react-router-dom";
import Image from "../Images/Images";
import routes from "../../constants/routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-list">
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={routes.homePage}><FontAwesomeIcon icon={faBuildingColumns} size="2xl" style={{ color: "#deb887", }}></FontAwesomeIcon></NavLink>
            </div>
            <div className="links">
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={routes.galleryPage}>Gallery</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={routes.artistsPage}>Artists</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={routes.customerSupportPage}>Customer Support</NavLink>
            </div>
        </div>
    )
}

export default Navbar;