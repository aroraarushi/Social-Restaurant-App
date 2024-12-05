import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScene from "../screens/LoginScene";
import SignupScene from "../screens/SignupScene";
import HomeScene from "../screens/HomeScene";
import RestaurantScene from "../screens/RestaurantScene";
import FriendsScene from "../screens/FriendsScene";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScene" component={HomeScene} />
      <Tab.Screen name="Restaurants" component={RestaurantScene} />
      <Tab.Screen name="Friends" component={FriendsScene} />
    </Tab.Navigator>
  );
};


// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="TabNavigator" component={TabNavigator} />
//       <Drawer.Screen name="Friends" component={FriendsScene} />
//     </Drawer.Navigator>
//   );
// };


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScene} />
        <Stack.Screen name="SignupScene" component={SignupScene} />

        
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
