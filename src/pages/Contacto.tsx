import FormularioContacto from "../components/FormularioContacto";

function Contacto() {
  return (
    <main>
      <section className="contact">
        <div className="section-header">
          <p className="section-tag">03 / CONTACTO</p>

          <h1>¿Hablamos?</h1>

          <p>
            Si quieres contactarme, puedes dejarme un mensaje.
          </p>
        </div>

        <FormularioContacto />
      </section>
    </main>
  );
}

export default Contacto;