import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberArea } from '../../Screens'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="OverView" component={MemberArea.BottomBar.OverView} />
            <Tab.Screen name="ProjectUpdates" component={MemberArea.BottomBar.ProjectUpdates} />
            <Tab.Screen name="MyUnitDetails" component={MemberArea.BottomBar.MyUnitDetails} />
            <Tab.Screen name="Inquiries" component={MemberArea.BottomBar.Inquiries} />
        </Tab.Navigator>
    );
}