import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const SearchBar = () => {
  return (
    <View style={{ marginTop: 10, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
        onPress={(data, details = null) => {}}
        placeholder="Search"
        styles={{
          // this is from google-places-autocomplete component
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            paddingLeft: 10,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              mrginRigth: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
