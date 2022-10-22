const firebaseConfig = {
  apiKey: "AIzaSyCwUpgOJBJeumz_YfEYUG_DU-e3wGvdwVI",
  authDomain: "nits-hacks-47831.firebaseapp.com",
  projectId: "nits-hacks-47831",
  storageBucket: "nits-hacks-47831.appspot.com",
  messagingSenderId: "412727548969",
  appId: "1:412727548969:web:0623a9da26c83ece2c9038",
  measurementId: "G-3BR8ZJR13P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var waste = getElementVal("waste");
  var ident = getElementVal("ident");
  var weight = getElementVal("weight");
  var location = getElementVal("location");
  saveMessages(waste, ident, weight, location);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (waste, ident, weight, location) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    waste: waste, 
    ident: ident, 
    weight: weight, 
    location: location,
});
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};