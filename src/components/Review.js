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
        this.props.editReview(this.props.id, this.state.userInput)
        this.toggleEdit()
    }



    render() {
        return (
            <div>
                {!this.state.isEditing ? <p className= "review" onClick={() => this.toggleEdit()}>{this.props.data.review}</p> :

                    <div>
                        <input onChange={event => this.handleChange(event)} />
                        <button onClick={() => this.toggleEdit()}>Cancel</button>
                        <button onClick={() => this.handleReview()}>Save</button>
                    </div>}

                <button onClick={() => this.props.removeBook(this.props.data.id)}>Remove Book
            </button>
            </div>
        )
    }
}

export default Review;