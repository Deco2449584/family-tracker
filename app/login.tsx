import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import * as Google from 'expo-auth-session/providers/google';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen(): JSX.Element {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "TU_ANDROID_CLIENT_ID", // Necesitarás configurar esto
    iosClientId: "TU_IOS_CLIENT_ID", // Necesitarás configurar esto
    webClientId: "TU_WEB_CLIENT_ID", // Necesitarás configurar esto
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).catch((error) => {
        Alert.alert('Error', error.message);
      });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <MaterialIcons name="family-restroom" size={100} color="#4A90E2" />
        <Text style={styles.title}>Family Tracker</Text>
        
        <TouchableOpacity 
          style={styles.googleButton}
          onPress={() => promptAsync()}
          disabled={!request}
        >
          <AntDesign name="google" size={24} color="#4285F4" style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>
            Continuar con Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 30,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  googleIcon: {
    marginRight: 12,
  },
  googleButtonText: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '600',
  },
}); 