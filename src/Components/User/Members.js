import React from "react";
import { View,Text,StyleSheet } from 'react-native';

const Members =()=>{
    const styles=StyleSheet.create({
        container:{
            padding:10
        }
    });
    return(
        <View style={styles.container}>
            <Text>
                Members
            </Text>
        </View>
    )
};

export default Members;