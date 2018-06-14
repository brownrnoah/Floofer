import React from "react";
import { Text, TouchableOpacity } from "react-native"

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        height: 50,
        width: 150,
        alignSelf: 'stretch',
        backgroundColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 116,
        marginRight: 116
    },
    textStyle:{
        alignSelf: 'center',
        color: '#fff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20
    }
}

export {Button}