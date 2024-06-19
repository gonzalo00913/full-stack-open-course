import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "../components/RepositoryItem"
import useRepositories from "../hooks/useRepositories";
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  
  const RepositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];

  return (
    <FlatList
      data={RepositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
export default RepositoryList;
