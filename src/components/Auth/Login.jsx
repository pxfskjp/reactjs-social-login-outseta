import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { authActions } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { inputEmail, inputPassword } = this.state;
    this.props.logIn({ inputEmail, inputPassword });
  };

  logInWithGoogle = () => {
    this.props.logInWithGoogle();
  };

  render() {
    const { auth, authError } = this.props;
    let { from } = this.props.location.state || { from: { pathname: "/" } };

    if (auth.uid) return <Redirect to={from} />;
    return (
      <React.Fragment>
        <div className="login-form">
          <h3 className="h3 mb-3 font-weight-normal"> Sign in</h3>
          <div className="social-login">
            <button
              className="ml-3 btn btn-outline-danger"
              type="button"
              onClick={this.logInWithGoogle}
            >
              <span>
                <i className="fab fa-google-plus-g" /> Sign in with Google
              </span>
            </button>
          </div>
          <p> OR </p>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
              onChange={this.handleChange}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              onChange={this.handleChange}
            />

            <button className="btn btn-outline-success btn-block" type="submit">
              <i className="fas fa-sign-in-alt" /> Sign in
            </button>
            <p className="mt-2">Forgot password?</p>
            <hr />
            <p>
              New user?
              <Link to="/register">
                <i className="fas fa-user-plus" /> Sign up
              </Link>
            </p>
          </form>
          {authError ? (
            <div class="p-3 mb-2 bg-danger text-white">
              <span>{authError}</span>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(authActions.logIn(creds)),
    logInWithGoogle: () => dispatch(authActions.logInWithGoogle())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
