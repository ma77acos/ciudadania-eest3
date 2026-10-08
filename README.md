# Mapa turístico del Partido de Necochea

Trabajo de **Ciudadanía** — EEST N°3 (3er año).

Página web con un mapa interactivo de **20 lugares turísticos** del Partido de Necochea (Buenos Aires). Al elegir un punto se ve descripción, imagen y datos útiles.

## Cómo correrlo en la PC

```bash
npm install
npm run dev
```

Abrí la URL que muestra la terminal (por ejemplo `http://localhost:5173`).

## Publicar en Vercel

1. Subí el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) importá el repositorio.
3. Framework: **Vite** (lo detecta solo).
4. Deploy.

Comando de build: `npm run build`  
Carpeta de salida: `dist`

## Tecnologías

- React + Vite
- Leaflet / React-Leaflet (mapa OpenStreetMap)

## Fotos

Las imágenes de los lugares son fotos reales del Partido de Necochea / Quequén tomadas de [Wikimedia Commons](https://commons.wikimedia.org/) (licencias libres) y están guardadas en `public/lugares/`.
