import React from "react";
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
// import {heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 55,
        width: 55,
        borderRadius: 55
    },
    active: {
        backgroundColor: '#8CC540'
    },
    inactive: {
        backgroundColor: 'red'
    },
    postion: {
        borderRadius: 15,
        borderColor:'white',
        borderWidth:2,
        height: 15,
        width: 15,
        position: 'relative',
        top: 40,
        right: 15
    }
});
const Members = ({
    name,
    image,
    active
}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <Image
                    source={image}
                    style={styles.image}
                />
                {
                    active ?
                        <View style={[styles.active, styles.postion]} />
                        :
                        <View style={[styles.inactive, styles.postion]} />
                }
            </View>
            <Text>{name}</Text>

        </TouchableOpacity>
    )
};

export default Members;