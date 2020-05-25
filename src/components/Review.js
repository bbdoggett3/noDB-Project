import React, { Component } from 'react';

class Review extends Component {
    constructor() {
        super();

        this.state = {
            isEditing: false,
            userInput: ''
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReview = this.handleReview.bind(this);
    }

    toggleEdit() {
        console.log("button hit")
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleChange(event) {
        this.setState({ userInput: event.target.value })
    }

    handleReview() {
        this.props.editReview(this.props.data.id, this.state.userInput)
        this.toggleEdit()
    }



    render() {
        console.log("this is the new input", this.state.userInput)
        return (
            <div className="main-container">
                <div className="books-container">
                    <img src= {this.props.data.img} alt={`Book cover for ${this.props.data.title} `} />

                    <div className="books-info">
                        <h3>{this.props.data.title}</h3>
                        <p><span>Year:</span> {this.props.data.year}</p>
                        <p><span>Pages:</span> {this.props.data.pageCount}</p>
                       
                    </div>

                </div>
                <p><span className="review-span">Review:</span> {this.props.data.review}</p>

                {!this.state.isEditing ? <p className= "review" onClick={() => this.toggleEdit()}>Update Review</p> :

                    <div>
                        <input onChange={event => this.handleChange(event)} />
                        <button onClick={() => this.toggleEdit()}>Cancel</button>
                        <button onClick={() => this.handleReview(this.props.data.id)}>Save</button>
                    </div>}

                <button className ="remove-button" onClick={() => this.props.removeBook(this.props.data.id)}>Remove Book
            </button>
            </div>
        )
    }
}

export default Review;