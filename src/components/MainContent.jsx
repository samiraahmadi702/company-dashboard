import Sidebar from "./Sidebar";

const MainContent = () => {
    return (
        <>
            <div className="h-100 w-100 mx-0 px-0">
                <div className="row h-100">
                    <div className="col-2 px-0">
                        <Sidebar/>
                    </div>
                    <div className="col-10">
                        <div className="container">
                            The Web Content in detail.
                        </div>
                        <div className="container">
                            <p> The vertical menu can place the left or right side of the web pages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent;