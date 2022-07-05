import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Card from "../component/Card";

const VideoView = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../assets/bg-home.png")}
      style={styles.container}
    >
      <Card
        name={"Test Video"}
        createdDate={"23-05-2022"}
        functionalities={"Video"}
      />
    </ImageBackground>
  );
};

export default VideoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
