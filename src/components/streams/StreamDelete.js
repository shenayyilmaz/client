import React from "react";
import Model from "../Model";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../actions";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions = () => {
    return (
      <React.Fragment>
        <div
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button"
        >
          Delete
        </div>
        <Link to="/" className="ui cancel button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  render() {
    return (
      <Model
        title={this.props.stream ? this.props.stream.title : "Delete stream"}
        content="Are you sure you want to delete this stream?"
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
