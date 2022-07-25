import Sidebar from "./layout/Sidebar";
import {Outlet} from 'react-router-dom'
import {CURRENTLINE} from "../helpers/colors";

const MainContent = () => {
    return (
        <>
            <div className="h-100 w-100 mx-0 px-0">
                <div className="row h-100">
                    <div className="col-2 px-0">
                        <Sidebar/>
                    </div>
                    <div className="col-10" style={{backgroundColor: CURRENTLINE}}>
                        <div className="mx-5">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent;