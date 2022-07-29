import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/layout/Header";
import MainContent from "./components/MainContent";
import AllContacts from "./components/contacts/AllContacts";
import CreateContact from "./components/contacts/CreateContact";
import {ToastContainer} from "react-toastify";
import EditContact from "./components/contacts/EditContact";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainContent/>}>
                    <Route path="contact" element={<AllContacts/>}/>
                    <Route path="contact/add" element={<CreateContact/>}/>
                    <Route path="contact/edit/:contactId" element={<EditContact/>}/>
                </Route>
            </Routes>
        </>
    )
        ;
}

export default App;
