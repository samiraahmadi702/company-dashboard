import Sidebar from "./layout/Sidebar";
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {CURRENTLINE} from "../helpers/colors";
import {ContactContext} from "../contexts/contactContext"
import {useEffect} from "react";
import {useImmer} from "use-immer";
import {createContact, getAllContacts, getAllGroups} from "../services/contactServices";
import SearchContact from "./contacts/SearchContact";
import _ from "lodash";
import data from "bootstrap/js/src/dom/data";
import {toast, ToastContainer} from "react-toastify";

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

    return (
        <ContactContext.Provider
            value={{
                allContacts, setAllContacts,
                allGroups, setAllGroups,
                filteredContacts, setFilteredContacts, onSearchInputChange,
                onCreateContact
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