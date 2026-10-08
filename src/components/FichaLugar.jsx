export default function FichaLugar({ lugar, onCerrar }) {
  if (!lugar) {
    return (
      <section className="ficha ficha-vacia" aria-live="polite">
        <p className="ficha-hint">
          Tocá un punto del mapa o un lugar de la lista para ver su información,
          fotos y datos útiles.
        </p>
      </section>
    )
  }

  return (
    <section className="ficha" aria-live="polite">
      <button type="button" className="ficha-cerrar" onClick={onCerrar} aria-label="Cerrar ficha">
        ×
      </button>

      <div className="ficha-imagen-wrap">
        <img src={lugar.imagen} alt={`Imagen representativa de ${lugar.nombre}`} />
        <span className="ficha-categoria">{lugar.categoria}</span>
      </div>

      <div className="ficha-cuerpo">
        <p className="ficha-localidad">{lugar.localidad}</p>
        <h2>{lugar.nombre}</h2>
        <p className="ficha-desc">{lugar.descripcion}</p>

        <h3>¿Por qué visitarlo?</h3>
        <p>{lugar.porQueVisitar}</p>

        <h3>Datos útiles</h3>
        <ul>
          {lugar.datosUtiles.map((dato) => (
            <li key={dato}>{dato}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
