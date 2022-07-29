import Sidebar from "./layout/Sidebar";
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW} from "../helpers/colors";
import {ContactContext} from "../contexts/contactContext"
import {useEffect} from "react";
import {useImmer} from "use-immer";
import {createContact, deleteContact, getAllContacts, getAllGroups} from "../services/contactServices";
import SearchContact from "./contacts/SearchContact";
import _ from "lodash";
import data from "bootstrap/js/src/dom/data";
import {toast, ToastContainer} from "react-toastify";
import {confirmAlert} from 'react-confirm-alert';
import AllContacts from "./contacts/AllContacts";

const MainContent = () => {

    const [allContacts, setAllContacts] = useImmer([]);
    const [allGroups, setAllGroups] = useImmer([]);
    const [filteredContacts, setFilteredContacts] = useImmer([]);

    const location = useLocation();

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: contactsData} = await getAllContacts();
                const {data: groupData} = await getAllGroups();

                setAllContacts(contactsData);
                setFilteredContacts(contactsData)
                setAllGroups(groupData);

            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [])

    const onSearchInputChange = _.debounce((inputValue) => {
        if (!inputValue) return setFilteredContacts([...allContacts]);

        setFilteredContacts((draft) =>
            draft.filter((c) =>
                c.fullname.toLowerCase().includes(inputValue.toLowerCase())
            )
        )
    }, 1000)

    const onCreateContact = async (values) => {
        try {
            const {data: createdContact, status} = await createContact(values);
            if (status === 201) {
                toast.success("contact is created")

                setFilteredContacts((draft) => {
                    draft.push(data)
                })
                setAllContacts((draft) => {
                    draft.push(data)
                })
                navigate('/contact');
            }

        } catch (err) {
            console.log(err.message);
        }
    }

    const onDeleteContact = async (contactId) => {
        const contactBackup = [...allContacts];
        try {

            setFilteredContacts((draft) =>
                draft.filter((c) => c.id !== contactId)
            )

            setAllContacts((draft) =>
                draft.filter((c) => c.id !== contactId)
            )

            const {status} = await deleteContact(contactId);

            if (status !== 200) {
                setAllContacts(contactBackup);
                setFilteredContacts(contactBackup);

            }

        } catch (err) {
            console.log(err.message);
            setFilteredContacts(contactBackup);
            setAllContacts(contactBackup);
        }

    }
    const onConfirmDelete = (contactId, contactFullName) => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (
                    <div
                        style={{
                            backgroundColor: CURRENTLINE,
                            border: `1px solid ${PURPLE}`,
                            borderRadius: "1em",
                        }}
                        className="p-4"
                    >
                        <h1 style={{color: YELLOW}}>Delete Contact</h1>
                        <p style={{color: FOREGROUND}}>
                            Are you sure, you want to delete ${contactFullName}?
                        </p>
                        <button
                            onClick={() => {
                                onDeleteContact(contactId);
                                onClose();
                            }}
                            className="btn mx-2"
                            style={{backgroundColor: PURPLE}}
                        >
                            I am sure
                        </button>
                        <button
                            onClick={onClose}
                            className="btn"
                            style={{backgroundColor: COMMENT}}
                        >
                            Cancel
                        </button>
                    </div>
                )
            }
        });
    }

    return (
        <ContactContext.Provider
            value={{
                allContacts, setAllContacts,
                allGroups, setAllGroups,
                filteredContacts, setFilteredContacts, onSearchInputChange,
                onCreateContact, onConfirmDelete
            }}>
            <div className="h-100 w-100 mx-0 px-0">
                <div className="row h-100 ">
                    <div className="col-2 px-0 position-sticky">
                        <Sidebar/>
                    </div>
                    <div className="col-10 position-relative overflow-scroll h-100"
                         style={{backgroundColor: CURRENTLINE}}>
                        <div className="mx-2 mt-5 h-100 d-flex flex-grow-1 flex-wrap"
                             style={{
                                 justifyContent: "flex-start",
                                 flexDirection: "row",
                                 alignContent: "flex-start"
                             }}>
                            {location.pathname === "/contact" ?
                                <div className="d-flex justify-content-center align-items-center"
                                     style={{width: "-webkit-fill-available"}}>
                                    <SearchContact/>
                                </div> : null
                            }
                            <ToastContainer theme="colored"/>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </ContactContext.Provider>)
}
export default MainContent;