import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        // alignItems:'center',
        justifyContent: 'center',
        top: 10
    },
    images: {
        height: hp(10),
        width: wp(20),
        borderRadius: 15
    },
    card: {
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        padding: 10,
        flexDirection: 'row'
    },
    messages: {
        top: 5,
        fontSize: 17,
        flexGrow: 1,
        flexShrink: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight:wp(20)
    },
    date: {
        color: '#075595',
        fontSize: 13,
        bottom:20
    }
});

const Notification = ({
    message,
    date,
    image
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={image}
                    style={styles.images}
                />
                <View style={{ flexDirection: 'column', marginLeft: 10, marginRight: 10,top:5 }}>
                    <Text
                        numberOfLines={1}
                        style={styles.messages}
                    >{message}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        </View>
    );
};

export default Notification;