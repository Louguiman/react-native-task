import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Audio from "./Audio";
import Video from "./Video";
const { width, height } = Dimensions.get("screen");

const Card = ({ name, createdDate, functionalities }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{name && name} </Text>
        <Text style={styles.caption}>{createdDate && createdDate} </Text>
      </View>
      <View style={styles.content}>
        {functionalities === "Audio" && <Audio />}
        {functionalities === "Video" && <Video />}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    minHeight: 250,
    maxHeight: 300,
    width: width - 10,
    padding: 10,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
  },
  header: { flex:1,flexDirection: "row", justifyContent: "space-between",alignItems: "baseline", },
  content: { flex:2,alignItems: "center", justifyContent: "center" },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 6,
  },
  caption: {
    fontSize: 14,
    fontWeight: "400",
    marginRight: 6,
    color: "gray",
  },
});
