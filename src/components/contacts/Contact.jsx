import {Link} from "react-router-dom";
import {CYAN, ORANGE, RED} from "../../helpers/colors";
import {useContext} from "react";
import {ContactContext} from "../../contexts/contactContext";

const Contact = ({contact, confirmDelete}) => {

    return (
        <>
            <div className="card col-md-5  mx-5 mb-5" style={{height: "fit-content"}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-fluid rounded"
                                // src="https://via.placeholder.com/200"
                                 src={contact.photo}
                                 alt="contact image"/>
                        </div>
                        <div className="col-6 px-0 d-flex align-items-center justify-content-around">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    full name:{" "}
                                    <span className="fw-bold">
                                            {contact.fullname}
                                        </span>
                                </li>
                                <li className="list-group-item">
                                    Phone Number:{" "}
                                    <span className="fw-bold">
                                            {contact.mobile}
                                        </span>
                                </li>
                                <li className="list-group-item">
                                    Group:{" "}
                                    <span className="fw-bold">
                                            {contact.group}
                                        </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1  d-flex align-items-center justify-content-center"
                        >
                            <ul className="list-group list-group-flush">
                                <Link
                                    to={"/"}
                                    className="btn my-1"
                                    style={{backgroundColor: ORANGE}}
                                >
                                    <i className="fa fa-eye"/>
                                </Link>
                                <Link
                                    to={`/contact/edit/${contact.id}`}
                                    className="btn my-1"
                                    style={{backgroundColor: CYAN}}
                                >
                                    <i className="fa fa-pen"/>
                                </Link>
                                <button
                                    onClick={confirmDelete}
                                    className="btn my-1"
                                    style={{backgroundColor: RED}}
                                >
                                    <i className="fa fa-trash"/>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;