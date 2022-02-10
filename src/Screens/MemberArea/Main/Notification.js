import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {heightPercentageToDP as p, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Notification from '../../../asserts/dummydata/Notification';
import {Users} from '../../../Components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'#FFFFFF'
    },
    Text: {
        fontSize: 25
    },
    Active: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F4F5F9',
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius: 5
    },
    ActiveText: {
        color: 'black'
    },
});

const NotificationMain = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text}>Notifications</Text>
                <TouchableOpacity
                    style={styles.Active}
                >
                    <Text style={styles.ActiveText}>Weekly</Text>
                    <View style={{marginLeft:10}}>
                        <AntDesign name="down" size={wp(5)} color="#075595" />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
               {Notification.map((data)=>{
                   return(
                    <View key={data.id}>
                        <Users.Notification  
                        message={data.message}
                        image={data.Image}
                        date={data.date}
                        />
                    </View>
                   );
               })}
            </ScrollView>
        </View>
    );
};
export default NotificationMain;