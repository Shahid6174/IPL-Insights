// URL base for API requests
const apiBaseUrl = '/api';

// Function to fetch teams from the backend
function fetchTeams() {
    fetch(`${apiBaseUrl}/teams`)
        .then(response => response.json())
        .then(data => {
            populateDropdowns(data, 'team');
        })
        .catch(error => console.error('Error fetching teams:', error));
}

// Function to fetch players from the backend
function fetchPlayers() {
    fetch(`${apiBaseUrl}/players`)
        .then(response => response.json())
        .then(data => {
            populateDropdowns(data, 'player');
        })
        .catch(error => console.error('Error fetching players:', error));
}

// Function to populate dropdowns with data
function populateDropdowns(data, type) {
    const dropdowns = document.querySelectorAll(`select[data-type="${type}"]`);
    dropdowns.forEach(dropdown => {
        dropdown.innerHTML = '<option value="">Select...</option>';
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.name || item.player_id;  // Adjust as needed
            option.textContent = item.name || item.name;
            dropdown.appendChild(option);
        });
    });
}

// Function to handle form submission for selections
function submitSelections() {
    const selections = {
        batsmen: getSelectedValues('batsman'),
        bowlers: getSelectedValues('bowler'),
        all_rounders: getSelectedValues('all_rounder'),
        wicketkeepers: getSelectedValues('wicketkeeper')
    };

    fetch(`${apiBaseUrl}/selections`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(selections)
    })
    .then(response => response.text())
    .then(message => {
        console.log('Selection submitted:', message);
        alert('Selections submitted successfully!');
    })
    .catch(error => console.error('Error submitting selections:', error));
}

// Function to get selected values from a dropdown or input
function getSelectedValues(type) {
    const selectedOptions = Array.from(document.querySelectorAll(`select[data-type="${type}"] option:checked`));
    return selectedOptions.map(option => option.value);
}

// Function to handle Batsmen Page
function handleBatsmenPage() {
    const numBatsmenInput = document.getElementById('numBatsmen');
    const fetchBatsmenButton = document.getElementById('fetchBatsmen');

    fetchTeams();  // Populate team dropdowns

    fetchBatsmenButton.addEventListener('click', () => {
        const numBatsmen = parseInt(numBatsmenInput.value, 10);
        if (numBatsmen >= 3 && numBatsmen <= 5) {
            // Add your logic to fetch and display batsmen
            console.log(`Fetching top ${numBatsmen} batsmen...`);
        } else {
            alert('Please enter a number between 3 and 5.');
        }
    });
}

// Function to handle Bowlers Page
function handleBowlersPage() {
    const numBowlersInput = document.getElementById('numBowlers');
    const fetchBowlersButton = document.getElementById('fetchBowlers');

    fetchTeams();  // Populate team dropdowns
    populateDropdowns([{ name: 'Wankhede' }, { name: 'Jaipur' }, { name: 'Bengaluru' }, /* Add more grounds */], 'ground');

    fetchBowlersButton.addEventListener('click', () => {
        const numBowlers = parseInt(numBowlersInput.value, 10);
        if (numBowlers >= 3 && numBowlers <= 4) {
            // Add your logic to fetch and display bowlers
            console.log(`Fetching top ${numBowlers} bowlers...`);
        } else {
            alert('Please enter a number between 3 and 4.');
        }
    });
}

// Function to handle All-Rounders and Wicketkeepers Page
function handleAllRoundersAndWicketkeepersPage() {
    const numAllRoundersInput = document.getElementById('numAllRounders');
    const fetchAllRoundersButton = document.getElementById('fetchAllRounders');
    const numWicketkeepersInput = document.getElementById('numWicketkeepers');
    const fetchWicketkeepersButton = document.getElementById('fetchWicketkeepers');

    fetchTeams();  // Populate team dropdowns

    fetchAllRoundersButton.addEventListener('click', () => {
        const numAllRounders = parseInt(numAllRoundersInput.value, 10);
        if (numAllRounders >= 2 && numAllRounders <= 3) {
            // Add your logic to fetch and display all-rounders
            console.log(`Fetching top ${numAllRounders} all-rounders...`);
        } else {
            alert('Please enter a number between 2 and 3.');
        }
    });

    fetchWicketkeepersButton.addEventListener('click', () => {
        const numWicketkeepers = parseInt(numWicketkeepersInput.value, 10);
        if (numWicketkeepers === 1) {
            // Add your logic to fetch and display wicketkeepers
            console.log('Fetching top wicketkeeper...');
        } else {
            alert('Please enter the number 1.');
        }
    });
}

// Function to handle Analysis Page
function handleAnalysisPage() {
    fetch(`${apiBaseUrl}/teams`)
        .then(response => response.json())
        .then(teams => {
            const container = document.getElementById('analysisContainer');
            container.innerHTML = '';

            teams.forEach(team => {
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h2>${team.name}</h2>
                    <p><strong>Cups Won:</strong> ${team.cupsWon}</p>
                    <p><strong>Players:</strong> ${team.players.join(', ')}</p>
                `;
                container.appendChild(teamDiv);
            });
        })
        .catch(error => console.error('Error fetching team analysis:', error));
}

// Function to handle Current Team Page
function handleCurrentTeamPage() {
    fetch(`${apiBaseUrl}/selections`)
        .then(response => response.json())
        .then(selections => {
            const container = document.getElementById('currentTeamContainer');
            container.innerHTML = '';

            Object.keys(selections).forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');
                categoryDiv.innerHTML = `
                    <h2>${capitalizeFirstLetter(category)}</h2>
                    <ul>
                        ${selections[category].map(player => `<li>${player}</li>`).join('')}
                    </ul>
                `;
                container.appendChild(categoryDiv);
            });
        })
        .catch(error => console.error('Error fetching current team selections:', error));
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Determine which page to handle
document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.getAttribute('data-page');

    if (page === 'batsmen') {
        handleBatsmenPage();
    } else if (page === 'bowlers') {
        handleBowlersPage();
    } else if (page === 'all-rounders') {
        handleAllRoundersAndWicketkeepersPage();
    } else if (page === 'wicketkeepers') {
        handleAllRoundersAndWicketkeepersPage();
    } else if (page === 'analysis') {
        handleAnalysisPage();
    } else if (page === 'current-team') {
        handleCurrentTeamPage();
    }
});
