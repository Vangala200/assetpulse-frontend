import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="mobile-logo">
          AssetPulse
        </div>

        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search assets, employees..."
          />

          <kbd>⌘ K</kbd>
        </div>

      </div>

      <div className="navbar-right">

        <button className="icon-button">
          ◔
        </button>

        <button className="icon-button">
          ♧
        </button>

        <div className="profile">

          <div className="avatar">
            {username.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">
            <strong>{username}</strong>
            <span>Administrator</span>
          </div>

          <button
            className="profile-arrow"
            onClick={handleLogout}
          >
            ▾
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;