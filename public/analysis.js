document.addEventListener('DOMContentLoaded', function () {
    const fetchAnalysisButton = document.getElementById('fetchAnalysis');
    const analysisResultsDiv = document.getElementById('analysisResults');

    const teams = [
        { name: 'RR', cupsWon: 1, players: ['Sanju Samson', 'Jos Buttler', 'Riyan Parag', 'Shimron Hetmyer', 'Yashasvi Jaiswal'] },
        { name: 'MI', cupsWon: 5, players: ['Rohit Sharma', 'Jasprit Bumrah', 'Suryakumar Yadav', 'Ishan Kishan', 'Tilak Varma'] },
        { name: 'LSG', cupsWon: 0, players: ['KL Rahul', 'Quinton de Kock', 'Marcus Stoinis', 'Krunal Pandya', 'Ravi Bishnoi'] },
        { name: 'SRH', cupsWon: 1, players: ['Aiden Markram', 'Rahul Tripathi', 'Abhishek Sharma', 'Bhuvneshwar Kumar', 'Umran Malik'] },
        { name: 'CSK', cupsWon: 5, players: ['MS Dhoni', 'Ruturaj Gaikwad', 'Ravindra Jadeja', 'Deepak Chahar', 'Ben Stokes'] },
        { name: 'PK', cupsWon: 0, players: ['Shikhar Dhawan', 'Kagiso Rabada', 'Arshdeep Singh', 'Sam Curran', 'Liam Livingstone'] },
        { name: 'GT', cupsWon: 1, players: ['Hardik Pandya', 'Shubman Gill', 'Rashid Khan', 'David Miller', 'Mohammad Shami'] },
        { name: 'KKR', cupsWon: 3, players: ['Shreyas Iyer', 'Andre Russell', 'Sunil Narine', 'Nitish Rana', 'Rinku Singh'] },
        { name: 'RCB', cupsWon: 0, players: ['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell', 'Mohammed Siraj', 'Harshal Patel'] },
        { name: 'DC', cupsWon: 0, players: ['Rishabh Pant', 'Prithvi Shaw', 'Anrich Nortje', 'Axar Patel', 'Mitchell Marsh'] }
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
