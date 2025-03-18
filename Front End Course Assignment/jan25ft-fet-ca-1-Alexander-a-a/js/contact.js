const letsChatBtn = document.querySelector("#letsChatBtn");

letsChatBtn.addEventListener("click", contactMe);

function contactMe() {
  // Prompt user for phone number
  let telephone_number = prompt("Please enter your phone number: ");

  // Validate phone number to ensure its numbers only
  while (
    !/^[0-9\s\-\+\(\)]+$/.test(telephone_number) ||
    telephone_number === ""
  ) {
    alert("You did not enter a valid number!");
    telephone_number = prompt(
      "Please enter your phone number (numbers only): "
    );

    if (telephone_number === null) {
      alert("You cancelled the phone number input.");
      return;
    }
  }

  // Prompt user for email
  let email = prompt("Please enter your email: ");

  // Validate email format
  while (!/^[^@]+@[^@]+\.[^@]+$/.test(email) || email === "") {
    alert(
      "Please enter a valid email address (it should contain '@' and a '.')!"
    );
    email = prompt("Please enter your email: ");

    if (email === null) {
      alert("You cancelled the email input.");
      return;
    }
  }

  // Prompt user for address
  let address = prompt("Please enter your address: ");

  if (address === null || address.trim() === "") {
    alert("You cancelled the address input.");
    return;
  }

  $("#contactDetails h5").first().next("p").text(telephone_number); // Update phone number
  $("#contactDetails > div:nth-child(2) p").text(email); // Update email
  $("#contactDetails p:last").text(address); // Update address

  console.log(
    `From: ${email}\nContact: ${telephone_number}\nAddress: ${address}`
  );
}
