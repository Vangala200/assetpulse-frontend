import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Settings() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("assetpulse-theme") === "dark"
  );

  const [notifications, setNotifications] = useState(
    localStorage.getItem("assetpulse-notifications") !== "off"
  );

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(
      "dark-theme",
      darkMode
    );

    localStorage.setItem(
      "assetpulse-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const changeNotifications = () => {
    const value = !notifications;

    setNotifications(value);

    localStorage.setItem(
      "assetpulse-notifications",
      value ? "on" : "off"
    );
  };

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2200);
  };

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        <main className="main-content settings-page">

          <div className="page-header">

            <div>
              <span className="page-eyebrow">
                SYSTEM CONFIGURATION
              </span>

              <h1>Settings</h1>

              <p>
                Customize your AssetPulse workspace
              </p>
            </div>

            {saved && (
              <div className="save-message">
                ✓ Settings saved
              </div>
            )}

          </div>

          <div className="settings-layout">

            <section className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  ◉
                </div>

                <div>
                  <h2>Appearance</h2>
                  <p>
                    Customize how AssetPulse looks
                  </p>
                </div>

              </div>

              <div className="setting-row">

                <div className="setting-info">

                  <strong>Dark Mode</strong>

                  <span>
                    Use a darker interface for low-light
                    environments.
                  </span>

                </div>

                <button
                  className={`toggle ${
                    darkMode ? "active" : ""
                  }`}
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                >
                  <span></span>
                </button>

              </div>

            </section>

            <section className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  ♢
                </div>

                <div>
                  <h2>Notifications</h2>

                  <p>
                    Control your workspace notifications
                  </p>
                </div>

              </div>

              <div className="setting-row">

                <div className="setting-info">

                  <strong>Push Notifications</strong>

                  <span>
                    Receive important asset and employee
                    updates.
                  </span>

                </div>

                <button
                  className={`toggle ${
                    notifications ? "active" : ""
                  }`}
                  onClick={changeNotifications}
                >
                  <span></span>
                </button>

              </div>

            </section>

            <section className="settings-card profile-settings">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  ♙
                </div>

                <div>
                  <h2>Profile</h2>

                  <p>
                    Your AssetPulse administrator profile
                  </p>
                </div>

              </div>

              <div className="profile-settings-content">

                <div className="settings-avatar">
                  A
                </div>

                <div>

                  <h3>Administrator</h3>

                  <p>
                    admin@assetpulse.com
                  </p>

                  <span>
                    System Administrator
                  </span>

                </div>

              </div>

            </section>

            <section className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  🔒
                </div>

                <div>
                  <h2>Security</h2>

                  <p>
                    Manage account security
                  </p>
                </div>

              </div>

              <div className="security-item">
                <div>
                  <strong>Password</strong>
                  <span>
                    Last changed recently
                  </span>
                </div>

                <button className="outline-button">
                  Change
                </button>
              </div>

              <div className="security-item">
                <div>
                  <strong>Two-Factor Authentication</strong>
                  <span>
                    Add another layer of protection
                  </span>
                </div>

                <span className="security-badge">
                  Recommended
                </span>
              </div>

            </section>

          </div>

          <div className="settings-actions">

            <button
              className="primary-button"
              onClick={saveSettings}
            >
              Save Changes
            </button>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Settings;