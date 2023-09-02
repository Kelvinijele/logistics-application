const express = require('express');
const app = express();
const mongoose= require('mongoose');

const {authRouter, bikeRouter, carRouter, driverRouter, vanRouter } = require('./modules');

const PORT = 3000;
app.use(express.json({ limit: '124kb' }));
app.use(
  express.urlencoded({
    extended: false,
    limit: '124kb',
  })
);


app.use('/auth', authRouter);
app.use('/bike', bikeRouter);
app.use('/car', carRouter);
app.use('/driver', driverRouter);
app.use('/van', vanRouter);

app.listen(PORT, () => 
    console.log("server is running on port 3000")
)
mongoose.connect(`mongodb://localhost/fleetManagement`)
.then(() => console.log('mongodb connected...'))
.catch(err => console.log(err))
