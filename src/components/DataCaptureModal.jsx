import React, { useState } from "react";
import { GOOGLE_SCRIPT_URL, CONFIG } from "../config/googleSheets";

const DataCaptureModal = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "El nombre es requerido";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es requerido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to send data to Google Sheets via Apps Script
  const sendDataToGoogleSheets = async (data) => {
    if (
      !CONFIG.ENABLE_GOOGLE_SHEETS ||
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"
    ) {
      console.warn("Google Sheets integration is disabled or not configured");
      return { success: true }; // Allow the game to continue even if Google Sheets is not configured
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Note: With no-cors mode, we can't read the response
      // But if the request completes without throwing, it likely succeeded
      return { success: true };
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Send data to Google Sheets
      const result = await sendDataToGoogleSheets(formData);

      if (result.success) {
        // Data sent successfully, proceed with the game
        onSubmit(formData);
      } else {
        setSubmitError(
          "Error al enviar los datos. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitError(
        "Error al enviar los datos. Por favor, inténtalo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2
          style={{ marginBottom: "30px", fontSize: "1.8rem", color: "#28b4fa" }}
        >
          Datos del Participante
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre"
            />
            {errors.firstName && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Ingresa tu apellido"
            />
            {errors.lastName && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.lastName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Ingresa tu número de teléfono"
            />
            {errors.phone && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.phone}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ingresa tu email"
            />
            {errors.email && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.email}
              </span>
            )}
          </div>

          {submitError && (
            <div
              style={{
                color: "#ff4444",
                fontSize: "14px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {submitError}
            </div>
          )}

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", marginTop: "20px" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Comenzar Trivia"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataCaptureModal;
