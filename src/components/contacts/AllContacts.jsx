import {useContext} from "react";
import {ContactContext} from "../../contexts/contactContext";
import Contact from "./Contact";

const AllContacts = () => {
    const {filteredContacts} = useContext(ContactContext);

    return (
        <>
            {
                filteredContacts.map((c) => (
                        <Contact key={c.id} contact={c}
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