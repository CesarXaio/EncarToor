import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapView, { Marker } from "react-native-maps";
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

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const events = [
    {
      name: "Concierto de navidad Por primera vez juntos",
      image: require("./images/concierto.jpeg"),
      description: "Concierto de la orquesta Infanto-Juvenil de Encarncación",
      time: " Jue, 23 Dic 18:00",
      location: " Auditorio Parana",
    },
    {
      name: "Apertura Verano 2024",
      image: require("./images/costanera.jpeg"),
      description:
        "Se dara apertura a la temporada alta de la ciudad de Encarnación",
      time: " Sab, 21 Dic 18:00",
      location: " Playa San Jose",
    },
    {
      name: "Carnavales Encarnacenos 2024",
      image: require("./images/carnaval.jpg"),
      description: "Inicio de la mayor fiesta de la ciudad",
      time: " Vie, 02 Ene 21:00",
      location: " Sambodromo de Encarnación",
    },
    {
      name: "Peregrinación a Itacua",
      image: require("./images/Rest2.jpg"),
      description: "Como cada año , caminata hasta Itacua",
      time: " Vie, 08 Dic, 2024",
      location: " Basilica de Itacua",
    },
    {
      name: "Estadio Liga Encarnacena",
      image: require("./images/nutri.jpg"),
      description: "Se dara apertura al mejor estadio de la ciudad",
      time: " Sab, 21 Dic 18:00",
      location: " San Miguel",
    },
  ];

  const handleEventPress = (eventName) => {
    if (eventName === "Concierto de navidad Por primera vez juntos") {
      setSecondModalVisible(true);
    }
  };

  const handleViewCalendarPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Aquí puedes agregar imágenes pequeñas o eventos */}
          <Image
            source={require("./images/Rest1.jpeg")}
            style={styles.eventImage}
          />
          <Image
            source={require("./images/nutri.jpg")}
            style={styles.eventImage}
          />
          <Image
            source={require("./images/martinez.jpeg")}
            style={styles.eventImage}
          />
          {/* Agrega más imágenes o eventos según sea necesario */}
        </ScrollView>
      </View>

      {/* Texto para ver calendario de eventos */}
      <TouchableOpacity
        onPress={() => handleViewCalendarPress()}
        style={styles.viewCalendarButton}
      >
        <Text style={styles.viewCalendarButtonText}>Ver todos los eventos</Text>
      </TouchableOpacity>
      <View style={styles.lowerSection}>
        {/* Calendario */}
        <Calendar />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Icon name="close" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.text}>Eventos en Diciembre</Text>

          {events.map((event, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleEventPress(event.name)}
              style={styles.eventContainer}
            >
              <Image source={event.image} style={styles.eventImage1} />
              <View style={styles.eventDetails}>
                <Text style={styles.name}>{event.name}
                </Text>
                <Text>{event.description}</Text>
                <Text><Icon name="access-time" size={15} color="#3498db" />
                {event.time}</Text>
                <Text><Icon name="location-on" size={15} color="#3498db" />
                {event.location}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={() => setSecondModalVisible(false)}
            style={styles.closeButton}
          >
            <Icon name="close" size={25} color="black" />
          </TouchableOpacity>
          {/* Añade los elementos que describiste */}
          <Image
            source={require("./images/concierto.jpeg")} // Reemplaza con la ruta correcta de tu imagen
            style={styles.eventImage2} // Establece el estilo para que ocupe el 40% en la parte superior
          />
          <Text style={styles.text}>
            Concierto de navidad "Por Primera vez juntos"
          </Text>
          <Text>
            <Icon name="access-time" size={15} color="#3498db" />
            {"  18:00"}
          </Text>
          <Text>
            <Icon name="location-on" size={15} color="#3498db" />
            {" Auditorio Parana"}
          </Text>
          <Text>
            <Icon name="location-city" size={15} color="#3498db" />
            {"  Nombre de la Calle"}
          </Text>
          <Text>
            <Icon name="attach-money" size={15} color="#3498db" />
            {" Entrada Gratuita"}
          </Text>
          <Text style={styles.text10}>
            {"La Orquesta Sinfónica de Encarnación, en colaboración con el prestigioso Coro de la Universidad Nacional de Itapúa, ha decidido fusionar sus talentos para ofrecer a la comunidad un inolvidable concierto de villancicos clásicos navideños. Este evento musical busca cautivar a los asistentes con armonías exquisitas y una interpretación magistral de piezas tradicionales que celebran la esencia festiva de la temporada. "}
          </Text>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: -23.442503, longitude: -58.443832 }}
              title="Playa San José"
              description="Ubicación de la playa San José"
            />
          </MapView>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    name:{
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 6,
        
    },
    text10:{
        marginTop: 10
    },
  map: {
    ...StyleSheet.absoluteFillObject,
    left: 1,
    top: 500,
    width: "112%",
    height: 200,
  },

  container: {
    flex: 1,
    padding: 16,
  },
  upperSection: {
    flex: 1,
    marginBottom: 16,
  },
  lowerSection: {
    flex: 1,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  eventImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginRight: 8,
  },
  eventImage2: {
    width: "100%",
    height: "30%",
  },
  viewCalendarButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewCalendarButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
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
    borderRadius: 10,
    width: "100%", // Puedes ajustar esto según tus necesidades
    height: "100%", // Puedes ajustar esto según tus necesidades
    alignSelf: "center", // Centra el modal en la pantalla
  },

  closeButton: {
    position: "absolute",
    top: 700,
    right: 10,
  },
  eventContainer: {
    flexDirection: "row", // Alinea los elementos en fila
    marginBottom: 10,
    paddingTop: 20,
  },

  eventImage1: {
    width: 100, // Ajusta el ancho de la imagen según tus necesidades
    height: 100, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: "cover",
    marginRight: 8,
  },

  eventDetails: {
    flex: 1, // El resto del espacio disponible
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    margin: 0,
  },
});

export default MainScreen;
