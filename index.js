const express = require('express');
const urlRoute = require('./routes/url');
const { connectToDb } = require('./connection');
const URL = require('./models/url');

const app = express();
const PORT = 8001;

connectToDb('mongodb://127.0.0.1:27017/url-shortner')
    .then(() => console.log('Connected to the database'));

app.use(express.json());//to parse the incoming request with JSON payloads

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));