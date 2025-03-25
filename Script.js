const alumniData = [
    {
        name: "John Doe",
        department: "Computer Science",
        graduationYear: "2015",
        email: "john@example.com",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        name: "Jane Smith",
        department: "Mechanical Engineering",
        graduationYear: "2017",
        email: "jane@example.com",
        linkedin: "https://linkedin.com/in/janesmith"
    },
    // Add more alumni profiles here
];

function displayAlumni(data) {
    const alumniList = document.getElementById("alumni-list");
    alumniList.innerHTML = "";
    
    data.forEach(alumnus => {
        const profile = document.createElement("div");
        profile.classList.add("alumni-profile");
        
        profile.innerHTML = `
            <h3>${alumnus.name}</h3>
            <p>Department: ${alumnus.department}</p>
            <p>Graduation Year: ${alumnus.graduationYear}</p>
            <p>Email: <a href="mailto:${alumnus.email}">${alumnus.email}</a></p>
            <p><a href="${alumnus.linkedin}" target="_blank">LinkedIn</a></p>
        `;
        
        alumniList.appendChild(profile);
    });
}

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
