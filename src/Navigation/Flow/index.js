import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlowStack from '../Stack/MemberArea'
const Flow = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <FlowStack />
        </NavigationContainer>
    );
};

export default Flow;