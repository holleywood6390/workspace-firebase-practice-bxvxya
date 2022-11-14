/* Change the configuration */

var firebaseConfig = {
  apiKey: "AIzaSyBi1bOI4QisA0--lADD75G4UKqVTOxGVAU",
  authDomain: "grocerylist2022-1d90c.firebaseapp.com",
  projectId: "grocerylist2022-1d90c",
  storageBucket: "grocerylist2022-1d90c.appspot.com",
  messagingSenderId: "894021844553",
  appId: "1:894021844553:web:f1bfb94a1eb32c7d930998",
  measurementId: "G-YTQY6KQ5JN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data={}; // data sent to the database

  console.log(inputdata[2]);
  console.log(inputdata[2].name);
  console.log(inputdata[2].value);
  /* save the data to database */
  inputdata.forEach((entry)=>{
    console.log(entry);
    data[entry.name]=entry.value;
  });
  console.log(data);
  firebase.firestore().collection("hotel").add(data);

  /* clear the entry */
  $('form')[0].reset();
});


/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */


firebase
  .firestore()
  .collection('hotel')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });

