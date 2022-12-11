import axios from 'axios';
import { Alert } from 'react-native';
import { API_ENDPOINT_URL } from '../../../config/env';
// import { https } from 'https';

// const https = require('https');

// const API_KEY = `AIzaSyBqHqwmIGQpz7hJ4G9HyJOGG-0kWDByHWY`;
// import { fetch } from 'react-native-ssl-pinning';

/***
 *
 * @param mode signup / signin
 * @param email
 * @param password
 */
async function authenticate(mode, username, password) {
    // const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    // const httpsAgent = new https.Agent({
    //     cert: process.env.SSL_CRT_FILE,
    //     key: process.env.SSL_KEY_FILE,
    //    });
    const url = `${API_ENDPOINT_URL}/account/login`

    console.log("BEFORE!!!!@@@");
    ;
    try {

        let response = await fetch('https://10.97.7.116:8000/account/login', {
            // let response = await fetch('https://wikipedia.org/', {
            // let response = await fetch('http://10.97.7.116:4443/account/login', {
            // let response = await fetch('https://172.18.144.1:3000', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'admin123',
            })
        })
        console.log("END")
        console.log(response)
        let json = await response.json();
        Alert.alert(json['firstName'])
        console.log(json)

    } catch (e) {
        console.log("ERROR IN AXIOS")
        console.log(e);
        Alert.alert('ERROR IN AXIOS');
    }

    // try {
    //     const r = await fetch(url, {
    //         method: "POST",
    //         pkPinning: true,
    //         body: {
    //             username,
    //             password,
    //         },
    //         // sslPinning: {
    //         //     certs: ["cert1"] // your certificates name (without extension), for example cert1.cer, cert2.cer
    //         // },
    //         // headers: {
    //         //     Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
    //         // }
    //     });
    // } catch (err) {
    //     console.log(err)
    // }

    // console.log(r);
    // console.log(response.data)
    console.log("**************")
    // console.log(r)
    console.log("**************")
    // const token = response.data.idToken;
    return 'AAA';
}

export async function createUser(username, password) {
    return authenticate('signUp', username, password);
}

export async function login(username, password) {
    return authenticate('signInWithPassword', username, password);
}