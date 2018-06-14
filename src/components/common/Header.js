import React from "react";
import {Text, View} from "react-native";

const Header = () => {

    const {textStyle, viewStyle} = styles;
 
    return (
        <View style={viewStyle}>
             <Text style={textStyle}>Albums</Text>
        </View>
)
}

const styles = {
    viewStyle: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        padding: 15,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative",
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold'
    }
}

export {Header}