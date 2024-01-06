import { Link } from "react-router-dom";

const SidebarNavigation = () => {

    return (
        <div className="sidebar-navigation w-40">
            <ul className="text-sm px-6 py-4 font-medium">
            <ul>                
                <li>
                    <Link to={'/lesson'}> Writing Task 1 </Link>
                </li>
                <li>
                    <Link to={'/lesson'}> Writing Task 2 </Link>
                </li>
                
                </ul>
            </ul>
        </div>   
    );

}


export default SidebarNavigation;