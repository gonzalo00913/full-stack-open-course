import React from "react";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import { View } from "react-native";


const Main = () => {
  console.log("ok");
  return (
    <View>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
