import {useContext} from "react";
import {ContactContext} from "../../contexts/contactContext";
import Contact from "./Contact";

const AllContacts = () => {
    const {allContacts} = useContext(ContactContext);

    return (
        <>
            {
                allContacts.map(c => (
                        <Contact contact={c} key={c.id}
                                 style={{height: "100%"}}
                        >

                        </Contact>
                    )
                )
            }

        </>
    )
}
export default AllContacts;