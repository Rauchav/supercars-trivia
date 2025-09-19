import React, { useState } from "react";

const DataCaptureModal = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    region: "",
  });

  const [errors, setErrors] = useState({});
  const [fieldVisibility, setFieldVisibility] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

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

    if (!formData.region.trim()) {
      newErrors.region = "La región es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleFieldVisibility = (fieldName) => {
    setFieldVisibility((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // DEBUG: Log the form data being submitted
      console.log("DEBUG: Form data being submitted:", formData);
      console.log("DEBUG: Region value:", formData.region);
      console.log("DEBUG: Region type:", typeof formData.region);
      onSubmit(formData);
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
          {/* Custom Input Component with Eye Icon */}
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <div style={{ position: "relative" }}>
              <input
                type={fieldVisibility.firstName ? "text" : "password"}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre"
                style={{ paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={() => toggleFieldVisibility("firstName")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#666",
                  padding: "5px",
                }}
              >
                {fieldVisibility.firstName ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.firstName && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <div style={{ position: "relative" }}>
              <input
                type={fieldVisibility.lastName ? "text" : "password"}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Ingresa tu apellido"
                style={{ paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={() => toggleFieldVisibility("lastName")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#666",
                  padding: "5px",
                }}
              >
                {fieldVisibility.lastName ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.lastName && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.lastName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <div style={{ position: "relative" }}>
              <input
                type={fieldVisibility.phone ? "tel" : "password"}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ingresa tu número de teléfono"
                style={{ paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={() => toggleFieldVisibility("phone")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#666",
                  padding: "5px",
                }}
              >
                {fieldVisibility.phone ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.phone && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.phone}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <div style={{ position: "relative" }}>
              <input
                type={fieldVisibility.email ? "email" : "password"}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ingresa tu email"
                style={{ paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={() => toggleFieldVisibility("email")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#666",
                  padding: "5px",
                }}
              >
                {fieldVisibility.email ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.email && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="region">¿De qué parte del país vienes?</label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                backgroundColor: "#fff",
              }}
            >
              <option value="">Selecciona tu región</option>
              <option value="La Paz">La Paz</option>
              <option value="Cochabamba">Cochabamba</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Beni">Beni</option>
              <option value="Pando">Pando</option>
              <option value="Sucre">Sucre</option>
              <option value="Potosi">Potosi</option>
              <option value="Oruro">Oruro</option>
              <option value="Tarija">Tarija</option>
            </select>
            {errors.region && (
              <span style={{ color: "#ff4444", fontSize: "14px" }}>
                {errors.region}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Comenzar Trivia
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataCaptureModal;
