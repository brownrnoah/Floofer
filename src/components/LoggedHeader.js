import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import dogTag from "../images/dogTag.png";
import search from "../images/search.png";
import logout from "../images/logout.png";
import firebase from "firebase";


export default class LoggedHeader extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <TouchableHighlight onPress={() => this.props.handler('profile')}>
                    <Image
                        style={styles.imageStyle}
                        source={dogTag}
                    />
                </TouchableHighlight >
                <TouchableHighlight onPress={() => this.props.handler('search')}>
                    <Image
                        style={styles.imageStyle}
                        source={search}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => firebase.auth().signOut()}>
                    <Image
                        style={styles.imageStyle}
                        source={logout}
                    />
                </TouchableHighlight >
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 15,
        width: 400,
        marginBottom: 10

    },
    textStyle: {
        color: "#fff",
        fontSize: 45,
        marginRight: 20,
        fontFamily: 'GloriaHallelujah'
    },
    imageStyle: {
        height: 60,
        width: 60
    }
};