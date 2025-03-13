import Button from "../button/Button";
import "./inputField.css";

function InputField() {
  return (
    <div className="input-field-container">
      <div className="input-field-wrapper">
        <div className="text-container">
          <h6 className="contact-title">
            <li className="contact-list-highlight"></li>
            Kontakta oss
          </h6>
          <h3 className="contact-headline-title">
            <span className="contact-headline-highlight">Gratis</span> konsultation
            <div className="contact-underscore"></div>
          </h3>
        </div>
        <div className="input-container">
          <div className="input-row">
            <input type="text" placeholder="Namn" className="name-input" />
            <input type="email" placeholder="E-post" className="name-input" />
          </div>
          <div className="input-row">
            <input type="tel" placeholder="Telefon" className="name-input" />
            <input
              type="text"
              placeholder="Företagsnamn"
              className="name-input"
            />
          </div>

          <textarea
            className="message-input"
            placeholder="Meddelande"
            rows="7"
          ></textarea>

          <Button label="Skicka" variant="primary" type="submit"></Button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
