var firebaseConfig = {
  apiKey: 'AIzaSyBi1bOI4QisA0--lADD75G4UKqVTOxGVAU',
  authDomain: 'grocerylist2022-1d90c.firebaseapp.com',
  projectId: 'grocerylist2022-1d90c',
  storageBucket: 'grocerylist2022-1d90c.appspot.com',
  messagingSenderId: '894021844553',
  appId: '1:894021844553:web:f1bfb94a1eb32c7d930998',
  measurementId: 'G-YTQY6KQ5JN',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email = $('#email').val();
  var password = $('#password').val();


  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
    //firebase.firestore().collection('signup').add()
});
