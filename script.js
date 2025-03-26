// Fetch data from SheetDB API
fetch('https://sheetdb.io/api/v1/l9z31dtwup0uq')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    displayAlumni(data);  // Call the display function to show the data on the page
  })
  .catch(error => {
    console.error('Error fetching data:', error);  // Handle any errors
  });

// Function to display alumni profiles on the page
function displayAlumni(data) {
  const alumniList = document.getElementById("alumni-list");
  alumniList.innerHTML = "";  // Clear any existing content

  // Loop through each alumni and create a profile card
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

    alumniList.appendChild(profile);  // Add the profile to the alumni list
  });
}

// Search functionality (if you want to search through the displayed alumni)
function searchAlumni() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredAlumni = data.filter(alumnus =>
    alumnus.name.toLowerCase().includes(query) ||
    alumnus.department.toLowerCase().includes(query) ||
    alumnus.graduationYear.includes(query)
  );

  displayAlumni(filteredAlumni);
}
