import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBarNavigation from '../Bottom';
import { MemberArea } from '../../Screens'
import { TouchableOpacity, View, Image, StyleSheet, Pressable } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

function MemberAreaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={({ navigation }) =>({
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity>
                            <Image
                                //   style={{
                                //       height:30
                                //   }}
                                source={require('../../asserts/BottomsIcons/Group.png')}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => {
                        return (
                            <View style={style.container}>
                                <Pressable
                                    android_ripple={{ color: '#c4c4c4', borderless: true, radius: 30 }}
                                    onPress={()=>navigation.navigate("Notification")}
                                    style={{ marginRight: 30 }}
                                >

                                    <Feather name="bell" size={24} color="black" />
                                    <Badge
                                        status="error"
                                        value={10}
                                        containerStyle={{ position: 'absolute', bottom: 15, left: 15 }}
                                    />
                                </Pressable>
                                <TouchableOpacity>
                                    <Avatar
                                        rounded
                                        source={require('../../asserts/BottomsIcons/placeholder.png')}
                                        size="small"
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    }
                })}
                name="MemberArea"
                component={BottomBarNavigation} />
            <Stack.Screen 
            options={{
                title:'back'
            }}
            name="Notification" 
            component={MemberArea.Main.Notification} />
        </Stack.Navigator>
    );
}

export default MemberAreaStack;