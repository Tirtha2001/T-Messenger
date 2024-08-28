// Import screens here

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessageScreen from "../screens/MessageScreen";
import StatusScreen from "../screens/StatusScreen";
import CallScreen from "../screens/CallScreen";
import ContactScreen from "../screens/ContactScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    <Tab.Navigator
    screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarStyle:{}
    }}
    >
        <Tab.Screen name="Messages" component={MessageScreen}/>
        <Tab.Screen name="Statuses" component={StatusScreen}/>
        <Tab.Screen name="Calls" component={CallScreen}/>
        <Tab.Screen name="Contacts" component={ContactScreen}/>
    </Tab.Navigator>
}