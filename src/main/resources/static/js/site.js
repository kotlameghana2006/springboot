// ==========================================
// 1. TOGGLE PAGE ENGINE (John <-> Jane)
// ==========================================
console.log("Hello from JS");

var users = [
    {"name" : "John", "gender" : "Male", "img" : "images/john.png"},
    {"name" : "Jane", "gender" : "Female", "img" : "images/jane.jpg"}
];

var currentUserIndex = 0;

function toggleCard(){
    currentUserIndex =(currentUserIndex + 1) % 2;
    var user = users[currentUserIndex];

    // DOM Manipulation
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}    


// ==========================================
// 2. RANDOM USER INTERACTIVE POOL (LIVE API)
// ==========================================
async function nextRandomUser() {
    try {
        // Fetch data directly from the live, infinite Random User Generator API
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Dynamically update the HTML elements with live data fields
        document.getElementById('ru-pic').src = user.picture.large;
        document.getElementById('ru-name').innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById('ru-gender').innerText = user.gender;

    } catch (error) {
        console.error("Error communicating with RandomUser service:", error);
    }
}

// ==========================================
// 3. MYRANDOMUSER CONTROLLER (LIVE API)
// ==========================================
async function nextMyRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        document.getElementById('mru-pic').src = user.picture.large;
        document.getElementById('mru-name').innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById('mru-gender').innerText = user.gender;

    } catch (error) {
        console.error("Error communicating with MyRandomUser service:", error);
    }
}

// ==========================================
// 4. GITPULSE LOGIC (LIVE GITHUB DATA LOOKUP)
// ==========================================
async function searchGitHub() {
    const value = document.getElementById('gh-input').value.trim();
    if (!value) {
        alert("Please enter a GitHub username!");
        return;
    }

    try {
        // Hits the official GitHub API to fetch real public user info
        const response = await fetch(`https://api.github.com/users/${value}`);
        if (!response.ok) {
            alert("GitHub User not found!");
            return;
        }
        const data = await response.json();
        
        alert(`Developer Account Found!\n\nName: ${data.name || data.login}\nPublic Repos: ${data.public_repos}\nFollowers: ${data.followers}`);
        
    } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
    }
}