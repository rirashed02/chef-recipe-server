const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());

const chef = require('./data/chef.json')
const recipeDetails = require('./data/recipeDetails.json')


app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/recipe', (req, res) => {
    res.send(recipeDetails)
})
app.get('/recipeDetails/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = recipeDetails.find(recipe => recipe.id === id);
    res.send(selectedRecipe)

})

app.get('/chefinfo/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chef.find(chefInfo => chefInfo.id === id);
    res.send(selectedChef);
})

app.get('/', (req, res) => {
    res.send('Chef recipe hunter api is running')
});

app.listen(port, () => {
    console.log(`Chef recipe is running on port: ${port}`)
})