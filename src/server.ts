import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(PORT, () => {
  console.log(`🤘 Server started on ${PORT}`);
});
