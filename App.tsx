import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { CryptoScreen } from "./src/screens/CryptoScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="CryptoList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="CryptoList" component={CryptoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
