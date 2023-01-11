import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import loginScreen from "./screens/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import registerScreen from "./screens/registerScreen";
import homeScreen from "./screens/homeScreen";
import addChatScreen from "./screens/addChatScreen";
import chatScreen from "./screens/chatScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={registerScreen} />
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="AddChat" component={addChatScreen} />
        <Stack.Screen name="Chat" component={chatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "afff",
    alignItems: "center",
    justifyContent: "center",
  },
});
