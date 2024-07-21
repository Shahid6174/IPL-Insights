const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock data
const teams = [
    { team_id: 1, name: 'MI', cupsWon: 5 },
    { team_id: 2, name: 'CSK', cupsWon: 4 },
    { team_id: 3, name: 'RR', cupsWon: 2 },
    { team_id: 4, name: 'RCB', cupsWon: 0 },
    // Add more teams as needed
];

const players = [
    { player_id: 1, name: 'Rohit Sharma', team_id: 1 },
    { player_id: 2, name: 'MS Dhoni', team_id: 2 },
    { player_id: 3, name: 'Ben Stokes', team_id: 3 },
    { player_id: 4, name: 'Virat Kohli', team_id: 4 },
    // Add more players as needed
];

// Endpoints
app.get('/api/teams', (req, res) => {
    res.json(teams);
});

app.get('/api/players', (req, res) => {
    res.json(players);
});

app.post('/api/selections', (req, res) => {
    // Example: Store selections (for now, just log it)
    console.log(req.body);
    res.status(201).send('Selections saved');
});

app.get('/api/selections/:user_id', (req, res) => {
    // Example: Retrieve user selections (mock data for now)
    res.json({
        batsmen: ['Player A', 'Player B'],
        bowlers: ['Player C', 'Player D'],
        all_rounders: ['Player E'],
        wicketkeepers: ['Player F']
    });
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
