import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTab = (props) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        title="Delivery"
        bgColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        bgColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.title ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.title)}
  >
    <Text
      style={{
        color: props.activeTab === props.title ? "white" : "black",
        fontSize: 16,
        fontWeight: "900",
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
export default HeaderTab;
