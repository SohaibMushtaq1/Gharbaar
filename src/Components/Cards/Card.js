import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: hp(60),
        width: wp(85),
        paddingBottom: 5,
        top: 10,
        flexDirection: 'column',
        marginLeft: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 40,
        left: 20,
        top: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 15
    },
    Profile: {
        left: 30,
        top: 15,
        flexDirection: 'column'
    },
    nameText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    dateText: {
        color: '#959595',
        marginTop: 5,
        fontSize:14
    }
});

const Card = ({
    name,
    ProfileImage,
    date,
    image,
    like,
    comment,
    discription
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: ProfileImage }}
                        style={styles.avatar}
                    />
                    <View style={styles.Profile}>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                </View>
                <TouchableOpacity >
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40
            }}>
                <Image
                    source={{ uri: image }}
                    style={{
                        height: hp(30),
                        width: wp(70)
                    }}
                />
                <View style={{ left: 10, right: 10, paddingHorizontal: 15 }}>
                    <Text numberOfLines={2} style={{ marginTop: 10, paddingRight: 5 }}>
                        {discription}
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#969BA0' }}>...See more</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', left: 55 }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#075595' }}>
                            {like} Like
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 10, color: '#075595' }}>
                            {comment} Comments
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderTopWidth: 2, borderTopColor: '#E4E4E4', marginHorizontal: 15,flexDirection:'row' }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <AntDesign name="hearto" size={20} color="#6E6E6E" />
                        <Text style={{ marginLeft: 5, color: '#6E6E6E' }}>Like</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5,marginLeft:15 }}>
                    <MaterialCommunityIcons name="message-processing-outline" size={20} color="#6E6E6E" />
                        <Text style={{ marginLeft: 5, color: '#6E6E6E' }}>Comments</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default Card;