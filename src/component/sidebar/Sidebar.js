import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '@mui/icons-material';
import SidebarRoutes from "./SidebarRoutes";
import'./Sidebar.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <Icons.Menu sx={{ color: "white"}} onClick={showSidebar} />
                </Link>
                <h1>Consommation énergétique IT</h1>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <Icons.Close sx={{ color: "white"}} />
                        </Link>
                    </li>
                    {SidebarRoutes.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;