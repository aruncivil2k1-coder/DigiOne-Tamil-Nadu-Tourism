function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registration successful");
      window.location.href = "login.html";
    })
    .catch(error => alert(error.message));
}

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful");
      window.location.href = "booking.html";
    })
    .catch(error => alert(error.message));
}
