import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { centroMapa, zoomInicial } from '../data/lugares'
import 'leaflet/dist/leaflet.css'

const iconoNormal = L.divIcon({
  className: 'marcador-lugar',
  html: '<span class="marcador-punto"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -14],
})

const iconoActivo = L.divIcon({
  className: 'marcador-lugar activo',
  html: '<span class="marcador-punto"></span>',
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -16],
})

function CentrarEnLugar({ lugar }) {
  const map = useMap()

  useEffect(() => {
    if (!lugar) return
    map.flyTo(lugar.coords, Math.max(map.getZoom(), 13), { duration: 0.8 })
  }, [lugar, map])

  return null
}

function AjustarMapaAlContenedor() {
  const map = useMap()

  useEffect(() => {
    const invalidar = () => map.invalidateSize()
    invalidar()
    window.addEventListener('resize', invalidar)
    window.addEventListener('orientationchange', invalidar)

    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(invalidar)
        : null
    const contenedor = map.getContainer().parentElement
    if (ro && contenedor) ro.observe(contenedor)

    return () => {
      window.removeEventListener('resize', invalidar)
      window.removeEventListener('orientationchange', invalidar)
      ro?.disconnect()
    }
  }, [map])

  return null
}

export default function Mapa({ lugares, seleccionado, onSeleccionar }) {
  return (
    <MapContainer
      center={centroMapa}
      zoom={zoomInicial}
      className="mapa-leaflet"
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AjustarMapaAlContenedor />
      <CentrarEnLugar lugar={seleccionado} />
      {lugares.map((lugar) => (
        <Marker
          key={lugar.id}
          position={lugar.coords}
          icon={seleccionado?.id === lugar.id ? iconoActivo : iconoNormal}
          eventHandlers={{
            click: () => onSeleccionar(lugar),
          }}
        >
          <Popup>
            <strong>{lugar.nombre}</strong>
            <br />
            {lugar.localidad}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
