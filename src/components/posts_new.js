import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
  renderField(field) {
      const { meta: { touched, error } } = field;
      const className = `form-group ${ touched && error ? 'has-danger': ''}`;
      return(
        <div className={className}>
          <label>{field.label}</label>
          <input
            className="form-control"
            type="text"
             {...field.input}
          />
          <div className="text-help">
            { touched ? error : '' }
          </div>
        </div>
      )
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    // Redux form connected, Redux form will check if validate before calling callback
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
         />
         <Field
           label="Categories"
           name="categories"
           component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: '', content:'data' };
  const errors = {};

  // Validate the input from 'values'
  // if (values.title.length < 3) {
  //   errors.title = 'Title must be at least 3 characters';
  // }
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // If errors is empty, the form is fine to submit
  // If errors has *nay* properties, deux form assumes form is invalid
  return errors;

}
// When key is the same as the value you can just assign the value validate:validate => validate ES6
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);
