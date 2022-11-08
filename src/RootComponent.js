import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Consumption from "./pages/Consumption";
import Sidebar from "./component/sidebar/Sidebar";

const RootComponent = () => {
    return(
        <>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="consommation" element={<Consumption />} />
                </Routes>
            </Router>
        </>
    )
}

export default RootComponent;