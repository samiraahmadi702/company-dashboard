import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <MainContent/>
        </BrowserRouter>
    );
}

export default App;
