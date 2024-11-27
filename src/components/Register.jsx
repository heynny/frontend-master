import React, { useState } from "react";
import apiClient from "../api/axiosConfig";
import styles from "../styles/Register.module.css"; // Asegúrate de que el archivo esté correctamente importado

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [nit, setNit] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validación del NIT
    const nitPattern = /^[0-9]{4,10}[A-Za-z]{1,5}$/;
    if (!nitPattern.test(nit)) {
      setError("El NIT debe seguir el formato válido.");
      return;
    }

    try {
      const response = await apiClient.post("/usuarios/register", {
        name,
        email,
        password,
        empresa,
        cargo,
        nit,
      });
      console.log("Usuario registrado:", response.data);
      alert("Usuario registrado correctamente");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al registrarse");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div
      className={`${styles.container} flex items-center justify-center h-screen`}
    >
      <div className={`${styles.formContainer} bg-white p-8 rounded-lg shadow-lg w-96`}>
        <h2 className={`${styles.title} text-2xl font-bold mb-4`}>Registrarse</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="text"
            placeholder="Empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="text"
            placeholder="Telefono"
            value={nit}
            onChange={(e) => setNit(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="text"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          
          <button
            type="submit"
            className={`${styles.button} w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600`}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
