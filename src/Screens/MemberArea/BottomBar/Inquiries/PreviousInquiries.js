import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    Unitdetail: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#F4F5F9',
        height: hp(7),
        width: wp(40),
        marginVertical: hp(0.5),
        marginLeft: wp(4),
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 10
    },
    Active: {
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 5
    },
    ActiveText: {
        color: 'black'
    },
    InActive: {
        backgroundColor: '#F4F5F9',
    },
    InActiveText: {
        color: '#969BA0'
    },
});

const PreciousInquiries = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.Unitdetail}>
                <TouchableOpacity
                    style={styles.Active}
                >
                    <Text style={styles.ActiveText}>Updates</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.InActive}
                onPress={() => navigation.navigate('Make New Inquiries')}
                >
                    <Text style={styles.InActiveText}>Updates</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default PreciousInquiries;