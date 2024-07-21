document.addEventListener('DOMContentLoaded', function () {
    const fetchBatsmenButton = document.getElementById('fetchBatsmen');
    const fetchBowlersButton = document.getElementById('fetchBowlers');
    const fetchAllRoundersButton = document.getElementById('fetchAllRounders');
    const fetchWicketkeepersButton = document.getElementById('fetchWicketkeepers');
    const saveSelectionsButton = document.getElementById('saveSelections');

    const numBatsmenInput = document.getElementById('numBatsmen');
    const numBowlersInput = document.getElementById('numBowlers');
    const numAllRoundersInput = document.getElementById('numAllRounders');
    const numWicketkeepersInput = document.getElementById('numWicketkeepers');

    const teamSelectBatsmen = document.getElementById('teamSelectBatsmen');
    const groundSelectBowlers = document.getElementById('groundSelectBowlers');
    const teamSelectAllRounders = document.getElementById('teamSelectAllRounders');
    const teamSelectWicketkeepers = document.getElementById('teamSelectWicketkeepers');

    const resultBatsmen = document.getElementById('resultBatsmen');
    const resultBowlers = document.getElementById('resultBowlers');
    const resultAllRounders = document.getElementById('resultAllRounders');
    const resultWicketkeepers = document.getElementById('resultWicketkeepers');

    const teams = [
        { name: 'RR', cupsWon: 2, players: ['Sanju Samson', 'Jos Buttler', 'Riyan Parag', 'Shimron Hetmyer', 'Yashasvi Jaiswal'] },
        { name: 'MI', cupsWon: 5, players: ['Rohit Sharma', 'Jasprit Bumrah', 'Kieron Pollard', 'Ishan Kishan', 'Suryakumar Yadav'] },
        { name: 'LSG', cupsWon: 0, players: ['KL Rahul', 'Quinton de Kock', 'Deepak Hooda', 'Ravi Bishnoi', 'Krunal Pandya'] },
        { name: 'SRH', cupsWon: 2, players: ['David Warner', 'Kane Williamson', 'Rashid Khan', 'Bhuvneshwar Kumar', 'Abhishek Sharma'] },
        { name: 'CSK', cupsWon: 5, players: ['MS Dhoni', 'Ruturaj Gaikwad', 'Ben Stokes', 'Ravindra Jadeja', 'Deepak Chahar'] },
        { name: 'PK', cupsWon: 1, players: ['Shubman Gill', 'Kagiso Rabada', 'Mohammed Shami', 'Prabhsimran Singh', 'Rahul Chahar'] },
        { name: 'GT', cupsWon: 1, players: ['Hardik Pandya', 'Rashid Khan', 'Shubman Gill', 'David Miller', 'Mohammad Shami'] },
        { name: 'KKR', cupsWon: 2, players: ['Shreyas Iyer', 'Andre Russell', 'Sunil Narine', 'Nitish Rana', 'Rinku Singh'] },
        { name: 'RCB', cupsWon: 0, players: ['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell', 'Mohammed Siraj', 'Harshal Patel'] },
        { name: 'DC', cupsWon: 0, players: ['Rishabh Pant', 'Prithvi Shaw', 'Kagiso Rabada', 'Axar Patel', 'Mitchell Marsh'] }
    ];

    function getSelectedPlayers(type, count) {
        const players = [];
        for (let i = 0; i < count; i++) {
            const selectedPlayer = prompt(`Enter ${type} player ${i + 1}`);
            if (selectedPlayer) players.push(selectedPlayer);
        }
        return players;
    }

    function saveSelections() {
        const batsmen = numBatsmenInput.value;
        const bowlers = numBowlersInput.value;
        const allRounders = numAllRoundersInput.value;
        const wicketkeepers = numWicketkeepersInput.value;

        const selectedBatsmen = getSelectedPlayers('batsman', batsmen);
        const selectedBowlers = getSelectedPlayers('bowler', bowlers);
        const selectedAllRounders = getSelectedPlayers('all-rounder', allRounders);
        const selectedWicketkeepers = getSelectedPlayers('wicketkeeper', wicketkeepers);

        localStorage.setItem('selectedBatsmen', JSON.stringify(selectedBatsmen));
        localStorage.setItem('selectedBowlers', JSON.stringify(selectedBowlers));
        localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounders));
        localStorage.setItem('selectedWicketkeepers', JSON.stringify(selectedWicketkeepers));
        
        alert('Selections saved successfully!');
    }

    fetchBatsmenButton.addEventListener('click', function () {
        const numberOfBatsmen = parseInt(numBatsmenInput.value, 10);
        if (numberOfBatsmen >= 3 && numberOfBatsmen <= 5) {
            // Logic to fetch and display batsmen based on user input
            resultBatsmen.innerHTML = `Displaying ${numberOfBatsmen} batsmen...`;
        }
    });

    fetchBowlersButton.addEventListener('click', function () {
        const numberOfBowlers = parseInt(numBowlersInput.value, 10);
        if (numberOfBowlers >= 3 && numberOfBowlers <= 4) {
            // Logic to fetch and display bowlers based on user input
            resultBowlers.innerHTML = `Displaying ${numberOfBowlers} bowlers...`;
        }
    });

    fetchAllRoundersButton.addEventListener('click', function () {
        const numberOfAllRounders = parseInt(numAllRoundersInput.value, 10);
        if (numberOfAllRounders >= 2 && numberOfAllRounders <= 3) {
            // Logic to fetch and display all-rounders based on user input
            resultAllRounders.innerHTML = `Displaying ${numberOfAllRounders} all-rounders...`;
        }
    });

    fetchWicketkeepersButton.addEventListener('click', function () {
        const numberOfWicketkeepers = parseInt(numWicketkeepersInput.value, 10);
        if (numberOfWicketkeepers === 1) {
            // Logic to fetch and display wicketkeepers based on user input
            resultWicketkeepers.innerHTML = `Displaying ${numberOfWicketkeepers} wicketkeeper...`;
        }
    });

    saveSelectionsButton.addEventListener('click', saveSelections);
});
