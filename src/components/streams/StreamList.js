import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import streams from "../../apis/streams";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = (stream) => {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            EDIT
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            DELETE
          </Link>
        </div>
      );
    }
  };
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="ui button primary">
          <Link to="/streams/new" style={{ color: "white" }}>
            Create Stream
          </Link>
        </div>
      );
    }
  };
  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="content" key={stream.id}>
          <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
          </Link>
          <br />

          {stream.description}
          {this.renderAdmin(stream)}
          <br />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>Streams</h2>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
