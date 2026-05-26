
console.log("Hello from JS");

var users = [
    {"name" : "John", "gender" : "Male", "img" : "/images/john.png"},
    {"name" : "Jane", "gender" : "Female", "img" : "/images/jane.jpg"}
];

var currentUserIndex = 0;

function toggleCard(){

    currentUserIndex = (currentUserIndex + 1) % 2;

    var user = users[currentUserIndex];

    // DOM Manipulation
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}