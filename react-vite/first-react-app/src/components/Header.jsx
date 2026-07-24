// Header contains the navigation links and the light/dark mode toggle.
function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="topbar">
      <a href="#home" className="brand">
        Asana Abdulai
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        type="button"
        className="toggle-btn"
        onClick={() => setIsDarkMode((currentMode) => !currentMode)}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

export default Header;