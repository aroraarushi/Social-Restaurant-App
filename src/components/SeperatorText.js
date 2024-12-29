import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const SeperatorText =({title})=>{
    const { colors } = useSelector((state) => state.theme); 
    const styles = createStyles(colors);

    return(
        <View style={{flexDirection:'row'}}>
            <View style={styles.seperator} />
            <Text style={styles.seperatorText}>{title}</Text>
            <View style={styles.seperator} />
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    seperatorText: {
        color: colors.text,
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