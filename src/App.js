import React, { Component } from 'react';
import Header from './components/Header';
import DisplayBook from './components/DisplayBook';
import Finder from './components/Finder';
import axios from 'axios';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    books: []
  }

  this.makeNewBook = this.makeNewBook.bind(this);
  this.editReview = this.editReview.bind(this);
  this.removeBook = this.removeBook.bind(this);
}

componentDidMount() {
  axios.get('/api/books').then(response => {
    console.log(response)
    this.setState({books: response.data})
  });
}

makeNewBook(title, year, pageCount, img, review ) {
  const body = {title, year, pageCount, img, review}
  axios.post('/api/books', body).then(response => {
    this.setState({books: response.data})
  })
}

editReview(id, newReview) {
  const body = {newReview}
  axios.put(`/api/books/${id}`, body).then(response => {
    this.setState({books: response.data})
  })
}

removeBook(id) {
  console.log(id)
  axios.delete(`/api/books/${id}`).then(response => {
    this.setState({books: response.data})
  })
}

  render() {
    
    const booksMapped = this.state.books.map(element => {
      return <div>
        <DisplayBook book = {element} />
      </div>
      
    })
    return (
      <div className="App">
        <Header />
        {booksMapped}
        <Finder
          books = {this.state.books}
          editReview = {this.editReview}
          removeBook = {this.removeBook}
        />
      </div>
    );
  }
 
}

export default App;
