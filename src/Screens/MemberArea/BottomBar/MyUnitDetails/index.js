import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Users } from '../../../../Components';
import Data from '../../../../asserts/dummydata/MOCK_DATA.json'

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
    }
});

const MyUnitDetails = () => {
    const [Value, setValue] = useState('Updates');
    // useEffect(() => {
    //     Data.map((data) => {
    //         console.log(data);
    //     });
    // }, []);
    const RenderElements = () => {
        if (Value == 'Updates') {
            return (
                <ScrollView
                contentContainerStyle={{
                    marginBottom: 100 
                }}
                >
                    {
                        Data.map((data) => (
                            <View style={{ marginBottom: 50 }}>
                                <Card.Card
                                    name={data.Name}
                                    ProfileImage={data.Profile_Image}
                                    date={data.Date}
                                    image={data.Image}
                                    like={data.Like}
                                    comment={data.Commnets}
                                    discription={data.Description}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
            )
        } else {
            return <Users.Members />
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.Unitdetail}>
                {Value == 'Updates' ?
                    <TouchableOpacity
                        style={styles.Active}
                    >
                        <Text style={styles.ActiveText}>Updates</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity
                        style={styles.InActive}
                        onPress={() => setValue('Updates')}
                    >
                        <Text style={styles.InActiveText}>Updates</Text>
                    </TouchableOpacity>
                }
                {Value == 'Members' ?
                    <TouchableOpacity
                        style={styles.Active}
                    >
                        <Text style={styles.ActiveText}>Members</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.InActive}
                        onPress={() => setValue('Members')}
                    >
                        <Text style={styles.InActiveText}>Members</Text>
                    </TouchableOpacity>}
            </View>
            <View>
                <RenderElements />
            </View>
        </View>
    );
};
export default MyUnitDetails;