// Define a function to fetch airport information
async function fetchAirportInfo(query) {
    const url = `https://www.airport-data.com/api/ap_info.json?iata=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Define a function to update the UI with airport information
function updateUI(data) {
    const airportCard = document.getElementById('airportCard');

    if (data && data.iata) {
        airportCard.innerHTML = `
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Location: ${data.location}</p>
            <p class="card-text">IATA Code: ${data.iata}</p>
            <p class="card-text">ICAO Code: ${data.icao}</p>
            <p class="card-text">Country: ${data.country}</p>
        `;
    } else {
        airportCard.innerHTML = '<p>No results found for provided IATA CODE. Please try again.</p>';
    }
}

// Define a function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value;

    fetchAirportInfo(query)
        .then(data => updateUI(data))
        .catch(error => console.error('Error:', error));
}

// Attach event listener to form submission
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSubmit);
