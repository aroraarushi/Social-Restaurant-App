import React from "react";
import { StyleSheet,View } from "react-native";

const withBackground=(WrappedComponent)=>{
    
    return(props)=>(
        <View style={styles.container}>
            <WrappedComponent {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : 'white'
    }
})

export default withBackground;