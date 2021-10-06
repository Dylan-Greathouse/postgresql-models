import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import villages from './controllers/villages.js';
import fossils from './controllers/fossils.js';

const app = express();

app.use(express.json());
app.use('/api/v1/villagers', villages);
app.use('/api/v1/fossils', fossils);
// app.use('https://acnhapi.com/v1/bugs');
// app.use('https://acnhapi.com/v1/fish');
// app.use('https://acnhapi.com/v1/sea');

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
