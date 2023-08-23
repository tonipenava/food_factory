import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import customIconUrl from '../assets/slice.png'; // Update the path

const LeafletMap = ({ latitude, longitude }) => {
  useEffect(() => {
    const map = L.map('leaflet-map').setView([latitude, longitude], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: customIconUrl,
      iconSize: [200, 200],

      // Adjust the icon size as needed
    });
    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup(`Food Factory`);
  }, [latitude, longitude]);

  return <div id="leaflet-map" style={{ height: '100%' }} />;
};

export default LeafletMap;
