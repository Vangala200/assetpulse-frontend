import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">

        <div className="logo-mark">
          A
        </div>

        <div>
          <h2>AssetPulse</h2>
          <span>Asset Management</span>
        </div>

      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <div className="nav-section-title">
          MAIN
        </div>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="nav-icon">⌂</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/assets"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="nav-icon">▣</span>
          <span>Assets</span>
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="nav-icon">♙</span>
          <span>Employees</span>
        </NavLink>

        <div className="nav-section-title">
          MANAGEMENT
        </div>

        <NavLink
          to="/assets"
          className="nav-item"
        >
          <span className="nav-icon">↗</span>
          <span>Asset Assignment</span>
        </NavLink>

        <NavLink
          to="/employees"
          className="nav-item"
        >
          <span className="nav-icon">＋</span>
          <span>Employee Management</span>
        </NavLink>

      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">

        <button
          className="settings-button"
          onClick={() => alert("Settings module coming soon")}
        >
          <span>⚙</span>
          Settings
        </button>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;