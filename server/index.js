const express = require('express');
const app = express();
const bookCtrl = require('./controllers/bookController')
const SERVER_PORT = 4100

app.use(express.json())

//endpoints
app.get('/api/books', bookCtrl.getBook)
app.post('/api/books', bookCtrl.newBookAdded)
app.put('/api/books/:book_id', bookCtrl.editReview)
app.delete('/api/books/:book_id', bookCtrl.removeBook)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));