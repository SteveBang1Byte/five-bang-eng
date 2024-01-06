import { Outlet} from "react-router-dom";
import SidebarNavigation from "./Navigation/SidebarNavigation";

const MainLayout = () => {

    return (
        <>
            <div className="main flex gap-x-6">

                <div className="layout-side-navigation"><SidebarNavigation /></div>

                <div className="layout-content" >
                    <Outlet />
                </div>

            </div>
        </>
    )
}


export default MainLayout;