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
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const GastronomyScreen = () => {
  const [modalContent, setModalContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocales, setFilteredLocales] = useState(locales);

  const [locales, setLocales] = useState([
    {
      title: "Lamburgesa",
      description: "Local de comida especializada en hamburguesas",
      keywords: ["hamburgueseria", "comida rapida"],
      // ...otras propiedades
    },
    // ...otros locales
  ]);
  const handleSearch = () => {
    const filtered = locales.filter((local) =>
      local.keywords.includes(searchTerm)
    );
    setFilteredLocales(filtered);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          onBlur={handleSearch}
        />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require("./images/Rest1.jpeg")}
            style={styles.eventImage}
          />
          <Image
            source={require("./images/cheff.jpg")}
            style={styles.eventImage}
          />
          <Image
            source={require("./images/nutri.jpg")}
            style={styles.eventImage}
          />
        </ScrollView>
      </View>
      <Text style={styles.text}>Todos los locales</Text>
      <View style={styles.lowerSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {locales
            .filter((local) => local.keywords.includes(searchTerm))
            .map((local, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setModalContent(local)}
                style={styles.card}
              >
                <Image
                  source={require("./images/Rest2.jpg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Lamburgesa</Text>
                  <Text style={styles.cardDescription}>Best Hamburguesas</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Hamburgueseria</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonGap} />
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Comida Rapida</Text>
                    </TouchableOpacity>
                  </View>

                  <Text>
                    <Icon name="access-time" size={15} color="#3498db" /> 18:00
                    a 23:00
                  </Text>
                  <Text>
                    <Icon name="location-on" size={15} color="#3498db" />{" "}
                    Honorio Gonzalez
                  </Text>
                  <Text>
                    <Icon name="phone" size={15} color="#3498db" /> 0986 555 666
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Información con imagen a la izquierda y detalles a la derecha */}
          <TouchableOpacity
            onPress={() =>
              setModalContent({
                title: "Lamburgesa",
                description: "Local de comida especializada en hamburguesas",
                Horario: "16:30 a 23:00",
                Ubicación: "25 de mayo c/ Juan Leon Mallorquin",
                Teléfono: "0986 111 777",
                image: require("./images/Rest2.jpg"), // Agrega la ruta de la imagen
                text: "Yakisoba",
                text2: "Fideo y verduras y carne salteada",
                text3: "Yakitori",
                text4: "Brocheta de pollo",
                price: "$10.99", // Agrega el precio o cualquier otro campo que necesites
              })
            }
            style={styles.card}
          >
            <Image
              source={require("./images/lambur.jpeg")}
              style={styles.cardImage}
            />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Lamburgesa</Text>
              <Text style={styles.cardDescription}>Best Hamburguesas</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Hamburgueseria</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap} />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Comida Rapida</Text>
                </TouchableOpacity>
              </View>

              <Text>
                <Icon name="access-time" size={15} color="#3498db" /> 18:00 a
                23:00
              </Text>
              <Text>
                <Icon name="location-on" size={15} color="#3498db" /> Honorio
                Gonzalez
              </Text>
              <Text>
                <Icon name="phone" size={15} color="#3498db" /> 0986 555 666
              </Text>
            </View>
          </TouchableOpacity>

          {/* Agrega más tarjetas según sea necesario */}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Información con imagen a la izquierda y detalles a la derecha */}
          <TouchableOpacity
            onPress={() =>
              setModalContent({
                title: "Local 1",
                description: "Detalles del Local 1",
              })
            }
            style={styles.card}
          >
            <Image
              source={require("./images/martinez.jpeg")}
              style={styles.cardImage}
            />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Cafe Martinez</Text>
              <Text style={styles.cardDescription}>Cafe Rico</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Reposteria</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap} />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Cafeteria</Text>
                </TouchableOpacity>
              </View>

              <Text>
                <Icon name="access-time" size={15} color="#3498db" /> 15:00 a
                23:00
              </Text>
              <Text>
                <Icon name="location-on" size={15} color="#3498db" /> Av
                Caballero{" "}
              </Text>
              <Text>
                <Icon name="phone" size={15} color="#3498db" /> 0986 444 669
              </Text>
            </View>
          </TouchableOpacity>

          {/* Agrega más tarjetas según sea necesario */}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Información con imagen a la izquierda y detalles a la derecha */}
          <TouchableOpacity
            onPress={() =>
              setModalContent({
                title: "Local 1",
                description: "Detalles del Local 1",
              })
            }
            style={styles.card}
          >
            <Image
              source={require("./images/cheff.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Pizza Cheff</Text>
              <Text style={styles.cardDescription}>Pizza Rica</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Pizzeria</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap} />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Comida Rapida</Text>
                </TouchableOpacity>
              </View>

              <Text>
                <Icon name="access-time" size={15} color="#3498db" /> 18:00 a
                23:00
              </Text>
              <Text>
                <Icon name="location-on" size={15} color="#3498db" /> Honorio
                Gonzalez
              </Text>
              <Text>
                <Icon name="phone" size={15} color="#3498db" /> 0986 555 666
              </Text>
            </View>
          </TouchableOpacity>

          {/* Agrega más tarjetas según sea necesario */}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Información con imagen a la izquierda y detalles a la derecha */}
          <TouchableOpacity
            onPress={() =>
              setModalContent({
                title: "Local 1",
                description: "Detalles del Local 1",
              })
            }
            style={styles.card}
          >
            <Image
              source={require("./images/nutri.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Kamil</Text>
              <Text style={styles.cardDescription}>Buffet Libre</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Buffet</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap} />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Restaurante</Text>
                </TouchableOpacity>
              </View>

              <Text>
                <Icon name="access-time" size={15} color="#3498db" /> 18:00 a
                23:00
              </Text>
              <Text>
                <Icon name="location-on" size={15} color="#3498db" /> Honorio
                Gonzalez
              </Text>
              <Text>
                <Icon name="phone" size={15} color="#3498db" /> 0986 555 666
              </Text>
            </View>
          </TouchableOpacity>

          {/* Agrega más tarjetas según sea necesario */}
        </ScrollView>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalContent !== null}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setModalContent(null)}
              style={styles.closeButton}
            >
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>

            <Image source={modalContent?.image} style={styles.modalImage} />

            <Text style={styles.modalTitle}>{modalContent?.title}</Text>
            <Text style={styles.modalDescription}>
              {modalContent?.description}
            </Text>
            <View style={styles.buttonContainer2}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Hamburgueseria</Text>
              </TouchableOpacity>
              <View style={styles.buttonGap} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Comida Rapida</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>
              <Icon name="access-time" size={15} color="#3498db" />
              {modalContent?.Horario}
            </Text>
            <Text style={styles.modalText}>
              <Icon name="location-on" size={15} color="#3498db" />
              {modalContent?.Ubicación}
            </Text>
            <Text style={styles.modalText}>
              <Icon name="phone" size={15} color="#3498db" />
              {modalContent?.Teléfono}
            </Text>
            <View style={styles.comida}>
              <Image
                source={modalContent?.image}
                style={styles.smallModalImage}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.modalText}>{modalContent?.text}</Text>
              </View>
              <View style={styles.TextContainer2}>
                <Text style={styles.modalText}>{modalContent?.text2}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.modalText}>{modalContent?.price}</Text>
              </View>
            </View>
            <View style={styles.comida2}>
              <Image
                source={modalContent?.image}
                style={styles.smallModalImage}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.modalText}>{modalContent?.text3}</Text>
              </View>
              <View style={styles.TextContainer3}>
                <Text style={styles.modalText}>{modalContent?.text4}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.modalText}>{modalContent?.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  upperSection: {
    flex: 1,
    marginBottom: 8,
  },
  lowerSection: {
    flex: 1,
    marginTop: 12,
    width: 700,
  },
  scrollContent: {
    flexDirection: "row",
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
    marginRight: 13,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    margin: 0,
  },
  card: {
    flexDirection: "row",
    marginRight: 16,
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
  },
  cardImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 5,
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
    width: "100%",
    height: "100%",
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
  closeButton: {
    position: "absolute",
    top: 700,
    right: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: -70,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#87ceeb", // Cambia el color de fondo según tus preferencias
    borderRadius: 10, // Ajusta el radio del borde según tus preferencias
    paddingVertical: 8, // Ajusta el espacio vertical dentro del botón
    paddingHorizontal: 12, // Ajusta el espacio horizontal dentro del botón
    width: 99,
    height: 35,
  },
  buttonText: {
    color: "white", // Cambia el color del texto según tus preferencias
    fontSize: 10, // Ajusta el tamaño del texto según tus preferencias
  },
  buttonGap: {
    width: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  smallModalImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
    alignSelf: "flex-start", // Alinea la imagen a la izquierda
  },
  priceContainer: {
    alignSelf: "flex-end",
    top: -80,
  },
  TextContainer: {
    alignSelf: "flex-end",
    top: -100,
    left: -150,
  },
  TextContainer2: {
    alignSelf: "flex-end",
    top: -100,
    left: 20,
  },
  TextContainer3: {
    alignSelf: "flex-end",
    top: -100,
    left: -80,
  },
  comida2: {
    marginBottom: 50,
  },
});

export default GastronomyScreen;
