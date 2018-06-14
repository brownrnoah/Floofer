import React, { Component } from "react";
import {Card, CardSection, Input, Spinner, Button } from "./common";
import {Text} from "react-native";
import firebase from "firebase";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        }
    }

    onButtonPress(){
        const {email, password} = this.state;
        this.setState({error: "", loading: true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        })
    }

    onLoginFail(){
        this.setState({
            loading: false,
            password: '',
            error: "You Done Goofed!"
        })
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        }
        else{
            return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        placeholder="user@email.com"
                        secure={undefined}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        value={this.state.password}
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        placeholder="password"
                        secure={true}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>{this.state.error}</Text>
                <CardSection style={styles.viewStyle}>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center'
    }
}

export default LoginForm