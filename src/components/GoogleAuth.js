import React from "react";
import { connect } from "react-redux";
import { singIn, singOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    console.log(this.props);
    //this all is initiliaze library
    window.gapi.load("client:auth2", () =>
      window.gapi.auth2
        .init({
          client_id:
            "998035785557-jvqo9c0vqvrtc78dt3pouflrvkv5khku.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          // auth status degisiklikleri dinler varsa callback  calistirir. bizde setState degisiklik yaparak componenti render yaptirmis oluruz. listen log in log out gamil serverda degisiklik olunca calback func cagiris
          this.auth.isSignedIn.listen(() =>
            this.onAuthChange(this.auth.isSignedIn.get())
          );
        })
    );
  }
  onAuthChange = (isSignedIn) => {
    console.log("isSignedIn", isSignedIn);
    if (isSignedIn) {
      //dispatch action call reducer update redux store
      this.props.singIn(this.auth.currentUser.get().getId());
    } else {
      this.props.singOut();
    }
  };
  renderAuthButton() {
    switch (this.props.isSignedIn) {
      case null:
        return null;

      case true:
        return (
          <button
            className="ui google red  button"
            onClick={this.onSignOutClick}
          >
            <i className="google  icon"></i>
            Sign Out
          </button>
        );
      default:
        return (
          <button
            className="ui google red  button"
            onClick={this.onSignInClick}
          >
            <i className="google  icon"></i>
            Sign In with Google
          </button>
        );
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    console.log("oppsss");
    this.auth.signOut();
  };
  render() {
    return <div>GoogleAuth {this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { singIn, singOut })(GoogleAuth);
