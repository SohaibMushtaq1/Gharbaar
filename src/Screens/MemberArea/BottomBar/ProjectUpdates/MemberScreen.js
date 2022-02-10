import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Users } from '../../../../Components';
import Members from '../../../../asserts/dummydata/output.json'

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    unitdetailActive: {

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
    Members: {
        color: '#969BA0'
    },
    ActiveMembers: {
        color: 'green'
    }
});

const MyUnitDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.Unitdetail}>
                <TouchableOpacity
                    style={styles.InActive}
                    onPress={() => navigation.navigate('Updates')}
                >
                    <Text style={styles.InActiveText}>Updates</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Active}
                >
                    <Text style={styles.ActiveText}>Members</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Members
                    </Text>
                    <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                        <Text style={styles.Members}>79 Members - </Text>
                        <Text style={styles.ActiveMembers}>40 Active</Text>
                    </View>
                    <ScrollView>
                        {Members.map((data) => {
                            return (
                                <View key={data.Id}>
                                    <Users.Members
                                        name={data.Name}
                                        image={require('../../../../asserts/dummydata/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png')}
                                        active={data.Active}
                                    />
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};
export default MyUnitDetails;