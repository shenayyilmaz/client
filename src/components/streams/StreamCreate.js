import React from "react";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = (filedValues) => {
    //console.log("filedValues", filedValues);
    return this.props.createStream(filedValues);
  };

  render() {
    return (
      <div>
        <h1>Create a Stream</h1>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
