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
                console.log(allContacts);
                console.log(allGroups);

            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [])

    return (<ContactContext.Provider value={{allContacts, setAllContacts}}>
        <div className="h-100 w-100 mx-0 px-0">
            <div className="row h-100">
                <div className="col-2 px-0">
                    <Sidebar/>
                </div>
                <div className="col-10" style={{backgroundColor: CURRENTLINE}}>
                    <div className="mx-5">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </ContactContext.Provider>)
}
export default MainContent;