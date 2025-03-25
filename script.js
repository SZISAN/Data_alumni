// Sample alumni data (5 users)
const alumniData = [
    {
        name: "Alice Johnson",
        department: "Biotechnology",
        graduationYear: "2018",
        email: "alice@example.com",
        linkedin: "https://linkedin.com/in/alicejohnson"
    },
    {
        name: "Michael Smith",
        department: "Environmental Science",
        graduationYear: "2020",
        email: "michael@example.com",
        linkedin: "https://linkedin.com/in/michaelsmith"
    },
    {
        name: "Sarah Lee",
        department: "Food Technology",
        graduationYear: "2016",
        email: "sarah@example.com",
        linkedin: "https://linkedin.com/in/sarahlee"
    },
    {
        name: "David Brown",
        department: "Nutrition Science",
        graduationYear: "2019",
        email: "david@example.com",
        linkedin: "https://linkedin.com/in/davidbrown"
    },
    {
        name: "Emma White",
        department: "Agriculture",
        graduationYear: "2021",
        email: "emma@example.com",
        linkedin: "https://linkedin.com/in/emmawhite"
    }
];

// Function to Display Alumni Profiles
function displayAlumni(data) {
    const alumniList = document.getElementById("alumni-list");
    alumniList.innerHTML = "";

    data.forEach(alumnus => {
        const profile = document.createElement("div");
        profile.classList.add("alumni-profile");

        profile.innerHTML = `
            <h3>${alumnus.name}</h3>
            <p><strong>Department:</strong> ${alumnus.department}</p>
            <p><strong>Graduation Year:</strong> ${alumnus.graduationYear}</p>
            <p><strong>Email:</strong> <a href="mailto:${alumnus.email}" style="color: yellow;">${alumnus.email}</a></p>
            <p><a href="${alumnus.linkedin}" target="_blank" style="color: lightblue;">LinkedIn</a></p>
        `;

        alumniList.appendChild(profile);
    });
}

// Function to Filter Alumni Profiles Based on Search
function searchAlumni() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredAlumni = alumniData.filter(alumnus =>
        alumnus.name.toLowerCase().includes(query) ||
        alumnus.department.toLowerCase().includes(query) ||
        alumnus.graduationYear.includes(query)
    );

    displayAlumni(filteredAlumni);
}

// Display all alumni on page load
displayAlumni(alumniData);
