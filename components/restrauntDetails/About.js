import { View, Text, Image } from "react-native";
import React from "react";

const About = (props) => {
  const ylepResturantsInfo = {
    image:
      "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Farmehouse kitchen thai Cuisine",
    price: "$$",
    reviews: "1500",
    description: " Thai . Comfort . $$ . 🎫 . 4 ⭐️ (2931+)",
    rating: 5,
    categories: [
      { title: "Indian" },
      { title: "Comfort Food" },
      { title: "Coffee" },
      { title: "Ice Creame" },
      { title: "Snacks" },
    ],
  };
  // I got this information from route navigation
  const { image, name, price, reviews, rating, categories } =
    props.route.params;
  const formatCategories = categories
    .map((category) => category.title)
    .join(" . ");
  const description = `${formatCategories} ${
    price ? " . " + price : " "
  } . 🎫 . ${rating} ⭐️ (${reviews}+)`;
  return (
    <View>
      {/* Restraunt image */}
      <RestaurantImage image={image} />
      {/* Restaurant Title */}
      <RestaurantTitle title={name} />
      {/* Restaurant Description */}
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15.5,
      fontWeight: "400",
    }}
  >
    {props.description}
  </Text>
);

export default About;
