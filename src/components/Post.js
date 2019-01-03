import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/PostActions';

class Post extends Component {
  // state = {
  //   post: [ ]
  // }

  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   console.log('http://jsonplaceholder.typicode.com/posts/' +  id);
  //   axios.get('http://jsonplaceholder.typicode.com/posts/' +  id)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       })
  //     })
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    const { post } = this.props;
    const newPost = post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return(
      <div className="contanier">
        {newPost}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost : (id) => { dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)