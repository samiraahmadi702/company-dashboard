import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/layout/Header";
import MainContent from "./components/MainContent";
import AllContacts from "./components/contacts/AllContacts";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainContent/>}>
                    <Route path="contact" element={<AllContacts/>}/>
                </Route>
            </Routes>
        </>
    )
        ;
}

export default App;
