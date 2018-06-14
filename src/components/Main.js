import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight} from 'react-native';
import LoggedHeader from "./LoggedHeader"
import bone from "../images/dogBone.png";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import share from "../images/share.png";
import phone from "../images/phone.png";
import { Spinner } from './common/Spinner'
import Profile from './Profile'
import { Call } from 'react-native-openanything';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import api from "../API/api"
import firebase from "firebase"


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'search',
            currentListing: 0,
            // listings: [
            //     { name: 'Pupper', phone: '8015410134', breed: 'Shiba Inu', age: 2, image: 'https://i.pinimg.com/originals/31/5b/33/315b33c84ec4a6b6bb88a8ab09776ea6.jpg' },
            //     { name: 'Floofer', phone: '8015410134', breed: 'American Eskimo', age: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlrRuTjPiyAG75cUwvDtBYlEcQ4UMr4POwzQYNsYfaktG6db2' },
            //     { name: 'Yapper', phone: '8015410134', breed: 'Chihuahua', age: 1, image: 'http://3.bp.blogspot.com/-9SLif8EAHyU/VTmzms2NRiI/AAAAAAAAWJo/CywGMrHg2Sg/s1600/DOG_05_RK0035_13_P.JPG' },
            //     { name: 'Doge', phone: '8015410134', breed: 'Shiba Inu', age: 4, image: 'https://vignette.wikia.nocookie.net/bayonetta/images/0/05/Doge.png/revision/latest?cb=20140807211510' },
            //     { name: 'Woofer', phone: '8015410134', breed: 'Golden Retreiver', age: 3, image: 'https://orig00.deviantart.net/f92f/f/2010/142/5/6/big_nose_by_gwenapple.jpg' }
            // ],
            listings:[]
        }
        this.renderContent = this.renderContent.bind(this)
        this.changeContent = this.changeContent.bind(this)
        this.forward = this.forward.bind(this)
        this.backward = this.backward.bind(this)
    }

    componentDidMount(){
        api.getPets().then((res)=>{
            this.setState({
                listings: res.petfinder.pets.pet
            })
        })
    }

    changeContent(newView) {
        this.setState({
            view: newView
        })
    }

    forward() {
        let num = this.state.currentListing + 1
        if (this.state.currentListing !== this.state.listings.length - 1) {
            this.setState({
                currentListing: num
            })
        }
        else{
            this.setState({
                currentListing:0
            })
        }
        console.log(this.state.currentListing)
    }

    backward() {
        let num = this.state.currentListing - 1
        if (this.state.currentListing !== 0) {
            this.setState({
                currentListing: num
            })
        }
        else{
            this.setState({
                currentListing: this.state.listings.length - 1
            })
        }
        console.log(this.state.currentListing)
    }

    // favorite(id){
    //     firebase.database().ref.favorited('favorited pets').set(id)
    // }

    dogListings() {
        return (
            <View style={{alignItems:'center'}}>
                <View style={styles.imageStyle2}>
                    <ImageBackground
                        style={{}}
                        imageStyle={{borderRadius: 10}}
                        source={{ uri: this.state.listings[this.state.currentListing].media.photos.photo[2].$t}}
                    ><View style={styles.imagetextView}><Text style={styles.imageTextStyle}>{this.state.listings[this.state.currentListing].name.$t},  </Text><Text style={{fontSize: 30,
                        fontWeight: 'bold',
                        color: 'white',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 3 },
                        textShadowRadius: 1}}>{this.state.listings[this.state.currentListing].age.$t}</Text></View>
                        <Text style={styles.subImageTextStyle}>{this.state.listings[this.state.currentListing].breeds.breed.$t}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.footerStyle}>
                    <TouchableHighlight style={styles.circleStyle} onPress={() => this.backward()}>
                        <Image
                            style={styles.imageStyle}
                            source={leftArrow}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.circleStyle} onPress={() => Call(this.state.listings[this.state.currentListing].contact.phone.$t, true)}>
                        <Image
                            style={styles.imageStyle}
                            source={phone}
                        />
                    </TouchableHighlight >
                    <TouchableHighlight style={styles.circleStyle} onPress={() => this.favorite(this.state.listings[this.state.currentListing].id.$t)}>
                        <Image
                            style={styles.imageStyle}
                            source={bone}
                        />
                    </TouchableHighlight>
                    <View style={styles.circleStyle}>
                        <Image
                            style={styles.imageStyle}
                            source={share}
                        />
                    </View>
                    <TouchableHighlight style={styles.circleStyle} onPress={() => this.forward()}>
                        <Image
                            style={styles.imageStyle}
                            source={rightArrow}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    renderContent() {
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80
        };

        switch (this.state.view) {
            case 'search':
                return (
                    <View style={styles.viewStyle}>
                        <LoggedHeader
                            handler={this.changeContent} />
                        <GestureRecognizer
                            onSwipeLeft={() => this.backward()}
                            onSwipeRight={() => this.forward()}
                            config={config}
                        >
                            {this.dogListings()}
                        </GestureRecognizer>
                        {/* <CardStack >
                            <Card>{this.dogListings()}</Card>
                        </CardStack> */}
                    </View >
                );
            case 'profile':
                return (
                    <View style={{ height: 630 }}>
                        <LoggedHeader handler={this.changeContent} />
                        <Profile />
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
            <View style={styles.viewStyle}>
                {this.state.listings.length ? this.renderContent() : <View style={styles.viewStyle}><Spinner /></View>}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: 550,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 15,
        flex: 1

    },
    imageStyle2: {
        width: 390,
        height: 480,
        borderRadius: 15,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        shadowRadius: 2
    },
    circleStyle: {
        borderRadius: 100,
        height: 60,
        width: 60,
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
        justifyContent: 'center'
    },
    footerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
        width: 400,
        alignContent: 'center'
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    imagetextView:{
        marginLeft: 25,
        marginTop: 370,
        display:'flex',
        flexDirection: 'row',
        alignItems:'flex-end'
    },
    imageTextStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 1
    },
    subImageTextStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 35,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 1
    }
};