import React, { Component } from 'react';
import Header from './components/Header';
import Finder from './components/Finder';
import axios from 'axios';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    books: [],
    isAddBookOpen: false,
    title: "",
    year: 0,
    pageCount: 0,
    img: "",
    review: ""
  }

  this.makeNewBook = this.makeNewBook.bind(this);
  this.editReview = this.editReview.bind(this);
  this.removeBook = this.removeBook.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

toggleMenuSelect = () => {
  this.setState({
    isAddBookOpen: !this.state.isAddBookOpen
  });
}

componentDidMount() {
  axios.get('/api/books').then(response => {
    console.log(response)
    this.setState({books: response.data})
  }).catch(error => alert("Didn't get list of Stephen King books"))
}

makeNewBook(title, year, pageCount, img, review ) {
  const body = {title: this.state.title, year: this.state.year, pageCount: this.state.pageCount, img: this.state.img, review: this.state.review}
  axios.post('/api/books', body).then(response => {
    this.setState({books: response.data})
  }).catch(error => alert("Can't make a new Book at this time"))
}

editReview(id, review) {
  const body = {review}
  axios.put(`/api/books/${id}`, body).then(response => {
    this.setState({books: response.data})
  }).catch(error => alert("Cannot update the review"))
}

removeBook(id) {
  console.log(id)
  axios.delete(`/api/books/${id}`).then(response => {
    this.setState({books: response.data})
  }).catch(error => alert("No Book was found to remove"))
}

  render() {
 
    return (
      <div className="App">
        <Header />
        <Finder
          books = {this.state.books}
          editReview = {this.editReview}
          removeBook = {this.removeBook}
        />
        
        <button className="drop-menu-add" onClick={this.toggleMenuSelect}>
            Add Book Here
          </button>
      <div className = "add-book-container">
      <p className={`new-book-wrap ${this.state.isAddBookOpen ? 'add-book-open' : null}`}>
          <input
            className="new-book-btn"
            placeholder="title"
            ref={title => {
              this.makeNewBook.title = title;
            }}
            name="title"
            onChange = {this.handleChange}
          />
          <input
            type="number"
            className="new-book-btn"
            placeholder="year"
            ref={year => {
              this.makeNewBook.year = year;
            }}
            name= "year"
            onChange = {this.handleChange}
          />
          <input
            type="number"
            className="new-book-btn"
            placeholder="pageCount"
            ref={pageCount => {
              this.makeNewBook.pageCount = pageCount;
            }}
            name="pageCount"
            onChange = {this.handleChange}
          />
          <input
            className="new-book-btn"
            placeholder="img"
            ref={img => {
              this.makeNewBook.img = img;
            }}
            name="img"
            onChange = {this.handleChange}
          />
          <input
            type="text"
            className="new-book-btn"
            placeholder="review"
            ref={review => {
              this.makeNewBook.review = review;
            }}
            name="review"
            onChange = {this.handleChange}
          />
          <button className="new-book-btn-add" onClick={() => this.makeNewBook()}>
            Add Book
          </button>
        </p>
      </div>
      </div>
    );
  }
 
}

export default App;
