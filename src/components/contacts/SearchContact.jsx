import {useContext} from "react";
import {ContactContext} from "../../contexts/contactContext";

const SearchContact = () => {
    const {onSearchInputChange} = useContext(ContactContext);
    return (
        <>
            <input type="search"
                   onChange={(event) => {
                       onSearchInputChange(event.target.value);
                   }}
                   className="form-control rounded-pill mb-5 w-50"
                   placeholder=" Search"/>
        </>
    )
}
export default SearchContact;