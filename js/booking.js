function bookTrip() {
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;

  firebase.database().ref("bookings").push({
    destination: destination,
    travelDate: date
  });

  alert("Booking saved");
}
