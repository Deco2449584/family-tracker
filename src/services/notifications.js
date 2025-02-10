import * as Notifications from 'expo-notifications';

export const configureNotifications = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  
  if (status !== 'granted') {
    return;
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};

export const sendGeofenceNotification = async (memberName, zoneName, action) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Actualización de Ubicación',
      body: `${memberName} ha ${action} la zona: ${zoneName}`,
    },
    trigger: null,
  });
}; 