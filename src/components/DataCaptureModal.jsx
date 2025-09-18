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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
