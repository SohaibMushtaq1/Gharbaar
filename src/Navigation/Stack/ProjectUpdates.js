import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MemberArea} from '../../Screens'

const TopBar= createNativeStackNavigator();

const TopTabBar=()=>{

    return(
        <TopBar.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Updates"
        >
            <TopBar.Screen   name='Updates' component={MemberArea.BottomBar.ProjectUpdates.UpdatesScreen}/>
            <TopBar.Screen   name='Members' component={MemberArea.BottomBar.ProjectUpdates.MemberScreen}/>
        </TopBar.Navigator>
    );
}

export default TopTabBar;