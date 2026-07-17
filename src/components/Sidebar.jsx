import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2>Menu</h2>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/employees">Employees</Link>

            <Link to="/assets">Assets</Link>

            <Link to="/">Logout</Link>

        </div>

    );

}

export default Sidebar;