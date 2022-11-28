// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('We have a user logged in: ' + user.email);
  } else {
    console.log('No user logged in');
    window.location.href = 'index.html';
  }
});

$('#signout').click(function () {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Signout successful
      window.location.href = 'index.html';
    })
    .catch((error) => {
      // An error occured
      console.log(error.message);
    });
});

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('form').serializeArray();
  var data = {};

  inputdata.forEach((entry) => {
    console.log(entry);
    data[entry.name] = entry.value;
  });
  console.log(data);
  firebase.firestore().collection('surveydata').add(data);

  /* clear the entry */
  $('form')[0].reset();
});

// update the result in table

firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {
    var n1 = 0; // How many A
    var n2 = 0; // How many B
    var n3 = 0; // How many C
    var n4 = 0; // How many D
    var n5 = 0; // How many E
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().choice);
      var s = doc.data().choice;
      switch (s) {
        case 'A':
          n1++;
          $('#ans1').text(n1);
          break;
        case 'B':
          n2++;
          $('#ans2').text(n2);
          break;
        case 'C':
          n3++;
          $('#ans3').text(n3);
          break;
        case 'D':
          n4++;
          $('#ans4').text(n4);
          break;
        case 'E':
          n5++;
          $('#ans5').text(n5);
          break;
      }
      console.log(doc.data().comm);
    });
  });
