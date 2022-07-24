import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="bg-dark h-100 text-white justify-content-center align-items-center">
            <div className="container-fluid">
                <ul className="navbar-nav px-4">
                    <li className="nav-item mt-3">
                        <a href="#menu1"
                           className="nav-link"
                           data-bs-toggle="collapse"
                        >
                            <i className="fas fa-address-book " style={{marginRight: "3px"}}></i>
                            Contacts
                            <span className="dropdown-toggle"></span>
                        </a>
                        <ul className="collapse flex-column " id="menu1">
                            <li>
                                <a href="#" className="nav-link">
                                    <i className="fas fa-id-card" style={{marginRight: "3px"}}></i>
                                    All Contacts</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    <i className="fas fa-file-signature" style={{marginRight: "3px"}}></i>
                                    Add Contact</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
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
                            <a href="#" className="nav-link">
                                <i className="fas fa-video-slash" style={{marginRight: "3px"}}></i>
                                All Videos</a>
                        </li>
                    </ul>
                    <li className="nav-item">
                        <a className="nav-link"
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
                            <a href="#" className="nav-link">
                                <i className="fas fa-rss" style={{marginRight: "3px"}}></i>
                                Overview</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">
                                <i className="fas fa-edit" style={{marginRight: "3px"}}></i>
                                Posts</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">
                                <i className="fas fa-address-card" style={{marginRight: "3px"}}></i>
                                Writers</a>
                        </li>
                    </ul>
                    <li className="nav-item">
                        <a className="nav-link"
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
                            <a href="#" className="nav-link">
                                <i className="fas fa-mail-bulk" style={{marginRight: "3px"}}></i>
                                Inbox</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">
                                <i className="fas fa-at" style={{marginRight: "3px"}}></i>
                                Chat</a>
                        </li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}
export default Sidebar;