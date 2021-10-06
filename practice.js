var firebaseConfig = {
    apiKey: "AIzaSyBDSI6PrXYFYWP60UnaDgYgcxlNvOu_48o",
    authDomain: "kwitter-87d8d.firebaseapp.com",
    databaseURL: "https://kwitter-87d8d-default-rtdb.firebaseio.com/",
    projectId: "kwitter-87d8d",
    storageBucket: "kwitter-87d8d.appspot.com",
    messagingSenderId: "893414532257",
    appId: "1:893414532257:web:2d66e4972d0dd84ed97ce0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
 user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
     purpose : "adding User"
 });
}