import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../component/Card";

const VideoView = () => {
  return (
    <View style={styles.container}>
      <Card
        name={"Test Video"}
        createdDate={"23-05-2022"}
        functionalities={"Video"}
      />
    </View>
  );
};

export default VideoView;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
