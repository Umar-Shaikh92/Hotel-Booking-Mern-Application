import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

export const Mymap = ({ mapStyle }) => (
  <APIProvider apiKey="AIzaSyB3LCXcm17PZv3uCcGfVaywa1srQrDEa2s">
    <Map
      style={mapStyle}
      defaultCenter={{lat: 30.3753, lng: 69.3451}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);
