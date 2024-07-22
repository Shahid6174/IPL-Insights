const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const uri = 'mongodb://localhost:27017/IPL-Insights';
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Fetch top batsmen
  app.get('/top-batsmen', async (req, res) => {
    try {
      const batsmen = await db.collection('Batsmen').find().toArray();
      res.json(batsmen);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Fetch top bowlers
  app.get('/top-bowlers', async (req, res) => {
    try {
      const bowlers = await db.collection('Bowlers').find().toArray();
      res.json(bowlers);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Fetch top wicketkeepers
  app.get('/top-wicketkeepers', async (req, res) => {
    try {
      const wicketkeepers = await db.collection('WicketKeepers').find().toArray();
      res.json(wicketkeepers);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Save current team
  app.post('/save-current-team', async (req, res) => {
    try {
      const currentTeam = req.body;
      await db.collection('currentTeam').insertOne(currentTeam);
      res.json({ message: 'Current team saved successfully!' });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Fetch current team
  app.get('/current-team', async (req, res) => {
    try {
      const currentTeam = await db.collection('currentTeam').find().toArray();
      res.json(currentTeam);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
