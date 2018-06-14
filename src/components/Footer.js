import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Footer</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#994d00',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 15
    },
    textStyle: {
        color: "#fff",
        fontSize: 20,
        marginRight: 20,
        fontFamily: 'GloriaHallelujah'
    }
};