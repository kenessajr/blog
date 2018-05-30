import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fecthPosts();  
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

export default connect(null, { fecthPosts })(PostsIndex);
