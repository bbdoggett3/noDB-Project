//This will hold my book 
const data = require('../../src/data.js')
const book = data.data;
// const book = [{id: 0, title: "Book 1", year: 0, pageCount: 0, img: "image", review: "review"}]
let id = 7

module.exports = {
    getBook: (req, res) => {
        console.log(book)
        res.status(200).send(book);
    },

    newBookAdded: (req, res) => {
        const {title, year, pageCount, img, review} = req.body;

        const newBook = {id, title, year, pageCount, img, review};
        id++;

        book.push(newBook);
        res.status(200).send(book);
    },

    editReview: (req, res) => {
        const {book_id} = req.params;
        const {review} = req.body;

        const index = book.findIndex(element => element.id === +book_id);
        
        if(index === -1) {
            return res.status(404).send("No book found");
        }

        book[index].review = review;
        res.status(200).send(book);
    },

    removeBook: (req, res) => {
        const {book_id} = req.params;
        console.log(book_id)
        const index = book.findIndex(element => element.id === +book_id);

        if(index === -1) {
            return res.status(404).send("No book found");
        }

        book.splice(index, 1);
        res.status(200).send(book);
    }
}
