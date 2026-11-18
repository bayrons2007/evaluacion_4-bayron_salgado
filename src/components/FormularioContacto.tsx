import { useState } from "react";
import type { FormEvent } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  function limpiarAvisos() {
    setError("");
    setConfirmacion("");
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    limpiarAvisos();

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      setError("Completa todos los campos sin usar solo espacios.");
      return;
    }

    if (mensaje.trim().length < 10) {
      setError("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    setConfirmacion(
      `Gracias, ${nombre.trim()}. Los datos se validaron correctamente. ` +
      "Esta es una demostración: no se ha enviado ningún mensaje."
    );

    setNombre("");
    setCorreo("");
    setMensaje("");
  }

  return (
    <form className="contact-form" onSubmit={manejarEnvio}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          autoComplete="name"
          value={nombre}
          onChange={(evento) => {
            setNombre(evento.target.value);
            limpiarAvisos();
          }}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tu@email.com"
          autoComplete="email"
          value={correo}
          onChange={(evento) => {
            setCorreo(evento.target.value);
            limpiarAvisos();
          }}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          placeholder="Escribe tu mensaje..."
          value={mensaje}
          onChange={(evento) => {
            setMensaje(evento.target.value);
            limpiarAvisos();
          }}
          required
        />
      </div>

      <p>Formulario de demostración: no envía correos.</p>

      {error && <p role="alert">{error}</p>}

      <p role="status">{confirmacion}</p>

      <button type="submit">Enviar mensaje</button>
    </form>
  );
}

export default FormularioContacto;