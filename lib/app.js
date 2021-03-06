import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import villages from './controllers/villages.js';
import fossils from './controllers/fossils.js';
import bugs from './controllers/bugs.js';
import fishes from './controllers/fishes.js';
import seas from './controllers/seas.js';

const app = express();

app.use(express.json());
app.use('/api/v1/villagers', villages);
app.use('/api/v1/fossils', fossils);
app.use('/api/v1/bugs', bugs);
app.use('/api/v1/fish', fishes);
app.use('/api/v1/sea', seas);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
