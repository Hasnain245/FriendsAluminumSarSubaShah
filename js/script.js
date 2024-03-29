// alert("helo");

// --------js for toggle menu-------
var menuitems = document.getElementById("menuitems");

menuitems.style.maxHeight = "0px";

function menutoggle() {
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "89vh";
    }
    else {
        menuitems.style.maxHeight = "0px";
    }
}



// RealTime Database Through Firebase Script 

  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  // import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBRhJezJm0V72DH2xq-KjFD9EAlQIqUo2E",
  //   authDomain: "friendsaluminum-sss.firebaseapp.com",
  //   projectId: "friendsaluminum-sss",
  //   storageBucket: "friendsaluminum-sss.appspot.com",
  //   messagingSenderId: "1013359922230",
  //   appId: "1:1013359922230:web:606cc16c38b16434219c97",
  //   measurementId: "G-969MJDTY62"
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // const db = getDatabase(app);

  // document.getElementById("submit").addEventListener('click', function(e){
  //   e.preventDefault();
  //   set(ref(db, 'user/' + document.getElementById("username").value),{

  //       username: document.getElementById("username").value,
  //       email: document.getElementById("email").value,
  //       subject: document.getElementById("subject").value,
  //       textarea: document.getElementById("textarea").value

  //   });
  //   alert("Submitted Successfully  !");
  // })

 