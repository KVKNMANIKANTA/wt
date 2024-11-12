// Handle Sign-Up
function signup(event) {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Store user details in localStorage (or use a database in real applications)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Sign-up successful! You can now log in.");
    toggleSignup();
}

// Handle Login
function login(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve stored user details from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if the email and password match
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        showTimetableSection();
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Toggle between login and signup forms
function toggleSignup() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    }
}

// Show Timetable Section after successful login
function showTimetableSection() {
    document.getElementById("authFormContainer").style.display = "none";
    document.getElementById("authNav").style.display = "block";
    document.getElementById("timetableSection").style.display = "block";
    
    // Populate the dropdown dynamically with section names
    const selectOption = document.getElementById("selectOption");
    selectOption.innerHTML = ''; // Clear existing options
    Object.keys(timetableData.sections).forEach(section => {
        const option = document.createElement("option");
        option.value = section;
        option.textContent = section;
        selectOption.appendChild(option);
    });
}

// Logout Function
function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    document.getElementById("authNav").style.display = "none";
    document.getElementById("timetableSection").style.display = "none";
    document.getElementById("authFormContainer").style.display = "flex";
}

// Timetable Data (Real Data Example)
const timetableData = {
    sections: {
        "Section A": generateTimetable("Math", "Room 1", "Teacher 1"),
        "Section B": generateTimetable("Science", "Room 2", "Teacher 2"),
        "Section C": generateTimetable("English", "Room 3", "Teacher 3"),
        "Section D": generateTimetable("History", "Room 4", "Teacher 4"),
        "Section E": generateTimetable("Geography", "Room 5", "Teacher 5"),
        "Section F": generateTimetable("Biology", "Room 6", "Teacher 6")
    }
};

// Function to generate timetable for sections
function generateTimetable(subject, room, teacher) {
    return [
        ["Monday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Tuesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Wednesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Thursday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Friday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Saturday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`]
    ];
}

// Function to populate the timetable table for sections
function populateTimetable(sectionName) {
    const timetable = timetableData.sections[sectionName];
    const timetableTable = document.getElementById("timetable");
    timetableTable.innerHTML = ""; // Clear the existing table content

    timetable.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        timetableTable.appendChild(tr);
    });
}

// Function to load the timetable based on selection
function loadTimetable() {
    const sectionName = document.getElementById("selectOption").value;
    if (sectionName) {
        populateTimetable(sectionName);
    }
}
