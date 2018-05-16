
import express from 'express';
import path from 'path';
import routeApi from './routes/api';
const app = express();

app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use('/', express.static(path.join(__dirname, '/../public')))
app.use('/api', routeApi);

app.listen(9000, () => console.log('Server started at localhost 9000')); 
 
