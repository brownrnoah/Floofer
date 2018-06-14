import React, { Component } from 'react';
import { Platform, Text, View, Button } from 'react-native';
import { Card, Spinner } from "./components/common"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main"
import firebase from "firebase";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
    this.renderContent = this.renderContent.bind(this)
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDlvU1iFS4s3nZemlTlkkYasNMU5Rav0Sk",
      authDomain: "auth-project-7dcea.firebaseapp.com",
      databaseURL: "https://auth-project-7dcea.firebaseio.com",
      projectId: "auth-project-7dcea",
      storageBucket: "auth-project-7dcea.appspot.com",
      messagingSenderId: "864976704043"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Main />
      case false:
        return (
          <View style={styles.viewStyle}>
            <Header />
            <LoginForm />
            <Footer />
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
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  }
};
