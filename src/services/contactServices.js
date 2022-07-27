import axios from "axios";

const baseUrl = "http://localhost:9000";

export const getAllContacts = () => {
    const url = `${baseUrl}/contacts`;
    return axios.get(url);
}

export const getContactById = (contactId) => {
    const url = `${baseUrl}/contacts/${contactId}`;
    return axios.get(url);
}

export const getAllGroups = () => {
    const url = `${baseUrl}/groups`;
    return axios.get(url);
}

export const getGroupById = (groupId) => {
    const url = `${baseUrl}/groups/${groupId}`;
    return axios.get(url);
}

export const createContact = (contactInfo) => {
    const url = `${baseUrl}/contacts`;
    return axios.post(url, contactInfo);
}

export const updateContact = (contactId, contactInfo) => {
    const url = `${baseUrl}/contacts/${contactId}`;
    return axios.put(url, contactInfo);
}

export const deleteContact = (contactId) => {
    const url = `${baseUrl}/contacts/${contactId}`;
    return axios.delete(url);
}