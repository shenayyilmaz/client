import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="filed">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (filedValues) => {
    return this.props.createStream(filedValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui error form"
        >
          <Field name="title" component={this.renderInput} label="Enter Name" />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (filedValues) => {
  const error = {};
  if (!filedValues.title) error.title = "Please enter your title";
  if (!filedValues.description)
    error.description = "Please enter your Decription";
  return error;
};

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate,
})(StreamCreate);

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, { createStream })(formWrapped);
