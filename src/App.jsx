
import { useState } from "react";

const initialAssets = [
  { id: "AST-001", name: "MacBook Pro 14", category: "Laptop", employee: "Rahul Sharma", status: "Assigned" },
  { id: "AST-002", name: "Dell Monitor", category: "Monitor", employee: "Priya Reddy", status: "Assigned" },
  { id: "AST-003", name: "HP EliteBook", category: "Laptop", employee: "Unassigned", status: "Available" },
  { id: "AST-004", name: "iPhone 15", category: "Mobile", employee: "Ankit Kumar", status: "Maintenance" },
];

const initialEmployees = [
  { id: "EMP-001", name: "Rahul Sharma", department: "Engineering", email: "rahul@example.com" },
  { id: "EMP-002", name: "Priya Reddy", department: "Design", email: "priya@example.com" },
  { id: "EMP-003", name: "Ankit Kumar", department: "Operations", email: "ankit@example.com" },
];

const navItems = [
  { label: "Dashboard", icon: "◈" },
  { label: "Assets", icon: "▣" },
  { label: "Employees", icon: "♙" },
  { label: "Maintenance", icon: "⚙" },
  { label: "Reports", icon: "▥" },
  { label: "Settings", icon: "☷" },
];

function App() {
  const [page, setPage] = useState("Dashboard");
  const [assets, setAssets] = useState(initialAssets);
  const [employees] = useState(initialEmployees);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [assetName, setAssetName] = useState("");
  const [assetCategory, setAssetCategory] = useState("Laptop");
  const [notice, setNotice] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const assigned = assets.filter((a) => a.status === "Assigned").length;
  const available = assets.filter((a) => a.status === "Available").length;
  const maintenance = assets.filter((a) => a.status === "Maintenance").length;

  function addAsset(event) {
    event.preventDefault();

    if (!assetName.trim()) return;

    setAssets((old) => [
      {
        id: `AST-${String(Date.now()).slice(-5)}`,
        name: assetName.trim(),
        category: assetCategory,
        employee: "Unassigned",
        status: "Available",
      },
      ...old,
    ]);

    setAssetName("");
    setShowForm(false);
    setNotice("Asset added successfully.");
    setTimeout(() => setNotice(""), 2500);
  }

  function demoLogin(event) {
    event.preventDefault();

    // Demo only: replace with your existing Spring Boot API/JWT login.
    if (!email.trim() || !password.trim()) {
      setNotice("Enter an email and password.");
      return;
    }

    setLoggedIn(true);
    setNotice("");
  }

  if (!loggedIn) {
    return (
      <div className="auth-screen">
        <div className="auth-glow auth-glow-one" />
        <div className="auth-glow auth-glow-two" />

        <form className="login-card" onSubmit={demoLogin}>
          <div className="brand-mark">A</div>
          <p className="eyebrow">ASSET MANAGEMENT PLATFORM</p>
          <h1>Welcome to <span>AssetPulse</span></h1>
          <p className="muted">Manage your organization's assets in one place.</p>

          <label>Email address</label>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {notice && <p className="notice">{notice}</p>}

          <button className="primary-button full-button" type="submit">
            Enter dashboard <span>→</span>
          </button>

          <p className="muted login-footer">
            Demo interface · Connect your backend authentication before production use.
          </p>
        </form>
      </div>
    );
  }

  const filteredAssets = assets.filter((asset) =>
    `${asset.name} ${asset.id} ${asset.category} ${asset.employee}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark small-mark">A</div>
          <div>
            <strong>AssetPulse</strong>
            <span>ASSET INTELLIGENCE</span>
          </div>
        </div>

        <p className="nav-caption">WORKSPACE</p>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${page === item.label ? "active" : ""}`}
              onClick={() => {
                setPage(item.label);
                setSearch("");
                setShowForm(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
              {page === item.label && <span className="active-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="online-dot" />
          <div>
            <strong>System online</strong>
            <span>Workspace overview</span>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span><span>/</span><strong>{page}</strong>
          </div>
          <div className="topbar-right">
            <span className="status-pill"><i /> Demo mode</span>
            <div className="avatar">YR</div>
            <button className="logout-button" onClick={() => setLoggedIn(false)}>
              Log out
            </button>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">YOUR WORKSPACE / OVERVIEW</p>
              <h1>{page === "Dashboard" ? "Good to see you again." : page}</h1>
              <p className="muted">
                {page === "Dashboard"
                  ? "Here's what's happening with your assets today."
                  : `Manage and review your organization's ${page.toLowerCase()}.`}
              </p>
            </div>
            {(page === "Assets" || page === "Dashboard") && (
              <button className="primary-button" onClick={() => {
                setPage("Assets");
                setShowForm(true);
              }}>
                <span>＋</span> Add asset
              </button>
            )}
          </section>

          {notice && <div className="toast">{notice}</div>}

          {page === "Dashboard" && (
            <>
              <section className="stats-grid">
                <StatCard label="Total assets" value={assets.length} icon="▣" detail="Across your workspace" />
                <StatCard label="Assigned assets" value={assigned} icon="♙" detail="Currently in use" />
                <StatCard label="Available assets" value={available} icon="◈" detail="Ready to allocate" />
                <StatCard label="Maintenance" value={maintenance} icon="⚙" detail="Needs attention" />
              </section>

              <section className="content-grid">
                <div className="panel asset-panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Recent assets</h2>
                      <p className="muted">A snapshot of your inventory</p>
                    </div>
                    <button className="text-button" onClick={() => setPage("Assets")}>
                      View all →
                    </button>
                  </div>
                  <AssetTable assets={assets.slice(0, 4)} />
                </div>

                <div className="panel overview-panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Inventory health</h2>
                      <p className="muted">Current asset distribution</p>
                    </div>
                  </div>

                  <div className="health-number">{assets.length}<span> assets</span></div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${assets.length ? (assigned / assets.length) * 100 : 0}%` }}
                    />
                  </div>
                  <div className="health-row"><span><i className="legend assigned-legend" /> Assigned</span><strong>{assigned}</strong></div>
                  <div className="health-row"><span><i className="legend available-legend" /> Available</span><strong>{available}</strong></div>
                  <div className="health-row"><span><i className="legend maintenance-legend" /> Maintenance</span><strong>{maintenance}</strong></div>

                  <div className="insight-box">
                    <span className="insight-icon">✦</span>
                    <div>
                      <strong>Workspace insight</strong>
                      <p>Keep asset assignments and maintenance records up to date.</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {page === "Assets" && (
            <section className="panel">
              <div className="panel-heading">
                <div>
                  <h2>Asset inventory</h2>
                  <p className="muted">{assets.length} assets in this demo workspace</p>
                </div>
                <input
                  className="search-input"
                  placeholder="Search assets..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {showForm && (
                <form className="asset-form" onSubmit={addAsset}>
                  <input
                    placeholder="Asset name"
                    value={assetName}
                    onChange={(e) => setAssetName(e.target.value)}
                    required
                  />
                  <select value={assetCategory} onChange={(e) => setAssetCategory(e.target.value)}>
                    <option>Laptop</option>
                    <option>Monitor</option>
                    <option>Mobile</option>
                    <option>Accessory</option>
                    <option>Other</option>
                  </select>
                  <button className="primary-button" type="submit">Save asset</button>
                  <button className="secondary-button" type="button" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
              )}

              <AssetTable assets={filteredAssets} />
            </section>
          )}

          {page === "Employees" && (
            <section className="panel">
              <div className="panel-heading">
                <div>
                  <h2>Team directory</h2>
                  <p className="muted">{employees.length} sample employees</p>
                </div>
                <input
                  className="search-input"
                  placeholder="Search employees..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="employee-grid">
                {employees.filter((employee) =>
                  `${employee.name} ${employee.department} ${employee.email}`
                    .toLowerCase().includes(search.toLowerCase())
                ).map((employee) => (
                  <article className="employee-card" key={employee.id}>
                    <div className="employee-avatar">{employee.name.split(" ").map((n) => n[0]).join("")}</div>
                    <h3>{employee.name}</h3>
                    <p className="muted">{employee.department}</p>
                    <p className="employee-email">{employee.email}</p>
                    <span className="status-badge assigned">Active · Demo</span>
                  </article>
                ))}
              </div>
            </section>
          )}

          {page === "Maintenance" && (
            <section className="panel">
              <div className="panel-heading">
                <div><h2>Maintenance queue</h2><p className="muted">Assets currently marked for maintenance</p></div>
              </div>
              <AssetTable assets={assets.filter((a) => a.status === "Maintenance")} />
              <p className="muted helper-text">Maintenance scheduling and history need backend integration.</p>
            </section>
          )}

          {page === "Reports" && (
            <section className="stats-grid">
              <StatCard label="Inventory size" value={assets.length} icon="▣" detail="Sample data" />
              <StatCard label="Assigned" value={assigned} icon="♙" detail="Sample data" />
              <StatCard label="Available" value={available} icon="◈" detail="Sample data" />
              <StatCard label="Under maintenance" value={maintenance} icon="⚙" detail="Sample data" />
              <div className="panel report-panel">
                <h2>Inventory summary</h2>
                <p className="muted">Connect reporting APIs to export real organization data.</p>
                <button className="secondary-button" onClick={() => window.print()}>Print summary</button>
              </div>
            </section>
          )}

          {page === "Settings" && (
            <section className="panel settings-panel">
              <div className="panel-heading">
                <div><h2>Workspace settings</h2><p className="muted">Review your demo workspace preferences.</p></div>
              </div>
              <div className="setting-row">
                <div><strong>Appearance</strong><p className="muted">Dark interface with lavender accents</p></div>
                <span className="status-badge assigned">Enabled</span>
              </div>
              <div className="setting-row">
                <div><strong>API connection</strong><p className="muted">Backend connection has not been verified yet</p></div>
                <span className="status-badge maintenance">Unverified</span>
              </div>
              <div className="setting-row">
                <div><strong>Authentication</strong><p className="muted">Demo login is active in this starter UI</p></div>
                <span className="status-badge maintenance">Demo only</span>
              </div>
            </section>
          )}

          <footer className="app-footer">
            <span>AssetPulse <span className="footer-dot">•</span> Asset intelligence workspace</span>
            <span>Demo data · Not connected to production</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon, detail }) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-value">{value}</div>
      <p className="stat-detail">{detail}</p>
      <div className="stat-accent" />
    </article>
  );
}

function AssetTable({ assets }) {
  if (!assets.length) {
    return <div className="empty-state">No assets found.</div>;
  }

  return (
    <div className="table-wrap">
      <table className="asset-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Category</th>
            <th>Assigned to</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>
                <div className="asset-name">{asset.name}</div>
                <div className="asset-id">{asset.id}</div>
              </td>
              <td>{asset.category}</td>
              <td>{asset.employee}</td>
              <td>
                <span className={`status-badge ${asset.status.toLowerCase()}`}>
                  {asset.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
