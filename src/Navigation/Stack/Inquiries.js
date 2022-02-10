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
        initialRouteName="Precious Inquiries"
        >
            <TopBar.Screen   name='Precious Inquiries' component={MemberArea.BottomBar.Inquiries.PreciousInquiries}/>
            <TopBar.Screen   name='Make New Inquiries' component={MemberArea.BottomBar.Inquiries.MakeNewInquiries}/>
        </TopBar.Navigator>
    );
}

export default TopTabBar;