import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SeperatorText =({title})=>{
    return(
        <View style={{flexDirection:'row'}}>
            <View style={styles.seperator} />
            <Text style={styles.seperatorText}>{title}</Text>
            <View style={styles.seperator} />
        </View>
    )
}

const styles = StyleSheet.create({
    seperatorText: {
      color: 'black',
      fontSize: 14,
    },
    seperator:{
        height:1,
        backgroundColor:'lightgrey',
        width:'47%',
        marginTop:10
    }
});

export default SeperatorText