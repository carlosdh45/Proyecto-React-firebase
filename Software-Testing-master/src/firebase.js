import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

  var firebaseConfig = {
    apiKey: "AIzaSyCnKKsoClJTp_YVh7FJne2W4QH8i2Vemd4",
    authDomain: "react-crud-fc782.firebaseapp.com",
    databaseURL: "https://react-crud-fc782.firebaseio.com",
    projectId: "react-crud-fc782",
    storageBucket: "react-crud-fc782.appspot.com",
    messagingSenderId: "80388530816",
    appId: "1:80388530816:web:0244b2064dab5d5e72fc65"
  };
  const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ], signInSuccessUrl: '/',
};
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();
 export const auth = firebase.auth();

 export const startUi = (elementId) => {
  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start(elementId, uiConfig);
};