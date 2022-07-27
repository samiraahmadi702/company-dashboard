import Sidebar from "./layout/Sidebar";
import {Outlet} from 'react-router-dom'
import {CURRENTLINE} from "../helpers/colors";
import {ContactContext} from "../contexts/contactContext"
import {useEffect} from "react";
import {useImmer} from "use-immer";
import {getAllContacts, getAllGroups} from "../services/contactServices";

const MainContent = () => {

    const [allContacts, setAllContacts] = useImmer([]);
    const [allGroups, setAllGroups] = useImmer([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: contactsData} = await getAllContacts();
                const {data: groupData} = await getAllGroups();

                setAllContacts(contactsData);
                setAllGroups(groupData);

            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [])

    return (<ContactContext.Provider
        value={{
            allContacts, setAllContacts,
            allGroups, setAllGroups
        }}>

        <div className="h-100 w-100 mx-0 px-0">
            <div className="row h-100 ">
                <div className="col-2 px-0 position-sticky">
                    <Sidebar/>
                </div>
                <div className="col-10 position-relative overflow-scroll h-100" style={{backgroundColor: CURRENTLINE}}>
                    <div className="mx-2 mt-5 h-100 d-flex flex-grow-1 flex-wrap"
                         style={{justifyContent: "flex-start", flexDirection: "row", alignContent: "flex-start"}}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </ContactContext.Provider>)
}
export default MainContent;