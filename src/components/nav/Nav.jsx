import "./nav.css";

function Nav() {
  return (
    <div >
      <nav className="navbar">
      <img src="images/Logo.svg" alt="Novatech logo" className="nav-logo"/>
        <ul className="nav-list">
          <li>Kollegor</li>
          <li>Tjänster</li>
          <li>Insikt</li>
          <li>Kontakt</li>
          <li>Blogg</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav