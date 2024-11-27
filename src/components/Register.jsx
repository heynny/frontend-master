import React, { useState } from "react";
import apiClient from "../api/axiosConfig";
import styles from "../styles/Register.module.css"; // Asegúrate de que el archivo esté correctamente importado

const Register = () => {
  const [nombre, setName] = useState("");
  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setNumber] = useState("");
  const [rol, setRol] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");



    try {
      const response = await apiClient.post("/usuarios/registro", {
        nombre,
        correo,
        password,
        empresa,
        telefono, 
        rol   
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
            value={nombre}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} mb-4`}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
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
            value={telefono}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
                    <input
            type="text"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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