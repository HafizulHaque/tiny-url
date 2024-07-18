import express from 'express';
import router from './backend/routes/apiRoutes.mjs';

let app = express();
let PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

app.use('/api', router)

app.get('*', (req, res) => {
  res.send('serve frontend!');
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})