import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBarNavigation from '../Bottom';
import { MemberArea } from '../../Screens'
const Stack = createNativeStackNavigator();

function MemberAreaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MemberArea" component={BottomBarNavigation} />
            <Stack.Screen name="Notification" component={MemberArea.Main.Notification} />
        </Stack.Navigator>
    );
}

export default MemberAreaStack;