// app/about/page.tsx

'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Importa il componente Mappa con dynamic import e disabilita SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), { ssr: false });

export default function AboutPage() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/data/filtered_countries.geojson')  // Verifica che il percorso sia corretto
      .then((res) => res.json())
      .then(setGeoData)
      .catch((error) => console.error("Errore nel caricamento dei dati GeoJSON:", error));
  }, []);

  
  return (
    <div className="container">
      {/* Header */}
      <div className="row mb-4 gradient rounded">
        <div className="col-lg-7">
          <p className="big-title lh-less">SIMONE NEGRO</p>
        </div>
        <div className="col-12 col-lg-5 text-start fst-italic">
          "Believing you're not good enough is the first step toward failure."
        </div>
      </div>

      {/* Info Section */}
      <div className="row mb-4">
        <div className="col-lg-5 col-12 order-lg-2">
          <p className="light-c pt-1">INFO</p>
          <p>
            I am currently pursuing a degree in Computer Science at the University of Eastern Piedmont (UPO). Throughout
            my studies, I have developed a strong foundation in programming, algorithms, and data structures, while also
            exploring areas such as artificial intelligence and machine learning.
          </p>
          <p>
            My academic journey continues to shape my problem-solving abilities and my passion for technology, driving
            me to explore innovative solutions and the potential of emerging technologies.
          </p>
        </div>
        <div className="col-lg-7 col-12 order-lg-1">
          <p>Prova posizione testo</p>
        </div>
      </div>

      <hr />

      {/* Education Section */}
      <div className="row mb-4">
        <div className="col-lg-5 pe-3">
          <p className="light-c pt-1">EDUCATION</p>
          <p>
            I am currently pursuing a degree in Computer Science at the University of Eastern Piedmont (UPO). Throughout
            my studies, I have developed a strong foundation in programming, algorithms, and data structures, while also
            exploring areas such as artificial intelligence and machine learning.
          </p>
          <p>
            My academic journey continues to shape my problem-solving abilities and my passion for technology, driving
            me to explore innovative solutions and the potential of emerging technologies.
          </p>
        </div>
        <div className="col-lg-7">
          <p></p>
        </div>
      </div>

      <hr />

      {/* Inside Code */}
      <div className="row mb-4">
        <div className="col-lg-5 col-12 order-lg-2">
          <p className="light-c pt-1">INSIDE CODE</p>
        </div>
        <div className="col-lg-7 col-12 order-lg-1">
          <p>Prova del 9</p>
        </div>
      </div>

      <hr />

      {/* Life Outside */}
      <div className="row mb-4">
        <div className="col-lg-5 pe-3">
          <p className="light-c pt-1">LIFE OUTSIDE</p>
          <p>
            Outside of my academic life, I have a deep passion for traveling, photography, and nature. The mountains and
            natural landscapes are my greatest sources of inspiration.
          </p>
          <p>
            Traveling allows me to explore new places, immerse myself in different cultures, and experience the beauty of
            nature firsthand. My camera is my constant companion, helping me capture the tranquil moments and stunning
            views I encounter along the way.
          </p>
        </div>
        <div className="col-lg-7"></div>
      </div>

      <hr />

      {/* Travels + Map */}
      <div className="row mb-4">
        <div className="col-lg-5 pe-3 order-lg-2">
          <p className="light-c pt-1">TRAVELS</p>
          <p>
            Whether I’m hiking through the mountains or discovering new destinations, I find that nature and travel fuel
            my creativity and offer endless opportunities for personal growth and reflection.
          </p>
          <p>
            Outside of my academic life, I have a deep passion for traveling, photography, and nature. The mountains and
            natural landscapes are my greatest sources of inspiration. Traveling allows me to explore new places, immerse myself in different cultures, and experience the beauty of nature firsthand. My camera is my constant companion, helping me capture the tranquil moments and stunning views I encounter along the way.
          </p>
        </div>
        <div className="col-lg-7 order-lg-1 d-flex flex-column mb-3">
          <div className="flex-grow-1 m-2 map-style pt-1">
            {geoData && (
              <MapContainer
                center={[45, 10]}  // Impostazione della posizione iniziale della mappa
                zoom={5}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  className="grayscale-layer"
                />
                <GeoJSON data={geoData} />
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
