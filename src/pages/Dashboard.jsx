import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {

    return (

        <>

            <Navbar />

            <Sidebar />

            <div className="main">

                <h1>Dashboard</h1>

                <div className="card">

                    <h2>Total Employees</h2>

                    <h3>25</h3>

                </div>

                <div className="card">

                    <h2>Total Assets</h2>

                    <h3>40</h3>

                </div>

                <div className="card">

                    <h2>Available Assets</h2>

                    <h3>18</h3>

                </div>

            </div>

        </>

    );

}

export default Dashboard;