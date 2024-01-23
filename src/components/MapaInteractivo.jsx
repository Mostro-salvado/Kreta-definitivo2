import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importa la biblioteca Leaflet para trabajar con iconos
import 'leaflet/dist/leaflet.css';

const MapaInteractivo = () => {
    const positionInicial = [-32.9583896274714, -60.640261876686374]; // Nueva latitud y longitud iniciales

    // Coordenadas del marcador
    const positionMarcador = [-32.9583896274714, -60.640261876686374];

    // Definir un icono personalizado
    const iconoPersonalizado = new L.Icon({
        iconUrl: '/25530.png', // Ruta absoluta desde la raíz
        iconSize: [32, 32], // Tamaño del icono
        iconAnchor: [16, 32], // Punto de anclaje del icono (la parte inferior del icono en este caso)
        popupAnchor: [0, -32] // Punto de anclaje del Popup (ubicado arriba del icono en este caso)
    });

    return (
        <MapContainer center={positionInicial} zoom={13} style={{ height: '320px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marcador en la posición inicial con icono personalizado */}
            <Marker position={positionMarcador} icon={iconoPersonalizado}>
                <Popup>
                    <strong>Kreta</strong> Cochabamba 1054 <br />

                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapaInteractivo;
