import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTab from "../components/home/HeaderTab";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestrauntItems from "../components/home/RestrauntItems";
import { localRestaurants } from "../components/home/RestrauntItems";
import { Divider } from "react-native-elements";
import ButtomTabs from "../components/home/ButtomTabs";
const YELP_API_KEY =
  "ijn4Kfute0z8ueCBToRJX6dBT2pzfwS6ZfGMUpwmUAc8wQceFiVuZ8jRwhiGlUAz18PjfnhMcBvOeisCVxkSw_2UadQzcZXWC2RTZkewGDG_YRrykvbq9STXeOu9YnYx";

const Home = ({ navigation }) => {
  const [restrauntData, setRestrauntData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestrauntData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      }); //
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [activeTab]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      {/* Categories component  */}
      <ScrollView showVerticalScrollIndicator={false}>
        <Categories />
        <RestrauntItems restrauntData={restrauntData} navigation={navigation} />
      </ScrollView>
      {/* Divider started here to add buttonm tabs */}
      <Divider width={1} />
      <ButtomTabs />
    </SafeAreaView>
  );
};

export default Home;
