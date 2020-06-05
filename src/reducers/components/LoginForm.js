import React, { Component } from 'react';
//import { View, Text } from "react-native";
import {Card, CardSection, Input, Spinner, Button} from './common'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { View, Text, StyleSheet } from 'react-native';
//import {emailChanged} from '../actions/index.js'

class LoginForm extends Component{
    onEmailChange(text){
            this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password})
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    renderError(){
        if(this.props.error){
            return(
            <View style={{backgroundColor:'white'}}>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </View>
            )}
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                
                {this.renderError()}
                

                <CardSection>
                  {this.renderButton()}
                </CardSection>
              
            </Card>
        )
    }
}
const styles=StyleSheet.create({
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
})
const mapStateToProps = ({auth}) => {
    const{ email, password, error, loading}= auth
    return{email, password, error, loading}
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);