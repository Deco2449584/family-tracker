import React, { useEffect, useState } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { View } from 'react-native';
import { db } from '../../services/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

MapboxGL.setAccessToken('TU_TOKEN_DE_MAPBOX');

export default function MapScreen() {
  const [familyLocations, setFamilyLocations] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'locations'),
      (snapshot) => {
        const locations = [];
        snapshot.forEach(doc => {
          locations.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setFamilyLocations(locations);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapboxGL.MapView style={{ flex: 1 }}>
        {familyLocations.map(location => (
          <MapboxGL.PointAnnotation
            key={location.id}
            coordinate={[location.coords.longitude, location.coords.latitude]}
          />
        ))}
      </MapboxGL.MapView>
    </View>
  );
} 