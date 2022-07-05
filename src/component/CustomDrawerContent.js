import { StyleSheet, Text, View, Image,SafeAreaView } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import React from "react";

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#cdb4db",paddingTop:30}}>
      
      <View style={styles.logoBox}>
        <Image style={styles.logo} resizeMode="contain" source={require("../../assets/icon.png")}></Image>
      </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <Text
        style={{
          position:'absolute',
          bottom:10,
    alignSelf: "center",

          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        Louguiman
      </Text>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  logoBox: {
    alignSelf: "center",
    width: 150,
    height: 150,
    elevation: 5,
    overflow:"hidden",
    padding:15,
    marginVertical:15,
    borderRadius:150,
    backgroundColor:"#FFF"
  },
  logo:{
    width:"100%",
    height:"100%",

  }
});
