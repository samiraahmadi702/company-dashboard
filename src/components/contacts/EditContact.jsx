import {ErrorMessage, Field, Form, Formik} from "formik";
import {contactSchema} from "./validation";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ContactContext} from "../../contexts/contactContext";
import {useImmer} from "use-immer";
import {getContactById, updateContact} from "../../services/contactServices";
import {toast} from "react-toastify";
import {COMMENT, ORANGE, PURPLE} from "../../helpers/colors";
import data from "bootstrap/js/src/dom/data";

const EditContact = () => {

    const {contactId} = useParams();

    const {setAllContacts, setFilteredContacts, allGroups} = useContext(ContactContext);

    const [contact, setContact] = useImmer({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: contactData} = await getContactById(contactId);
                setContact(contactData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const submitForm = async (values) => {
        try {
            const {data, status} = await updateContact(contactId, values);

            if (status === 200) {

                toast.info("update is done");

                setAllContacts((draft) => {
                    const contactIndex = draft.findIndex(
                        (c) => c.id === parseInt(contactId)
                    );
                    draft[contactIndex] = {...data};
                });
                setFilteredContacts((draft) => {
                    const contactIndex = draft.findIndex(
                        (c) => c.id === parseInt(contactId)
                    );
                    draft[contactIndex] = {...data};
                });

                navigate("/contact");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <hr style={{backgroundColor: ORANGE}}/>
            <div className="col-md-8">
                <Formik
                    enableReinitialize
                    initialValues={contact}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        submitForm(values);
                    }}
                >
                    <Form>
                        <div className="mb-2">
                            <Field
                                name="fullname"
                                type="text"
                                className="form-control"
                                placeholder="fullname"
                            />
                            <ErrorMessage
                                name="fullname"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                        </div>
                        <div className="mb-2">
                            <Field
                                name="photo"
                                type="text"
                                className="form-control"
                                placeholder="photo"
                            />

                            <ErrorMessage
                                name="photo"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                        </div>
                        <div className="mb-2">
                            <Field
                                name="mobile"
                                type="number"
                                className="form-control"
                                placeholder="mobile"
                            />

                            <ErrorMessage
                                name="mobile"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                        </div>
                        <div className="mb-2">
                            <Field
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="email"
                            />
                            <ErrorMessage
                                name="email"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                        </div>
                        <div className="mb-2">
                            <Field
                                name="job"
                                type="text"
                                className="form-control"
                                placeholder="job"
                            />

                            <ErrorMessage
                                name="job"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                        </div>
                        <div className="mb-2">
                            <Field
                                name="group"
                                as="select"
                                className="form-control"
                            >
                                <option value="">choose group</option>
                                {allGroups.length > 0 &&
                                    allGroups.map((group) => (
                                        <option key={group.id} value={group.id}>
                                            {group.name}
                                        </option>
                                    ))}
                            </Field>

                            <ErrorMessage
                                name="group"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                        </div>
                        <div className="mx-2">
                            <input
                                type="submit"
                                className="btn"
                                style={{backgroundColor: PURPLE}}
                                value="Edit Contact"
                            />
                            <Link
                                to={"/contacts"}
                                className="btn mx-2"
                                style={{backgroundColor: COMMENT}}
                            >
                                Cancel
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
export default EditContact;
