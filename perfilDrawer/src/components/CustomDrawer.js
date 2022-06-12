import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      <View
        style={{
          width: "100%",
          height: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: "https://github.com/gameiro666.png" }}
          style={{
            width: 80,
            aspectRatio: 1,
            alignSelf: "center",
            marginTop: 48,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            marginTop: 5,
            marginBottom: 45,
          }}
        >
          Felipe Gameiro
        </Text>
      </View>

      <DrawerItemList {...props} labelStyle={{ color: 'black' }} />
    </DrawerContentScrollView>
  );
}