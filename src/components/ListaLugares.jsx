export default function ListaLugares({ lugares, seleccionadoId, onSeleccionar, busqueda, onBusqueda }) {
  const filtrados = lugares.filter((lugar) => {
    const q = busqueda.trim().toLowerCase()
    if (!q) return true
    return (
      lugar.nombre.toLowerCase().includes(q) ||
      lugar.categoria.toLowerCase().includes(q) ||
      lugar.localidad.toLowerCase().includes(q)
    )
  })

  return (
    <aside className="panel-lista">
      <div className="panel-lista-cabecera">
        <h2>Los 20 lugares</h2>
        <p>Elegí uno en la lista o en el mapa</p>
        <label className="buscador">
          <span className="sr-only">Buscar lugar</span>
          <input
            type="search"
            placeholder="Buscar por nombre, categoría..."
            value={busqueda}
            onChange={(e) => onBusqueda(e.target.value)}
          />
        </label>
      </div>

      <ul className="lista-lugares">
        {filtrados.map((lugar) => (
          <li key={lugar.id}>
            <button
              type="button"
              className={`item-lugar ${seleccionadoId === lugar.id ? 'activo' : ''}`}
              onClick={() => onSeleccionar(lugar)}
            >
              <span className="item-numero">{String(lugar.id).padStart(2, '0')}</span>
              <span className="item-texto">
                <span className="item-nombre">{lugar.nombre}</span>
                <span className="item-meta">
                  {lugar.categoria} · {lugar.localidad}
                </span>
              </span>
            </button>
          </li>
        ))}
        {filtrados.length === 0 && (
          <li className="lista-vacia">No hay lugares con ese nombre.</li>
        )}
      </ul>
    </aside>
  )
}
