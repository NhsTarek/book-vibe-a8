import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";



const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <NavBar></NavBar>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;