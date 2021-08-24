const logIn = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.inputEmail, user.inputPassword)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch(error => dispatch({ type: "LOGIN_ERROR", error }));
  };
};

const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "LOGOUT_ERROR" }, error);
      });
  };
};

const logInWithGoogle = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch(error => dispatch({ type: "LOGIN_ERROR", error }));
  };
};

const register = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.inputEmail, user.inputPassword)
      .then(() => dispatch({ type: "REGISTER_SUCCESS" }))
      .catch(error => dispatch({ type: "REGISTER_ERROR", error }));
  };
};

export const authActions = {
  logIn,
  logOut,
  logInWithGoogle,
  register
};
