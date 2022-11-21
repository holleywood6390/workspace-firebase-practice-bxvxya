var firebaseConfig = {
  apiKey: "AIzaSyBi1bOI4QisA0--lADD75G4UKqVTOxGVAU",
  authDomain: "grocerylist2022-1d90c.firebaseapp.com",
  projectId: "grocerylist2022-1d90c",
  storageBucket: "grocerylist2022-1d90c.appspot.com",
  messagingSenderId: "894021844553",
  appId: "1:894021844553:web:f1bfb94a1eb32c7d930998",
  measurementId: "G-YTQY6KQ5JN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();
  console.log("email: " + email + " password: " + password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href="Surveyresult.html";

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
$('#google').click(function(){

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth().getAuth();
firebase.auth().signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});