
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyBhpTHkZZImK4D_NoAewHY6Tb-7nOqnVp8",
    authDomain: "final-project-recording-6e996.firebaseapp.com",
    databaseURL: "https://final-project-recording-6e996.firebaseio.com",
    storageBucket: "final-project-recording-6e996.appspot.com",
    messagingSenderId: "178361755097"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};