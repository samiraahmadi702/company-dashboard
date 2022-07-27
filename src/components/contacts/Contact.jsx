import {Link} from "react-router-dom";
import {CYAN, ORANGE, RED} from "../../helpers/colors";

const Contact = () => {
    return (
        <>
            <div className="col-5 my-5" style={{backgroundColor: "red"}}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid rounded"
                                     src="https://via.placeholder.com/200"
                                     alt="contact image"/>
                            </div>
                            <div className="col-6 px-0 d-flex align-items-center justify-content-around">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        full name:{" "}
                                        <span className="fw-bold">
                                            Samira Ahmadi
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        Phone Number:{" "}
                                        <span className="fw-bold">
                                            873475673
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        Group:{" "}
                                        <span className="fw-bold">
                                            Family
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
                                        to={"/"}
                                        className="btn my-1"
                                        style={{backgroundColor: CYAN}}
                                    >
                                        <i className="fa fa-pen"/>
                                    </Link>
                                    <Link
                                        to={"/"}
                                        className="btn my-1"
                                        style={{backgroundColor: RED}}
                                    >
                                        <i className="fa fa-trash"/>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;