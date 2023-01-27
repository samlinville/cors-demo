const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: ['https://www.samlinville.com', 'https://samlinville.com']
}));

const ingredients = [
  {
    "id": "1",
    "item": "Bread"
  },
  {
    "id": "2",
    "item": "Eggs"
  },
  {
    "id": "3",
    "item": "Milk"
  },
  {
    "id": "4",
    "item": "Butter"
  },
];

app.get('/ingredients', (req, res) => {
  res.send(ingredients);
});
app.listen(8080);