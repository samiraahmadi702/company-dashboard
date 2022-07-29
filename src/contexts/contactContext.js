import {createContext} from "react";

export const ContactContext = createContext({
    allContacts: [],
    setAllContacts: () => {
    },
    allGroups: [],
    setAllGroups: () => {
    },
    filteredContacts: [],
    setFilteredContacts: () => {
    },
    onSearchInputChange: () => {
    },
    onCreateContact: () => {
    },
    onConfirmDelete: () => {
    }
})