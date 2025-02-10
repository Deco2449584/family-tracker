import * as Location from 'expo-location';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebase';

export const startLocationTracking = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  
  if (status !== 'granted') {
    return;
  }

  Location.startLocationUpdatesAsync('LOCATION_TRACKING', {
    accuracy: Location.Accuracy.Balanced,
    timeInterval: 10000,
    distanceInterval: 10,
    foregroundService: {
      notificationTitle: "Rastreo Familiar",
      notificationBody: "Rastreando ubicación"
    }
  });
};

export const updateLocation = async (location) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;

  await setDoc(doc(db, 'locations', userId), {
    coords: {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    },
    timestamp: new Date().toISOString(),
  });
}; 