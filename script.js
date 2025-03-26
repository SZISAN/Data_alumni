// Function to display alumni profiles
function displayAlumni(data) {
  const alumniList = document.getElementById("alumni-list");
  alumniList.innerHTML = ""; // Clear previous data if any

  data.forEach(alumnus => {
    const profile = document.createElement("div");
    profile.classList.add("alumni-profile");

    const name = alumnus.gsx$name.$t;
    const department = alumnus.gsx$department.$t;
    const graduationYear = alumnus.gsx$graduationyear.$t;
    const email = alumnus.gsx$email.$t;
    const linkedin = alumnus.gsx$linkedin.$t;

    profile.innerHTML = `
      <h3>${name}</h3>
      <p>Department: ${department}</p>
      <p>Graduation Year: ${graduationYear}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
      <p><a href="${linkedin}" target="_blank">LinkedIn</a></p>
    `;

    alumniList.appendChild(profile); // Add the profile to the alumni list
  });
}

// Function to search alumni
function searchAlumni() {
  const query = document.getElementById("search").value.toLowerCase();
  const profiles = document.querySelectorAll(".alumni-profile");

  profiles.forEach(profile => {
    const name = profile.querySelector("h3").textContent.toLowerCase();
    const department = profile.querySelector("p").textContent.toLowerCase();
    
    if (name.includes(query) || department.includes(query)) {
      profile.style.display = "block"; // Show profile if it matches search query
    } else {
      profile.style.display = "none";  // Hide profile if it doesn't match
    }
  });
}
