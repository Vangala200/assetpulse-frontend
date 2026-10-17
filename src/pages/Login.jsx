
<div className="auth-page">
  <section className="auth-branding">
    <div className="logo">
      <div className="logo-icon">A</div>
      AssetPulse
    </div>

    <h1>
      Manage smarter.
      <br />
      <span className="gradient-text">Move faster.</span>
    </h1>

    <p>
      A unified workspace for tracking assets, employee
      allocations, maintenance, and organizational insights.
    </p>

    <div className="auth-feature">
      <div className="auth-feature-icon">✓</div>
      Centralized asset management
    </div>

    <div className="auth-feature">
      <div className="auth-feature-icon">⌁</div>
      Intelligent reporting and analytics
    </div>
  </section>

  <section className="auth-container">
    <h2>Welcome back</h2>
    <p>Sign in to continue to your workspace.</p>

    {/* Keep your existing form and handlers here.
        Use form-group around each input. */}

    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        type="email"
        placeholder="you@company.com"
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>

    <button className="primary-button btn-block">
      Sign In
    </button>

    <div className="auth-links">
      <a href="/forgot-password">Forgot password?</a>
      <a href="/register">Create account</a>
    </div>
  </section>
</div>
