const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/characters', async (req, res) => {
    
    const url = `https://rickandmortyapi.com/api/character/`;

    try {
        const response = await axios.get(url);
        res.json(response.data.results);
        
    } catch (ERROR) { 
        res.status(404).json({error: 'character not found'})
    }
});

app.get('/characters/:name', async (req, res) => {
    const rickymortyCharacters = req.params.name;
    const url = `https://rickandmortyapi.com/api/character/?name=${rickymortyCharacters}`;
    try {
        const response = await axios.get(url);
        if (response.data.results && response. data.results.length > 0) {
            res.json(response.data.results[0]);
        } else {
           res.status(404).json({error: 'character not found'});
        }
    }
    catch (error) {
        res.status(404).json({error: 'character not found'})
    }       
});   


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});