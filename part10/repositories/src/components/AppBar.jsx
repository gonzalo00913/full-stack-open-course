import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    height: 60,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-around",
   },

   scrollView: {
    marginHorizontal: 50,
  },
  text:{
    marginRight:10,
    fontSize: 20
  }
});


const AppBar = () => {
  return (
    <View style={styles.container}>
       <ScrollView horizontal style={styles.scrollView}>
       <Link style={styles.text} to="/SignIn">
        <Text style={styles.text}>SignIn</Text>
      </Link>
      <Link  to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link  to="/">
        <Text style={styles.text}>logout</Text>
      </Link>
  
      </ScrollView>
    </View>
  );
};

export default AppBar;
