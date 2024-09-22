const express = require('express');
const path = require('path');
const app = express();
const medicines = require('./medicines.json'); // Medicine data

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Medicine search route
app.get('/medicine/:name', (req, res) => {
    const medicineName = req.params.name.toLowerCase();
    const medicine = medicines.find(m => m.name.toLowerCase() === medicineName);
    if (medicine) {
        res.send(`
            <html>
            <head>
                <title>${medicine.name} - CureZone</title>
                <link rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                <h1>${medicine.name}</h1>
                <img src="/images/${medicine.image}" alt="${medicine.name}" />
                <p><strong>When to use:</strong> ${medicine.whenToUse}</p>
                <p><strong>Side effects:</strong> ${medicine.sideEffects}</p>
                <p><strong>Dosage:</strong> ${medicine.dosage}</p>
                <a href="/">Back to home</a>
            </body>
            </html>
        `);
    } else {
        res.send('Medicine not found.');
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:3000`);
});
