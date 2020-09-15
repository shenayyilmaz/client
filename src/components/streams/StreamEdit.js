import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) return <div>Loading ...</div>;

    return <div>{this.props.stream.title} </div>;
  }
}
const mapSatetToProps = (state, ownProps) => {
  // console.log("opppps", state.streams[ownProps.match.params.id]);
  // const stream = Object.values(state.streams).find(
  //   (stream) => stream.id === ownProps.match.params.id
  // );

  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapSatetToProps, { fetchStream })(StreamEdit);
