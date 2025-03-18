const data = [
    { id: 1, icon: "bi-heart", description: "Cat", info: "I love my cat Chloe", image: "bi-heart-fill" },
    { id: 2, icon: "bi-controller", description: "Gaming", info: "I like Baldur's Gate and Elden Ring", image: "bi-joystick" },
    { id: 3, icon: "bi-hammer", description: "Warhammer", info: "My favorite chapter is the Grey Knights", image: "bi-rocket" },
    { id: 4, icon: "bi-eyeglasses", description: "Manga", info: "My Favorites are Zom 100 and Demon Slayer", image: "bi-book" },
    { id: 5, icon: "bi-tv", description: "Anime", info: "My favorites are Solo Leveling and My Hero Academia", image: "bi-tv-fill" }
];

const tbody = document.querySelector("#personalTable tbody");

data.forEach(item => {                  // Looping trough each element in the data array and adding the info into table data
    tbody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td><i class="bi ${item.icon}"></i></td>
            <td>${item.description}</td>                
            <td>${item.info}</td>
            <td><i class="bi ${item.image}"></i></td>
        </tr>
    `;
});



$("#personalTable tbody td:nth-child(5) i").hover( // Adding a hover function for the icons in the image column
    function() {
        $(this).css("color", "red");
    },
    function () {
        $(this).css("color", "");
    }
);



$(function() {
    $("#personalTable tbody td:nth-child(5) i").click(function() {             // Chooses the i in the fifth column an show the clicked icon on a new page 
        const iconClass = $(this).attr("class"); 

        const newWindow = window.open("", "_blank");

        newWindow.document.write( `
            <html>
                <head>
                    <title>Icon Display</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
                </head>
                <body style="text-align: center; padding top: 20px;">
                    <h3>Icon</h3>
                    <i class="bi ${iconClass}" style="font-size: 100px;"></i>
                </body>
            </html>
        `);
        newWindow.document.close();

    })
});





$("#personalTable tbody tr:nth-child(odd)").hover(              // changes the odd rows to the color blue when hovering over them
    function() {
        $(this).css("color", "blue");
    },
    function() {
        $(this).css("color", "");
    }
);


