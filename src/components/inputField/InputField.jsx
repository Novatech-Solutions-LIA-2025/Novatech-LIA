import "./inputField.css";
import Button from "../button/Button";

function InputField() {
  return (
    <div className="input-field">
      <div className="input-field-content">
        <div className="input-field-text">
          <h6 className="input-field-subtitle">
            <li className="contact-highlight"></li>
            Kontakta oss
          </h6>
          <h3 className="input-field-title">
            <span className="input-field-accent">Gratis</span>konsultation
            <div className="input-field-underline"></div>
          </h3>
        </div>
        <form className="input-field-form">
          <div className="input-field-row">
            <input
              type="text"
              placeholder="Namn"
              className="input-field-input"
            />
            <input
              type="email"
              placeholder="E-post"
              className="input-field-input"
            />
          </div>
          <div className="input-field-row">
            <input
              type="tel"
              placeholder="Telefon"
              className="input-field-input"
            />
            <input
              type="text"
              placeholder="Företagsnamn"
              className="input-field-input"
            />
          </div>

          <textarea
            className="input-field-textarea"
            placeholder="Meddelande"
            rows="7"
          ></textarea>
          <div className="input-field-button">
            <Button label="Skicka" variant="primary" type="submit"></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputField;
