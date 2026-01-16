function submitReview() {
  const place = document.getElementById("place").value;
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;

  firebase.database().ref("reviews").push({
    place: place,
    rating: rating,
    review: review
  });

  alert("Review submitted");
}
