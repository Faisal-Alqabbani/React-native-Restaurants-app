import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ButtomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 30,
        justifyContent: "space-between",
        paddingVertical: 2,
      }}
    >
      <Icon text="Home" icon="home" />
      <Icon text="Browse" icon="search" />
      <Icon text="Grocery" icon="shopping-bag" />
      <Icon text="Orders" icon="receipt" />
      <Icon text="Account" icon="user" />
    </View>
  );
};

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ alignSelf: "center" }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default ButtomTabs;
