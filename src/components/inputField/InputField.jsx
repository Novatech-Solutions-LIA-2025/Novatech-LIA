"use client";

import "./inputField.css";
import Button from "../button/Button";
import { useState } from "react";

function InputField() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Rensar felmeddelande när användaren skriver
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    newErrors.name = !formData.name.trim() ? "Namn saknas" : "";
    newErrors.email = !formData.email.trim()
      ? "E-post saknas"
      : !/\S+@\S+\.\S+/.test(formData.email)
      ? "Ogiltig e-postadress"
      : "";

    // Telefonvalidering (valfritt men validera om det finns)
    newErrors.phone =
      formData.phone && !/^\d+$/.test(formData.phone)
        ? "Ogiltigt telefonnummer"
        : "";
    newErrors.message = !formData.message.trim() ? "Meddelande saknas" : "";

    isValid = !Object.values(newErrors).some((error) => error !== "");
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Skickar formulärdata till servern eller utför åtgärd här
      console.log("Formulär skickat:", formData);
      alert("Tack för ditt meddelande! Vi återkommer snart.");
      // Återställ formulärdata efter att ha skickat
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <div id="input-field-scroll">
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

          <form className="input-field-form" onSubmit={handleSubmit} noValidate>
            <div className="input-field-row">
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Namn *"
                  className={`input-field-input ${
                    errors.name ? "input-error" : ""
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </label>

              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-post *"
                  className={`input-field-input ${
                    errors.email ? "input-error" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </label>
            </div>
            <div className="input-field-row">
              <label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  className={`input-field-input ${
                    errors.phone ? "input-error" : ""
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </label>

              <label>
                <input
                  type="text"
                  name="company"
                  placeholder="Företagsnamn"
                  className="input-field-input"
                  value={formData.company}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              <textarea
                className={`input-field-textarea ${
                  errors.message ? "input-error" : ""
                }`}
                name="message"
                placeholder="Meddelande *"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </label>
            <div className="input-field-button">
              <Button
                label="Skicka"
                variant="primary"
                type="submit"
                aria-label="Skicka kontaktformulär"
              ></Button>
            </div>
          </form>
          <div className="oval-gradient8"></div>
          <div className="oval-gradient7"></div>
        </div>
      </div>
    </div>
  );
}

export default InputField;
