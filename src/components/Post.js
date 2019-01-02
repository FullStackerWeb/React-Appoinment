import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: [ ]
  }

  componentDidMount() {
    let id = this.props.match.params.post_id;
    console.log('http://jsonplaceholder.typicode.com/posts/' +  id);
    axios.get('http://jsonplaceholder.typicode.com/posts/' +  id)
      .then(res => {
        this.setState({
          post: res.data
        })
      })
  }

  render() {
    const newPost = this.state.post;
    const post = newPost ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return(
      <div className="contanier">
        {post}
      </div>
    )
  }
}

export default Post