const express = require('express');
const app = express();

const PORT = 3000;

// Sample car data
const cars = [
    { id: 1, brand: "Toyota", model: "Camry" },
    { id: 2, brand: "Honda", model: "Civic" },
    { id: 3, brand: "Tesla", model: "Model 3" }
];

app.get('/', (req, res) => {
    res.send("🚗 Car Display App Running!");
});

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
