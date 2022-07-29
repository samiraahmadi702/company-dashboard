import {Formik, Field, Form, ErrorMessage} from "formik";
import {useContext} from "react";
import {ContactContext} from "../../contexts/contactContext";
import {contactSchema} from "./validation";
import {Link, useNavigate} from "react-router-dom";

const CreateContact = () => {

    const {onCreateContact, allGroups} = useContext(ContactContext);

    const navigate = useNavigate();


    return (
        <div className="container mx-auto d-flex justify-content-center align-items-center"
        >
            <div className="col-7" style={{marginRight: "10px"}}>
                <Formik
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                        onCreateContact(values)
                    }}
                    initialValues={{fullname: "", photo: "", mobile: "", email: "", job: "", group: ""}}
                >
                    <Form className="mt-5">
                        <div className="mb-2">
                            <Field type="text" name="fullname" placeholder="fullname"
                                   className="form-control"
                            />
                            <ErrorMessage name="fullname"
                                          render={(msg) => (<div className="text-danger">{msg}</div>)}
                            />
                        </div>
                        <div className="mb-2">
                            <Field type="text" name="photo" placeholder="photo"
                                   className="form-control"/>
                            <ErrorMessage name="photo"
                                          render={(msg) => (<div className="text-danger">{msg}</div>)}
                            />

                        </div>
                        <div className="mb-2">
                            <Field type="number" name="mobile" placeholder="phone number"
                                   className="form-control"/>
                            <ErrorMessage name="mobile"
                                          render={(msg) => (<div className="text-danger">{msg}</div>)}
                            />

                        </div>
                        <div className="mb-2">
                            <Field type="email" name="email" placeholder="emails"
                                   className="form-control "/>
                            <ErrorMessage name="email"
                                          render={(msg) => (<div className="text-danger">{msg}</div>)}
                            />

                        </div>
                        <div className="mb-2">
                            <Field type="text" name="job" placeholder="job"
                                   className="form-control">
                            </Field>
                            <ErrorMessage name="job"
                                          render={(msg) => (<div className="text-danger">{msg}</div>)}
                            />

                        </div>
                        <div className="mb-5">
                            <Field as="select" name="group"
                                   className="form-control">
                                <option value=""> choose one group</option>
                                {
                                    allGroups.map((group) => (
                                        <option value={group.id} key={group.id}>
                                            {group.name}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="group"
                                          render={(msg) => (<div className="text-danger">{msg}</div>)}
                            />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/contact"
                              className="btn btn-warning mx-4">
                            Cancel
                        </Link>
                    </Form>
                </Formik>
            </div>
            <div className="col-5">
                <img
                    src={require("../../assets/man-taking-note.png")}
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                />
            </div>
        </div>
    )
}
export default CreateContact;