import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";

const TourismScreen = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleSearch = (text) => {
    // Verificar si la palabra clave está presente en el texto
    const isKeywordPresent = text.toLowerCase().includes("playa san jose");

    // Establecer el contenido del modal según la palabra clave
    if (isKeywordPresent) {
      setModalContent({
        title: "Playa San Jose",
        description: "Información detallada sobre Playa San Jose.",
        // Agrega cualquier otra información que desees mostrar en el modal
      });
    } else {
      setModalContent(null); // Limpiar el contenido del modal si la palabra clave no está presente
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={handleSearch}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Aquí puedes agregar imágenes pequeñas o eventos */}
          <Image
            source={require("./images/costanera.jpeg")}
            style={styles.eventImage}
          />
          <Image
            source={require("./images/carnaval.jpg")}
            style={styles.eventImage}
          />
          <Image
            source={require("./images/concierto.jpeg")}
            style={styles.eventImage}
          />
          {/* Agrega más imágenes o eventos según sea necesario */}
        </ScrollView>
      </View>
      <Text style={styles.text}>Sitios turisticos cerca tuyo</Text>
      <View style={styles.lowerSection}>
        {/* Mapa */}

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Puedes agregar marcadores u otras funcionalidades del mapa aquí */}
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marcador de ejemplo"
            description="Este es un marcador de ejemplo"
          />
        </MapView>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalContent !== null}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Botón para salir */}
            <TouchableOpacity
              onPress={() => setModalContent(null)}
              style={styles.closeButton}
            >
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>

            {/* Imagen en la parte superior */}
            <Image
              source={require("./images/costanera.jpeg")}
              style={styles.modalImage}
            />

            {/* Texto */}
            <Text style={styles.modalTitle}>Playa San José</Text>
            <Text style={styles.modalDescription}>
              La playa San José se encuentra ubicada sobre la Avenida Costanera
              República del Paraguay. Fue inaugurada en el año 2011 y posee una
              extensión de 700 metros.
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Estacionamiento</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap} />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Baños Publicos</Text>
                </TouchableOpacity>
              </View>
            {/* Horario, Ubicación, Teléfono */}
            <View style={styles.modalDetails}>
              <Text><Icon name="access-time" size={15} color="#3498db" />
            {"  18:00"}</Text>
              <Text><Icon name="location-on" size={15} color="#3498db" />
            {" Av Republica del Paraguay"}</Text>
              <Text><Icon name="phone" size={15} color="#3498db" />
            {" 071 777 888"}</Text>
            </View>

            {/* Mapa más pequeño con la ubicación de Paraguay */}
            <MapView
              style={styles.smallMap}
              initialRegion={{
                latitude: -23.442503,
                longitude: -58.443832,
                latitudeDelta: 5,
                longitudeDelta: 5,
              }}
            >
              <Marker
                coordinate={{ latitude: -23.442503, longitude: -58.443832 }}
                title="Playa San José"
                description="Ubicación de la playa San José"
              />
            </MapView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  upperSection: {
    flex: 1,
    marginBottom: 8,
  },
  lowerSection: {
    flex: 1,
    marginTop: 12,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius:10
  },
  eventImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginRight: 13,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    margin: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: '100%',
    height: '100%',
  },
  modalImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDetails: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
  },
  smallMap: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  closeButton: {
    position: "absolute",
    top: 700, // Ajusta la posición superior según sea necesario
    right: 20, // Ajusta la posición derecha según sea necesario
  },
  closeButtonText: {
    fontSize: 16,
    color: "blue", // Puedes ajustar el color según tus preferencias
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left:-60,
    marginEnd:20,
    marginBottom:10
  },
  button: {
    backgroundColor: "#87ceeb", // Cambia el color de fondo según tus preferencias
    borderRadius: 10, // Ajusta el radio del borde según tus preferencias
    paddingVertical: 8, // Ajusta el espacio vertical dentro del botón
    paddingHorizontal: 12, // Ajusta el espacio horizontal dentro del botón
    width: 100,
    height: 35,
  },
  buttonText: {
    color: "white", // Cambia el color del texto según tus preferencias
    fontSize: 10, // Ajusta el tamaño del texto según tus preferencias
  },
  buttonGap: {
    width: 10,
  },
});

export default TourismScreen;
