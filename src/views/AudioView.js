import { StyleSheet, Text, View,ImageBackground } from "react-native";
import React from "react";
import Card from "../component/Card";

const AudioView = () => {
  return (
    <ImageBackground
    resizeMode="cover"
    source={require("../../assets/bg-home.png")}
    style={styles.container}
  >
      <Card
        name={"Test Audio Mp3"}
        createdDate={"26-05-2022"}
        functionalities={"Audio"}
      />
    </ImageBackground>
    
  );
};

export default AudioView;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
