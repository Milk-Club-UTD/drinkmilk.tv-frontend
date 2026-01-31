import './App.css'

function App() {
  return (
    <div className="landing">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-brand">drinkmilk.tv</div>
        <a href="#join" className="nav-cta">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Watch movies together,<br />no matter the distance.</h1>
        <p className="hero-sub">
          Sync up with friends and watch your favorite films in real time.
          Chat, react, and enjoy the moment — together.
        </p>
        <a href="#join" className="btn btn-primary">Start Watching</a>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>Why drinkmilk.tv?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#9654;</div>
            <h3>Perfectly Synced</h3>
            <p>Everyone sees the same frame at the same time. Play, pause, and seek stays in sync across all viewers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128172;</div>
            <h3>Live Chat</h3>
            <p>React in real time with built-in chat. Share your thoughts as the story unfolds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#127917;</div>
            <h3>Any Movie</h3>
            <p>Bring your own content or pick from shared libraries. Watch what you want, when you want.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128274;</div>
            <h3>Private Rooms</h3>
            <p>Create invite-only rooms for your group. Your watch party, your rules.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="join">
        <h2>Ready to watch together?</h2>
        <p>Join the community and start your first watch party.</p>
        <a href="#" className="btn btn-primary">Get Early Access</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">drinkmilk.tv</div>
        <p>&copy; {new Date().getFullYear()} drinkmilk.tv. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
