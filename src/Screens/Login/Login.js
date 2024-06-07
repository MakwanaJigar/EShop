import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import LoginStyle from './Style';

import OpenEye from "../../Assets/Login/eye.png"
import CloseEye from "../../Assets/Login/hide.png"

import Gpay from "../../Assets/Login/google.png"
import Facebook from "../../Assets/Login/facebook.png"
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [securePassword, setSecurePassword] = useState(!securePassword);

    const ShowPW = () => {
        setIsPasswordVisible(!isPasswordVisible);
        setSecurePassword(!securePassword);
    }


    const navigation = useNavigation()

    return (
        <View style={LoginStyle.MainView}>
            <ScrollView style={LoginStyle.ScrollView}>

                {/* ........TITLE TEXT........ */}
                <View style={LoginStyle.TitleView}>
                    <Text style={LoginStyle.MainTitle}>Create Account</Text>
                    <Text style={LoginStyle.SpanTitle}>Start learning by creating an account</Text>
                </View>

                {/* ............INPUT FIELDS........ */}
                <View style={LoginStyle.MainTextView}>

                    {/* USERNAME */}
                    <View>
                        <Text style={LoginStyle.UserLabel}>Username</Text>
                        <TextInput placeholder='Create your username' placeholderTextColor="gray" style={LoginStyle.UserInput} />
                    </View>

                    {/* Email or Phone Number */}
                    <View>
                        <Text style={LoginStyle.EmailLabel}>Email or Phone Number</Text>
                        <TextInput placeholder='Create your username' placeholderTextColor="gray" style={LoginStyle.EmailInput} />
                    </View>

                    {/* Password */}
                    <View>
                        <Text style={LoginStyle.PasswordLabel}>Password</Text>

                        <View style={LoginStyle.PasswordView}>
                            <TextInput placeholder='Create your Password' placeholderTextColor="gray" secureTextEntry={!securePassword} style={LoginStyle.PasswordInput} />

                            <TouchableOpacity style={LoginStyle.PasswordTouch} onPress={ShowPW}>
                                {
                                    isPasswordVisible ?
                                        <Image source={CloseEye} style={LoginStyle.EyeImage} /> :
                                        <Image source={OpenEye} style={LoginStyle.EyeImage} />
                                }
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                {/* ...........................BUTTONS................................... */}
                <View style={LoginStyle.MainButtonView}>

                    {/* ..CREATE BUTTON... */}
                <View style={LoginStyle.CreateMainView}>
                        <TouchableOpacity style={LoginStyle.CreateTouch} onPress={() => navigation.navigate("Verification")}>
                            <Text style={LoginStyle.CreateText}>
                                Create Account
                            </Text>

                        </TouchableOpacity>
                </View>    


                <Text style={LoginStyle.OtherMethod}>Or using other method </Text>

                {/* ..GOOGLE ACCOUNT... */}

               
                        <TouchableOpacity style={LoginStyle.GpayTouch}>
                            <Image source={Gpay} style={LoginStyle.GpayIMG}/>
                            <Text style={LoginStyle.GpayText}>
                                Sign Up with Google
                            </Text>

                        </TouchableOpacity>
               
                {/* .....FACEBOOK ACCOUNT... */}
                   
                <TouchableOpacity style={LoginStyle.FaceBookTouch}>
                            <Image source={Facebook} style={LoginStyle.FaceBookIMG}/>
                            <Text style={LoginStyle.FacebookText}>
                                Sign Up with Facebook
                            </Text>

                        </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    );
}

export default Login;
