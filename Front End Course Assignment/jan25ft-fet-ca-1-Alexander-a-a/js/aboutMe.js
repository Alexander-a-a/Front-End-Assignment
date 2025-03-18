 window.onload = updateAboutMe;
 
 
 
 function updateAboutMe() {
    const aboutMe = document.querySelector(".about");    // Accessing the about class
    const paragraphs = aboutMe.querySelectorAll("p");   // Select all <p> elements inside the .about class

    const paragraph1 = paragraphs[0]; // First <p>
    const paragraph2 = paragraphs[1]; // Second <p>

    paragraph1.innerHTML = "My Cat's name is Chloe"; // Update first <p>
    paragraph2.innerHTML = "And she loves soup"; // Update second <p>

    const name = document.querySelector("h3"); // Select the first <h3> element
    name.innerHTML = "I am Alex, the code master"; // Update the <h3> content

    aboutMe.querySelectorAll("p").forEach(paragraph => {  
        paragraph.addEventListener("click", function () { 
            if (this.style.backgroundColor === "powderblue") { 
                this.style.backgroundColor = ""; // Change back to original color
                this.style.color = ""; // Change back to original text color
            } else {
                this.style.backgroundColor = "powderblue"; // Change background to blue
                this.style.color = "white"; // Change text color to white
            }
        });
    });
}