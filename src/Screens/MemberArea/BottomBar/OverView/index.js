import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

const OverView=()=>{
    return(
        <View style={styles.container}>
            <Text>OverView</Text>
        </View>
    );
};
export default OverView;