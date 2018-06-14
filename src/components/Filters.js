import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Spinner } from "./common";

export default class Filters extends Component {


    render() {
        return (
            <View>
                <Card>
                    <Text>Search Radius</Text>
                </Card>
                <Card>
                    <Text>Pet's Age</Text>
                </Card>
                <Card>
                    <Text>Breeds</Text>
                </Card>
                <Card>
                    <Text>Accociated Fees</Text>
                </Card>
                <Card>
                    <Text>Listing Type</Text>
                </Card>
                <Card>
                    <Text>Animal Type</Text>
                </Card>
                <Card>
                    <Text>Pet's Size</Text>
                </Card>
                <Card>
                    <Text>Sex of Pet</Text>
                </Card>
            </View>
        );
    }
}