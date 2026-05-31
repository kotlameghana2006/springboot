// ==========================================
// 1. TOGGLE PAGE ENGINE (John <-> Jane)
// ==========================================
let currentToggleProfile = 'jane';

function handleToggle() {
    const imgElement = document.getElementById('toggle-pic');
    const nameElement = document.getElementById('toggle-name');
    const genderElement = document.getElementById('toggle-gender');

    if (currentToggleProfile === 'jane') {
        imgElement.src = '/images/john.png';
        nameElement.innerText = 'John Doe';
        genderElement.innerText = 'Male';
        currentToggleProfile = 'john';
    } else {
        imgElement.src = '/images/jane.jpg';
        nameElement.innerText = 'Jane Doe';
        genderElement.innerText = 'Female';
        currentToggleProfile = 'jane';
    }
}

// ==========================================
// 2. RANDOM USER INTERACTIVE LOCAL DATA POOL
// ==========================================
const userPool = [
    { name: "Ms Ingrid Sachse", gender: "female", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "John Doe", gender: "Male", img: "/images/john.png" },
    { name: "Mr Alex Ferguson", gender: "male", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Jane Doe", gender: "Female", img: "/images/jane.jpg" }
];

let currentUserIndex = 0;

function nextRandomUser() {
    // Loop through the data array smoothly
    currentUserIndex = (currentUserIndex + 1) % userPool.length;
    const nextUser = userPool[currentUserIndex];

    // Find and update the view items instantly
    document.getElementById('ru-pic').src = nextUser.img;
    document.getElementById('ru-name').innerText = nextUser.name;
    document.getElementById('ru-gender').innerText = nextUser.gender;
}

// ==========================================
// 3. MYRANDOMUSER CONTROLLER
// ==========================================
let myUserIndex = 0;

function nextMyRandomUser() {
    myUserIndex = (myUserIndex + 1) % userPool.length;
    const nextUser = userPool[myUserIndex];

    document.getElementById('mru-pic').src = nextUser.img;
    document.getElementById('mru-name').innerText = nextUser.name;
    document.getElementById('mru-gender').innerText = nextUser.gender;
}

// ==========================================
// 4. GITPULSE LOGIC
// ==========================================
function searchGitHub() {
    const value = document.getElementById('gh-input').value.trim();
    if (!value) {
        alert("Please enter a GitHub username!");
        return;
    }
    alert("Analyzing developer portfolio statistics for: " + value);
}