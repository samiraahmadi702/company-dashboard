import {useContext} from "react";
import {ContactContext} from "../../contexts/contactContext";
import Contact from "./Contact";

const AllContacts = () => {
    const {filteredContacts, onConfirmDelete} = useContext(ContactContext);

    return (
        <>
            {
                filteredContacts.map((c) => (
                        <Contact key={c.id}
                                 contact={c}
                                 confirmDelete={() => onConfirmDelete(c.id, c.fullname)}
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