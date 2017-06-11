import express from 'express';
import run from './twitterBot';

const app = express();
app.get('/', (req, res) => { res.send('The robot is happily running.'); });
app.listen(process.env.PORT);

run();
