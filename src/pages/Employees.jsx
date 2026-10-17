import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Employees() {

  const [search, setSearch] = useState("");

  const employees = [
    {
      id: "EMP-001",
      name: "Rahul Kumar",
      email: "rahul@assetpulse.com",
      department: "Engineering",
      assets: 4,
      status: "Active",
    },
    {
      id: "EMP-002",
      name: "Priya Sharma",
      email: "priya@assetpulse.com",
      department: "Design",
      assets: 3,
      status: "Active",
    },
    {
      id: "EMP-003",
      name: "Arjun Reddy",
      email: "arjun@assetpulse.com",
      department: "Finance",
      assets: 2,
      status: "Active",
    },
    {
      id: "EMP-004",
      name: "Sneha Rao",
      email: "sneha@assetpulse.com",
      department: "HR",
      assets: 1,
      status: "Active",
    },
    {
      id: "EMP-005",
      name: "Vikram Singh",
      email: "vikram@assetpulse.com",
      department: "Marketing",
      assets: 0,
      status: "Inactive",
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.email} ${employee.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="content-area">

        <Navbar />

        <main className="main-content">

          <div className="page-header">

            <div>

              <span className="eyebrow">
                ORGANIZATION
              </span>

              <h1>
                Employees
              </h1>

              <p>
                Manage employees and their assigned assets.
              </p>

            </div>

            <button className="primary-button">
              + Add Employee
            </button>

          </div>


          <div className="table-card">

            <div className="table-toolbar">

              <div>

                <h2>
                  All Employees
                </h2>

                <span>
                  {filteredEmployees.length} employees
                </span>

              </div>

              <div className="table-search">

                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search employees..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

            </div>


            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>Employee</th>
                    <th>Employee ID</th>
                    <th>Department</th>
                    <th>Assets</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredEmployees.map((employee) => (

                    <tr key={employee.id}>

                      <td>

                        <div className="employee-cell">

                          <div className="employee-avatar">
                            {employee.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>

                            <strong>
                              {employee.name}
                            </strong>

                            <span>
                              {employee.email}
                            </span>

                          </div>

                        </div>

                      </td>

                      <td>
                        <strong className="asset-id">
                          {employee.id}
                        </strong>
                      </td>

                      <td>
                        {employee.department}
                      </td>

                      <td>
                        <span className="asset-count">
                          {employee.assets}
                        </span>
                      </td>

                      <td>

                        <span
                          className={`status ${
                            employee.status === "Active"
                              ? "status-active"
                              : "status-inactive"
                          }`}
                        >
                          {employee.status}
                        </span>

                      </td>

                      <td>

                        <button className="action-button">
                          ⋮
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Employees;