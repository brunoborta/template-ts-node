import express from 'express';

const PORT = 3333;
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`🤘 Server started on ${PORT}`);
});
