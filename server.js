import express from 'express';

const app = express();

app.use(express.static("public"));

const PORT = 3001;

app.listen(PORT, console.log(`Server is running at: http://localhost:${PORT}`))