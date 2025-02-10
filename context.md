# Family Tracker App

## Tecnologías Utilizadas
- **React Native con Expo**
- **Firebase** (Authentication, Firestore, Storage)
- **Mapbox** (Mapas y ubicación en tiempo real)
- **Expo Notifications** (Notificaciones push)
- **Expo Location** (Servicios de ubicación)

---

## Flujo de la Aplicación

### 1. **Autenticación**
- El usuario inicia sesión con **Firebase Authentication** (Email/Contraseña o Google Sign-In).
- Si es un nuevo usuario, se le pedirá que cree un perfil básico con su nombre y foto de perfil (almacenados en **Firestore** y **Firebase Storage**).

### 2. **Creación de Grupo Familiar**
- Un usuario autenticado puede crear un **Grupo Familiar**.
- Se generará un identificador único para el grupo y se almacenará en **Firestore**.
- El creador del grupo podrá agregar familiares ingresando sus correos electrónicos.
- Los familiares recibirán una invitación para unirse al grupo.

### 3. **Gestión de Miembros del Grupo**
- Los miembros pueden aceptar o rechazar la invitación.
- Una vez aceptada, sus datos se vinculan al grupo en **Firestore**.
- Solo el administrador puede eliminar miembros del grupo.

### 4. **Ubicación en Tiempo Real**
- Cada usuario comparte su ubicación en segundo plano usando **Expo Location**.
- La ubicación se actualiza en **Firestore** en un documento asociado al usuario.
- Mapbox muestra la ubicación en tiempo real de cada miembro en el mapa.

### 5. **Zonas de Interés**
- Los usuarios pueden agregar ubicaciones clave (Ej: casa, trabajo, escuela) y guardarlas en **Firestore**.
- Estas ubicaciones incluyen coordenadas geográficas y un radio de activación.

### 6. **Notificaciones de Geofencing**
- Se configurarán geocercas para detectar cuando un usuario entra o sale de una zona definida.
- Al cruzar una geocerca, se enviará una notificación push a los demás miembros del grupo usando **Expo Notifications**.

### 7. **Interfaz de Usuario**
- **Pantalla de Inicio de Sesión**: Autenticación con Firebase.
- **Pantalla de Mapa**: Muestra la ubicación de los miembros en Mapbox.
- **Pantalla de Grupo Familiar**: Lista de miembros y gestión de invitaciones.
- **Pantalla de Configuración**: Gestión de perfil y preferencias de notificación.

---

## Funcionalidades Clave

### **Autenticación**
- Registro e inicio de sesión con Firebase.
- Verificación de correo electrónico.
- Restablecimiento de contraseña.

### **Gestión de Grupos**
- Creación de grupos familiares.
- Invitaciones a miembros.
- Eliminación de miembros.

### **Ubicación y Mapas**
- Mapa interactivo con Mapbox.
- Ubicación en tiempo real.
- Geofencing para alertas automáticas.

### **Notificaciones**
- Notificación cuando un usuario entra/sale de una zona de interés.
- Alerta de llegada a casa, trabajo, etc.
- Configuración de notificaciones por usuario.

---

## Requisitos Técnicos
- **Expo SDK** con soporte para Firebase y Mapbox.
- **Firebase** configurado con Authentication, Firestore y Storage.
- **Mapbox SDK** integrado para mapas y geolocalización.
- **Expo Location** y **Background Tasks** para ubicación en segundo plano.
- **Expo Notifications** para notificaciones push.

---

Este documento proporciona una guía clara para que cualquier desarrollador pueda entender e implementar la aplicación sin problemas.

