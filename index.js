const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');
const app = express();

const members = [
    {
        "id": 1,
        "name": "Jhon Doe",
        "email": "john@gmail.com",
        "status": "acitive"
    }
];
app.get('/api/members', (req, res) => {
    res.json(members);
});

const PORT = process.env.PORT || 5000;



//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

