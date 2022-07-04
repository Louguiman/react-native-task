import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../component/Card";

const AudioView = () => {
  return (
    <View style={styles.container}>
      <Card
        name={"Test Audio Mp3"}
        createdDate={"26-05-2022"}
        functionalities={"Audio"}
      />
    </View>
  );
};

export default AudioView;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
