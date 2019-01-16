let express = require('express');
let mongoose = require('mongoose');
let apiRouter = require('./routes/api');
let cors = require('cors');

mongoose.connect('mongodb://localhost:27017/medicalproject', {useNewUrlParser: true});

let app = express();

app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.use((req, res, next) => {
    next(new Error('Not found' ));
});

app.use((err, req, res, next) => {
    res.json(err);
});

app.listen(3000,() => {
    console.log('Listening...');
});
