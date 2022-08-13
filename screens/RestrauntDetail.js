import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restrauntDetails/About";
import MenuItems from "../components/restrauntDetails/MenuItems";
import ViewCard from "../components/restrauntDetails/ViewCard";

const RestrauntDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restruantName={route.params.name} />
      <ViewCard navigation={navigation} restruantName={route.params.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RestrauntDetail;
