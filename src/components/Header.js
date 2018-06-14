import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>
                    Floofers
        </Text>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/White_paw_print.svg/1065px-White_paw_print.svg.png' }}
                />
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#994d00',
        height: 70,
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
        fontSize: 45,
        marginRight: 20,
        fontFamily: 'GloriaHallelujah'
    }
};