import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberArea } from '../../Screens'
import {
    MaterialCommunityIcons,
    Octicons,
    Foundation,
    Ionicons
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-quilt-outline" size={30} color={color} />
                    )
                }}
                name="OverView"
                component={MemberArea.BottomBar.OverView} />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color }) => (
                        <Octicons name="project" size={24} color={color} />
                    )
                }}
                name="ProjectUpdates"
                component={MemberArea.BottomBar.ProjectUpdates} />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color }) => (
                        <Foundation name="clipboard-pencil" size={24} color={color} />
                    )
                }}
                name="MyUnitDetails"
                component={MemberArea.BottomBar.MyUnitDetails} />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="chatbubbles-outline" size={24} color={color} />
                    )
                }}
                name="Inquiries"
                component={MemberArea.BottomBar.Inquiries} />
        </Tab.Navigator>
    );
}