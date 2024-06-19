// RepositoryItem.js
import React from "react";
import { View, Text } from "react-native";

const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
  return (
    <View>
      <Text>FullName: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks Count: {forksCount}</Text>
      <Text>Stargazers Count: {stargazersCount}</Text>
      <Text>Rating Average: {ratingAverage}</Text>
      <Text>Review Count: {reviewCount}</Text>
      <Text>Owner Avatar Url: {ownerAvatarUrl}</Text>
    </View>
  );
};

export default RepositoryItem;
