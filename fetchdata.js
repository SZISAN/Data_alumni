// Fetch data from Google Sheets
fetch("https://spreadsheets.google.com/feeds/list/1fkd8E9TIgTWhXrddQJiloSafe9GThcpt9s9v2-6obbI/od6/public/values?alt=json")
  .then(response => response.json())
  .then(data => {
    const alumniData = data.feed.entry;
    displayAlumni(alumniData);  // Call the function to display data
  })
  .catch(error => console.error("Error fetching data: ", error));
