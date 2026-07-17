import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Employees() {

    const [employees, setEmployees] = useState([]);

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        designation: ""
    });

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const response = await api.get("/employees");
            setEmployees(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const saveEmployee = async (e) => {
        await api.post("/employees", employee);

        loadEmployees();
    const loadEmployees = async () => {

    const response = await api.get("/employees");

    setEmployees(response.data);

};
        e.preventDefault();

        try {
            await api.post("/employees", employee);

            alert("Employee Added Successfully");

            setEmployee({
                name: "",
                email: "",
                department: "",
                designation: ""
            });

            loadEmployees();

        } catch (error) {
            console.log(error);
        }
    };

    const deleteEmployee = async (id) => {

        if (window.confirm("Delete Employee?")) {

            await api.delete(`/employees/${id}`);

            loadEmployees();
        }

    };

    return (

        <>
            <Navbar />
            <Sidebar />

            <div className="main">

                <h2>Employee Management</h2>

                <form onSubmit={saveEmployee}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Employee Name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={employee.department}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={employee.designation}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Add Employee
                    </button>

                </form>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {employees.map((emp) => (

                            <tr key={emp.id}>

                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department}</td>
                                <td>{emp.designation}</td>

                                <td>

                                    <button
                                        onClick={() => deleteEmployee(emp.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default Employees;