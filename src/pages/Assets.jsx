import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Assets() {

  const [search, setSearch] = useState("");

  const assets = [
    {
      id: "AST-001",
      name: "MacBook Pro 14",
      category: "Laptop",
      employee: "Rahul Kumar",
      status: "Assigned",
    },
    {
      id: "AST-002",
      name: "Dell XPS 15",
      category: "Laptop",
      employee: "Priya Sharma",
      status: "Assigned",
    },
    {
      id: "AST-003",
      name: "iPhone 15 Pro",
      category: "Mobile",
      employee: "Available",
      status: "Available",
    },
    {
      id: "AST-004",
      name: "Dell Monitor",
      category: "Monitor",
      employee: "Arjun Reddy",
      status: "Assigned",
    },
    {
      id: "AST-005",
      name: "Logitech Keyboard",
      category: "Accessory",
      employee: "Available",
      status: "Available",
    },
  ];

  const filteredAssets = assets.filter((asset) =>
    `${asset.name} ${asset.category} ${asset.employee}`
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
                MANAGEMENT
              </span>

              <h1>
                Assets
              </h1>

              <p>
                Manage and track organization assets.
              </p>
            </div>

            <button className="primary-button">
              + Add Asset
            </button>

          </div>


          <div className="table-card">

            <div className="table-toolbar">

              <div>
                <h2>
                  All Assets
                </h2>

                <span>
                  {filteredAssets.length} assets
                </span>
              </div>

              <div className="table-search">

                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search assets..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>

            </div>


            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>Asset ID</th>
                    <th>Asset</th>
                    <th>Category</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredAssets.map((asset) => (

                    <tr key={asset.id}>

                      <td>
                        <strong className="asset-id">
                          {asset.id}
                        </strong>
                      </td>

                      <td>
                        <strong>
                          {asset.name}
                        </strong>
                      </td>

                      <td>
                        {asset.category}
                      </td>

                      <td>
                        {asset.employee}
                      </td>

                      <td>

                        <span
                          className={`status ${
                            asset.status === "Assigned"
                              ? "status-assigned"
                              : "status-available"
                          }`}
                        >
                          {asset.status}
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

export default Assets;