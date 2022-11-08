import * as Icons from '@mui/icons-material';
import Home from "../../pages/Home";
import Consumption from "../../pages/Consumption";

const SidebarRoutes = [
    {
        type: "collapse",
        name: "Accueil",
        cName: "nav-text",
        key: "home",
        icon: <Icons.Home />,
        path: "/",
        component: <Home />
    },
    {
        type: "collapse",
        name: "Consommation",
        cName: "nav-text",
        key: "consumption",
        icon: <Icons.LocalFireDepartment />,
        path: "/consommation",
        component: <Consumption />
    }
];

export default SidebarRoutes;