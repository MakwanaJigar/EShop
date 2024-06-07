import React from 'react';
import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({

    MainView: {
        width: "100%", height: "100%", backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: 'center'
    },
    ScrollView: {
        width: "90%", marginTop: "15%"
    },

    // .....TITLE SECTION

    TitleView: {
        width: "100%"
    },
    MainTitle: {
        fontSize: 28, fontWeight: "bold", color: "#000"
    },
    SpanTitle: {
        fontSize: 16, color: "gray"
    },

    // ...TEXT FIELDS..

    MainTextView: {
        marginTop: "10%", rowGap: 10
    },
    UserLabel: {
        color: "#000", fontWeight: "bold", fontSize: 18
    },
    UserInput: {
        width: '100%', height: 50, borderRadius: 10, backgroundColor: '#E5E4E2', marginTop: "2%",
        color: "#000", padding: 15
    },


    EmailLabel: {
        color: "#000", fontWeight: "bold", fontSize: 18
    },
    EmailInput: {
        width: '100%', height: 50, borderRadius: 10, backgroundColor: '#E5E4E2', marginTop: "2%",
        color: "#000", padding: 15
    },


    PasswordLabel: {
        color: "#000", fontWeight: "bold", fontSize: 18
    },
    PasswordView: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#E5E4E2',
        marginTop: "2%",
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    PasswordInput: {
        flex: 1,
        width: "95%",
        color: "#000",
        padding: 15
    },
    PasswordTouch: {
        marginRight: 20
    },
    EyeImage: {
        width: 20, height: 15
    },



    // ....BUTTONS SECTION.....

    MainButtonView: {
        alignItems: "center", justifyContent: 'center', width: "95%", rowGap: 25
    },

    CreateMainView: {
        width: "100%"
    },
    CreateTouch: {
        width: '100%',
        height: 55,
        borderRadius: 30,
        backgroundColor: '#E5E4E2',
        marginTop: "20%",
        backgroundColor: "#6495ED",
        alignItems: 'center',
        justifyContent: 'center'
    },
    CreateText: {
        color: '#fff'
    },


    // OtherMethod
    OtherMethod: {
        color: "gray", textAlign: "center"
    },

    // ...Gpay
    GpayTouch: {
        width: '100%', height: 55,
        borderRadius: 30,
        backgroundColor: '#FFF',
        backgroundColor: "#FFF", alignItems: 'center',
        justifyContent: 'center', flexDirection: 'row',
        columnGap: 20
    },
    GpayIMG: {
        width: 30, height: 30
    },
    GpayText: {
        color: '#000'
    },


    // ...FaceBook
    FaceBookTouch: {
        width: '100%', height: 55,
        borderRadius: 30,
        backgroundColor: '#FFF',
        backgroundColor: "#FFF", alignItems: 'center',
        justifyContent: 'center', flexDirection: 'row',
        columnGap: 20
    },
    FaceBookIMG: {
        width: 30, height: 30
    },
    FacebookText: {
        color: '#000'
    }

})


export default LoginStyle;