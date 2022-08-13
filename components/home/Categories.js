import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    title: "Pick up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    title: "Sopft Drink",
  },
  {
    image: require("../../assets/images/bread.png"),
    title: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    title: "Fast Food",
  },
  {
    image: require("../../assets/images/deals.png"),
    title: "Deals",
  },
  {
    image: require("../../assets/images/desserts.png"),
    title: "Desserts",
  },
];
const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop starts here */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>
              {item.title}
            </Text>
          </View>
        ))}
        {/* Loop ends here */}
      </ScrollView>
    </View>
  );
};

export default Categories;
