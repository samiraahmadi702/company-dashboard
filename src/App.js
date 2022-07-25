import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/layout/Header";
import MainContent from "./components/MainContent";
import Contact from "./components/contacts/Contact";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainContent/>}>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </>
    )
        ;
}

export default App;
