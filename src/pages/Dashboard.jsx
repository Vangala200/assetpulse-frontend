
{/* Dashboard.jsx */}
<div className="main-content">
  <header className="page-header">
    <div>
      <h1 className="page-title">
        Welcome to <span>AssetPulse</span>
      </h1>
      <p className="page-subtitle">
        Monitor your organization's assets in real time.
      </p>
    </div>

    <button className="primary-button">
      + Add Asset
    </button>
  </header>

  <section className="stats-grid">
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-label">Total Assets</span>
        <div className="stat-icon">▦</div>
      </div>
      <h2 className="stat-value">248</h2>
      <span className="stat-change">↑ Asset inventory</span>
    </div>

    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-label">Employees</span>
        <div className="stat-icon">♙</div>
      </div>
      <h2 className="stat-value">86</h2>
      <span className="stat-change">Active employees</span>
    </div>

    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-label">Assigned Assets</span>
        <div className="stat-icon">◈</div>
      </div>
      <h2 className="stat-value">192</h2>
      <span className="stat-change">Currently allocated</span>
    </div>

    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-label">Maintenance</span>
        <div className="stat-icon">⚙</div>
      </div>
      <h2 className="stat-value">12</h2>
      <span className="stat-change negative">Requires attention</span>
    </div>
  </section>

  <section className="dashboard-grid">
    <div className="panel">
      <div className="panel-header">
        <h2 className="panel-title">Asset Overview</h2>
        <span className="badge badge-purple">Live overview</span>
      </div>
      <div className="chart-container">
        {/* Put your existing chart component here */}
      </div>
    </div>

    <div className="panel">
      <div className="panel-header">
        <h2 className="panel-title">System Status</h2>
        <span className="pulse-dot" />
      </div>
      <p className="page-subtitle">
        Asset tracking dashboard is ready.
      </p>
    </div>
  </section>
</div>
