import { useEffect, useState } from 'react'
import { lugares } from './data/lugares'
import Mapa from './components/Mapa'
import ListaLugares from './components/ListaLugares'
import FichaLugar from './components/FichaLugar'
import './App.css'

export default function App() {
  const [seleccionado, setSeleccionado] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    document.body.classList.toggle('ficha-abierta', Boolean(seleccionado))
    return () => document.body.classList.remove('ficha-abierta')
  }, [seleccionado])

  const cerrarFicha = () => setSeleccionado(null)

  return (
    <div className={`app ${seleccionado ? 'tiene-seleccion' : ''}`}>
      <header className="hero">
        <div className="hero-fondo" aria-hidden="true" />
        <div className="hero-contenido">
          <p className="hero-escuela">EEST N°3 · Trabajo de Ciudadanía · 3ro 1ra</p>
          <h1>Partido de Necochea</h1>
          <p className="hero-sub">
            Mapa interactivo de 20 lugares turísticos del Partido de Necochea,
            provincia de Buenos Aires.
          </p>
          <ul className="hero-alumnos">
            <li>Simon Nardelli</li>
            <li>Clemente Valenzuela</li>
            <li>Federico Gil Ramon</li>
            <li>Francisco Macarte</li>
            <li>Lisandro Polliero</li>
            <li>Lautaro Pastrello</li>
          </ul>
          <a className="hero-cta" href="#mapa">
            Explorar el mapa
          </a>
        </div>
      </header>

      <main id="mapa" className="contenido">
        <ListaLugares
          lugares={lugares}
          seleccionadoId={seleccionado?.id}
          onSeleccionar={setSeleccionado}
          busqueda={busqueda}
          onBusqueda={setBusqueda}
        />

        <div className="mapa-wrap">
          <Mapa
            lugares={lugares}
            seleccionado={seleccionado}
            onSeleccionar={setSeleccionado}
          />
        </div>

        {seleccionado && (
          <button
            type="button"
            className="ficha-backdrop"
            aria-label="Cerrar información del lugar"
            onClick={cerrarFicha}
          />
        )}

        <FichaLugar lugar={seleccionado} onCerrar={cerrarFicha} />
      </main>

      <footer className="pie">
        <p>
          Partido de Necochea · Buenos Aires · Proyecto escolar de Ciudadanía
        </p>
      </footer>
    </div>
  )
}
