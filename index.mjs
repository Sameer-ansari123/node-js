import express from 'express';
const app = express();

app.get('/', (req, resp) => {
    resp.send('Hello, This is the Home page');
});

app.get('/about', (req, resp) => {
    resp.send('Hello, This is the About page');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
