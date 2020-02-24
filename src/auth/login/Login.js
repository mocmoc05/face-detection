import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { styleLogin } from './style';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        }
        this.goToRegister = this.goToRegister.bind(this)
        this.goToForgotPassword = this.goToForgotPassword.bind(this)
        this.login = this.login.bind(this)
    }

    goToRegister() {
        this.props.navigation.navigate('Register')
    }

    goToForgotPassword() {
        this.props.navigation.navigate('ForgotPassword')
    }

    login() {
        this.props.navigation.navigate('Home')
    }


    render() {
        console.log(this.props);
        return (
            <ImageBackground
                source={require('../../assets/img/background_login.png')}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styleLogin.container}>
                    <Text style={styleLogin.titleLogin}>Login</Text>
                    <View style={styleLogin.form}>
                        <TextInput
                            style={styleLogin.input}
                            placeholder={'Email'}
                            placeholderTextColor={'#F2BB77'}
                            onChangeText={email => this.setState({email})}
                            autoCapitalize={'none'}
                        />
                        <TextInput
                            style={styleLogin.input}
                            placeholder={'Password'}
                            placeholderTextColor={'#F2BB77'}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})}
                        />
                        <TouchableOpacity onPress={this.login} style={{backgroundColor: '#F2BB77', borderRadius: 30}}>
                            {
                                this.state.loading ?
                                    <View style={{padding: 8}}>
                                        <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'small'} />
                                    </View>
                                    :
                                    <Text style={styleLogin.buttonText}>
                                        Login
                                    </Text>
                            }
                        </TouchableOpacity>
                        <Text style={styleLogin.textForgot} onPress={this.goToForgotPassword}>Forgot password?</Text>
                        <View flexDirection={'row'} alignItems='center' marginTop={16}>
                            <Text style={styleLogin.textHaveAccount}> Do not have an account?? </Text>
                            <Text
                                style={[styleLogin.textForgot, { marginTop: 0 }]}
                                onPress={this.goToRegister}
                            >
                                Registration
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}
