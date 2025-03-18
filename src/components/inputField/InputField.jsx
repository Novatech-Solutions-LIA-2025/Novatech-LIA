import "./inputField.css";
import Button from "../button/Button";

function InputField() {
  return (
    <div className="input-field">
      <div className="input-field-content">
        <div className="input-field-text">
        <div className="oval-gradient9"></div>
          <h6 className="input-field-subtitle">
            <li className="contact-highlight"></li>
            Kontakta oss
          </h6>
          <h3 className="input-field-title">
            <span className="input-field-accent">Gratis</span> konsultation
            <div className="input-field-underline"></div>
          </h3>
        </div>
        <form className="input-field-form">
          <div className="input-field-row">
            <label>
            <input
              type="text"
              placeholder="Namn"
              className="input-field-input"
            />
            </label>

            <label>
            <input
              type="email"
              placeholder="E-post"
              className="input-field-input"
            />
            </label>
          </div>
          <div className="input-field-row">
            <label>
            <input
              type="tel"
              placeholder="Telefon"
              className="input-field-input"
            />
            </label>

            <label>
            <input
              type="text"
              placeholder="Företagsnamn"
              className="input-field-input"
            />
            </label>
          </div>
          
          <label>
          <textarea
            className="input-field-textarea"
            placeholder="Meddelande"
            rows="10"
          ></textarea>
          </label>
          <div className="input-field-button">
            <Button label="Skicka" variant="primary" type="submit"></Button>
          </div>
        </form>
        <div className="oval-gradient8"></div> 
        <div className="oval-gradient7"></div> 
      </div>
    </div>
  );
}

export default InputField;
