import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from '../actions'

class CommentBox extends Component {
  state = { comment: ''}

  handleChange = event => {
    this.setState({comment: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //TODO - call action creator
    // save into server

    this.props.saveComment(this.state.comment)
    this.setState({comment: ""})
  }

  render() {
    // console.log(this.state.comment)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleChange}
          >

        </textarea>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
};

export default connect(null, actions)(CommentBox)