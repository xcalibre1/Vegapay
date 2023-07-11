import HomePage from "../HomePage/HomePage";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import "./MainLayout.css";
const routes = [{ title: "card-sales", active: true }, { title: "time management", active: false }]
function Mainlayout() {
    return (
        <div className="mainLayoutWrapper">
            <SideBar routes={routes} />
            <div className="content">
                <Navbar />
                <HomePage />
            </div>
        </div>
    )
}
export default Mainlayout;