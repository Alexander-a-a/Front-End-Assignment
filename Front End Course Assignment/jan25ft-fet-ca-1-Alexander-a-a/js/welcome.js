$("#liveToastBtn").click(function () { // Showes the toast when user clicks the button
  $("#liveToast").toast("show");
});



$("#boredBtn").click(function() {
  $.get("http://boredapi.restapi.co.za/", function(data) { // finds a random activity when the user clicks the button
    console.log(data)
  });
});