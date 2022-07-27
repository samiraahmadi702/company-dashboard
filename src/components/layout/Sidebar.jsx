import './Sidebar.css';
import {COMMENT, CYAN} from '../../helpers/colors'
import {NavLink} from "react-router-dom";

const Sidebar = () => {

    let notActiveLinkStyle = {
        textDecoration: "none",
        color: "white"


    }
    let isActiveLinkStyle = {
        textDecorationLine: "underline",
        textDecorationStyle: "double",
        color: "white"
    };

    return (
        <nav className="bg-dark h-100 text-white justify-content-center align-items-center">
            <div className="container-fluid">
                <ul className="navbar-nav px-4">
                    <li className="nav-item mt-3">
                        <a href="#menu1"
                           className="nav-NavLink"
                           data-bs-toggle="collapse"
                        >
                            <i className="fas fa-address-book " style={{marginRight: "3px"}}></i>
                            Contacts
                            <span className="dropdown-toggle"></span>
                        </a>
                        <ul className="collapse flex-column " id="menu1">
                            <li>
                                <NavLink to={"/contact"}
                                         style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                    <i className="fas fa-id-card" style={{marginRight: "3px"}}></i>
                                    All Contacts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"} className="nav-NavLink"
                                         style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                    <i className="fas fa-file-signature" style={{marginRight: "3px"}}></i>
                                    Add Contact
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-NavLink"
                           href="#menu2"
                           data-bs-toggle="collapse"
                        >
                            <i className="fas fa-video" style={{marginRight: "3px"}}></i>
                            Videos
                            <span className="dropdown-toggle"></span>
                        </a>
                    </li>
                    <ul className="collapse flex-column" id="menu2">
                        <li>
                            <NavLink to={"/"} className="nav-NavLink"
                                     style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                <i className="fas fa-video-slash" style={{marginRight: "3px"}}></i>
                                All Videos
                            </NavLink>
                        </li>
                    </ul>
                    <li className="nav-item">
                        <a className="nav-NavLink"
                           href="#menu3"
                           data-bs-toggle="collapse"
                        >
                            <i className="fas fa-blog" style={{marginRight: "3px"}}></i>
                            Blog
                            <span className="dropdown-toggle"></span>
                        </a>
                    </li>
                    <ul className="collapse flex-column" id="menu3">
                        <li>
                            <NavLink to={"/"} className="nav-NavLink"
                                     style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                <i className="fas fa-rss" style={{marginRight: "3px"}}></i>
                                Overview</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="nav-NavLink"
                                     style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                <i className="fas fa-edit" style={{marginRight: "3px"}}></i>
                                Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="nav-NavLink"
                                     style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                <i className="fas fa-address-card" style={{marginRight: "3px"}}></i>
                                Writers
                            </NavLink>
                        </li>
                    </ul>
                    <li className="nav-item">
                        <a className="nav-NavLink"
                           href="#menu4"
                           data-bs-toggle="collapse"
                        >
                            <i className="fas fa-tty" style={{marginRight: "3px"}}></i>
                            Communication
                            <span className="dropdown-toggle"></span>
                        </a>
                    </li>
                    <ul className="collapse flex-column" id="menu4">
                        <li>
                            <NavLink to={"/"} className="nav-NavLink"
                                     style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                <i className="fas fa-mail-bulk" style={{marginRight: "3px"}}></i>
                                Inbox
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="nav-NavLink"
                                     style={({isActive}) => isActive ? isActiveLinkStyle : notActiveLinkStyle}>
                                <i className="fas fa-at" style={{marginRight: "3px"}}></i>
                                Chat
                            </NavLink>
                        </li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}
export default Sidebar;