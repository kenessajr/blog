import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.parms.id;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.parms.id] };
}

export default connect(mapStateToProps, { fecthPost })(PostsShow);
