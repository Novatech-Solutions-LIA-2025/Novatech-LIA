import Button from "../button/Button";

import "./header.css";

function Header() {
  return (
    <>
      <div className="oval-gradient"></div>
      <div className="oval-gradient2"></div>
      <div className="oval-gradient3"></div>

      <header>
        <h1 className="hero-text">
          Växla Upp Med <span className="hero-highlight">Ny Tech</span>
          <br></br>- Framtiden Är Nu
        </h1>
        <div className="button-container">
          <Button label="Begär offert" variant="primary" />
          <Button label="Våra tjänster" variant="secondary" />
        </div>
        <div className="hero-border-shadow">
          <div className="hero-container">
            <img className="hero-img" src="/images/planet-earth-background.jpg" alt="" />
            <div className="oval-gradient4"></div>
            <div className="oval-gradient5"></div>
            <p className="hero-subtext">
              Vi arbetar med kraftfulla verktyg och sömlösa integrationer som
              stärker företag världen över.
            </p>
            
          </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;
