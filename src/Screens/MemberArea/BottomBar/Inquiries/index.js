import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

const Inquiries=()=>{
    return(
        <View style={styles.container}>
            <Text>inquiries</Text>
        </View>
    );
};
export default Inquiries;