document.addEventListener('DOMContentLoaded', function () {
    const fetchAnalysisButton = document.getElementById('fetchAnalysis');
    const analysisResultsDiv = document.getElementById('analysisResults');

    const teams = [
        { name: 'RR', cupsWon: 2, players: ['Sanju Samson', 'Jos Buttler', 'Riyan Parag', 'Shimron Hetmyer', 'Yashasvi Jaiswal'] },
        { name: 'MI', cupsWon: 5, players: ['Rohit Sharma', 'Jasprit Bumrah', 'Kieron Pollard', 'Ishan Kishan', 'Suryakumar Yadav'] },
        { name: 'LSG', cupsWon: 0, players: ['KL Rahul', 'Quinton de Kock', 'Deepak Hooda', 'Ravi Bishnoi', 'Krunal Pandya'] },
        { name: 'SRH', cupsWon: 2, players: ['David Warner', 'Kane Williamson', 'Rashid Khan', 'Bhuvneshwar Kumar', 'Abhishek Sharma'] },
        { name: 'CSK', cupsWon: 5, players: ['MS Dhoni', 'Ruturaj Gaikwad', 'Ben Stokes', 'Ravindra Jadeja', 'Deepak Chahar'] },
        { name: 'PK', cupsWon: 0, players: ['Shubman Gill', 'Kagiso Rabada', 'Mohammed Shami', 'Prabhsimran Singh', 'Rahul Chahar'] },
        { name: 'GT', cupsWon: 1, players: ['Hardik Pandya', 'Rashid Khan', 'Shubman Gill', 'David Miller', 'Mohammad Shami'] },
        { name: 'KKR', cupsWon: 3, players: ['Shreyas Iyer', 'Andre Russell', 'Sunil Narine', 'Nitish Rana', 'Rinku Singh'] },
        { name: 'RCB', cupsWon: 0, players: ['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell', 'Mohammed Siraj', 'Harshal Patel'] },
        { name: 'DC', cupsWon: 0, players: ['Rishabh Pant', 'Prithvi Shaw', 'Kagiso Rabada', 'Axar Patel', 'Mitchell Marsh'] }
    ];
    

    function displayAnalysis() {
        analysisResultsDiv.innerHTML = '';

        teams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.className = 'team-card';
            teamCard.innerHTML = `
                <h3>${team.name}</h3>
                <p>Cups Won: ${team.cupsWon}</p>
                <div class="player-list">
                    <h5>Players:</h5>
                    <ul>
                        ${team.players.map(player => `<li>${player}</li>`).join('')}
                    </ul>
                </div>
            `;
            analysisResultsDiv.appendChild(teamCard);
        });
    }

    fetchAnalysisButton.addEventListener('click', function () {
        displayAnalysis();
    });
});
