import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
const foods = [
  {
    title: "Lasgans",
    description: "Sed ut perspiciatis unde omnis iste natus error sit ",
    price: "$12.50",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Tandoori chicken",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    price: "$11.30",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Lzania",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    price: "$12.22",
    image:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    price: "$9.30",
    image:
      "https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    price: "$9.30",
    image:
      "https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    price: "$9.30",
    image:
      "https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
const MenuItems = ({ restruantName }) => {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restruantName,
        checkboxValue: checkboxValue,
      },
    });

  // get The state from redux
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.title === food.title));
  };
  const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  });
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo foods={food} />
            <FoodImage foods={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginVertical: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{props.foods.title}</Text>
    <Text>{props.foods.description}</Text>
    <Text>{props.foods.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.foods.image }}
      style={{ height: 100, width: 100, borderRadius: 8 }}
    />
  </View>
);
export default MenuItems;
