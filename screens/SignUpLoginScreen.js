 import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends React.Component{

    constructor() {
        super();
        this.state={
            emailId:'',
            password:''
          }
    }
    
    userSignUp = (emailId, password) =>{
        
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then((response)=>{
            return  Alert.alert('User Added Successfully');
          })
      }
     
    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return  Alert.alert('Logged in Successfully');
        })
    }

    render(){
        return(
            <View style = {{flex:1 }}>
                <View style = {{flex:1, justifyContent: 'center', alignItems: 'center', paddingTop: 240}}>
                    <TextInput 
                        style = {styles.EmailIdTextInput}
                        placeholder = "Email Id"
                        keyboardType ='email-address'
                        onChangeText={(text)=>{
                            this.setState({
                              emailId: text
                            })
                        }}
                    />

                    <TextInput
                        style = {styles.PasswordTextInput}
                        placeholder = "Password"
                        secureTextEntry = {true}
                        onChangeText={(text)=>{
                            this.setState({
                              password: text
                            })
                          }}
                    />

                    <TouchableOpacity style = {styles.LoginButton}
                        onPress = {()=>{
                            this.userLogin(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style = {styles.LoginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.SignUpButton}
                        onPress = {()=>{
                            this.userSignUp(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style = {styles.SignUpButtonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    EmailIdTextInput: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
    },
    PasswordTextInput: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
    },
    LoginButton: {
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30,
        backgroundColor: "#ff9800",
    },

    LoginButtonText: {
        color:'#ffff',
        fontWeight:'2000',
        fontSize:20
    },

    SignUpButton: {
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30,
        backgroundColor: "#ff9800",
    },

    SignUpButtonText: {
        color:'#ffff',
        fontWeight:'2000',
        fontSize:20
    }
})


