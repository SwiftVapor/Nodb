const express = require('express');
const bagCtrl = require('./Controllers/bagCtrl');
const castCtrl = require('./Controllers/castCtrl');
const app = express();
app.use(express.json());
app.get('/api/catch', castCtrl.getFish)

app.get('api/caught-fish',bagCtrl.getCaughtFish)
app.post('api/caught-fish',bagCtrl.catchFish)
// app.put('api/caught-fish/:id',bagCtrl.)
app.delete('api/caught-fish/:id',bagCtrl.deleteFish)




app.listen(6969, () => console.log ('Server is running on 6969'))