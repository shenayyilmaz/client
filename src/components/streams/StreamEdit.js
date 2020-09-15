import React from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    return this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) return <div>Loading ...</div>;

    return (
      <div>
        <h1>Edit Stream</h1>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
        />
      </div>
    );
  }
}
const mapSatetToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapSatetToProps, { fetchStream, editStream })(
  StreamEdit
);
