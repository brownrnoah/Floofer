import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Card, CardSection, Spinner } from "./common";
import filters from "../images/interface.png";
import settings from "../images/settings.png";
import Filters from "./Filters"

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'profile'
        }
        this.renderContent = this.renderContent.bind(this)
        this.changeContent = this.changeContent.bind(this)
    }

    componentWillMount(){
        this.setState({
            view: 'profile'
        })
    }

    changeContent(newView) {
        this.setState({
            view: newView
        })
    }

    renderContent() {
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80
        };

        switch (this.state.view) {
            case 'profile':
                return (
                    <View >
                        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: 'black', fontSize: 30 }}>Welcome Pet Lover!</Text>
                            <Text style={styles.textStyle}>Location: Provo</Text>
                            <Text style={styles.textStyle}>User Type: Seeking</Text>
                            <Text style={styles.textStyle}>Phone: xxx-xxx-xxxx</Text>
                        </Card>
                        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 100, marginTop: 40 }}>
                                <View style={{ marginRight: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableHighlight onPress={()=> this.changeContent('filters')} >
                                    <Image
                                        style={styles.imageStyle}
                                        source={filters}
                                    />
                                    </TouchableHighlight>
                                    <Text style={{ color: 'black', fontSize: 20 }}>Filters</Text>
                                </View>
                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={settings}
                                    />
                                    <Text style={{ color: 'black', fontSize: 20 }}>Settings</Text>
                                </View>
                            </View>
                            <Text style={{ color: 'black', fontSize: 30 }}>Search Preferences</Text>
                            <Text style={styles.textStyle}>Search Radius: 10 miles</Text>
                            <Text style={styles.textStyle}>Age Range: 0 - 3</Text>
                            <Text style={styles.textStyle}>Breed(s): Poodle, Corgi, Shiba Inu</Text>
                            <Text style={styles.textStyle}>Shelter(s): Human Society</Text>
                            <Text style={styles.textStyle}>Listing Fees: Free</Text>
                            <Text style={styles.textStyle}>Listing Type: Adoptions</Text>
                        </Card>
                        <Text ></Text>
                    </View>
                );
            case 'filters':
                return (
                    <View>
                        <TouchableHighlight onPress={()=> this.changeContent('profile')}><Text>Go Back</Text></TouchableHighlight>
                        <Filters />
                    </View>
                )
            default:
                return (
                    <View style={styles.viewStyle}>
                        <Spinner size="large" />
                    </View>
                )
        }
    }

    render() {
        return (
            this.renderContent()
            // <View >
            //     <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            //         <Text style={{ color: 'black', fontSize: 30 }}>Welcome Pet Lover!</Text>
            //         <Text style={styles.textStyle}>Location: Provo</Text>
            //         <Text style={styles.textStyle}>User Type: Seeking</Text>
            //         <Text style={styles.textStyle}>Phone: xxx-xxx-xxxx</Text>
            //     </Card>
            //     <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            //         <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 100, marginTop: 40 }}>
            //             <View style={{ marginRight: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            //                 <Image
            //                     style={styles.imageStyle}
            //                     source={filters}
            //                 />
            //                 <Text style={{ color: 'black', fontSize: 20 }}>Filters</Text>
            //             </View>
            //             <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            //                 <Image
            //                     style={styles.imageStyle}
            //                     source={settings}
            //                 />
            //                 <Text style={{ color: 'black', fontSize: 20 }}>Settings</Text>
            //             </View>
            //         </View>
            //         <Text style={{ color: 'black', fontSize: 30 }}>Search Preferences</Text>
            //         <Text style={styles.textStyle}>Search Radius: 10 miles</Text>
            //         <Text style={styles.textStyle}>Age Range: 0 - 3</Text>
            //         <Text style={styles.textStyle}>Breed(s): Poodle, Corgi, Shiba Inu</Text>
            //         <Text style={styles.textStyle}>Shelter(s): Human Society</Text>
            //         <Text style={styles.textStyle}>Listing Fees: Free</Text>
            //         <Text style={styles.textStyle}>Listing Type: Adoptions</Text>
            //     </Card>
            //     <Text ></Text>
            // </View>
        );
    }
}

const styles = {
    textStyle: {
        color: "black",
        fontSize: 15
    },
    imageStyle: {
        height: 60,
        width: 60
    },
    circleStyle: {
        borderRadius: 100,
        height: 90,
        width: 90,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40
    }
};