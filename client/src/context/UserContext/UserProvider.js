import React from "react";
import UserContext from "./UserContext";

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        id: null,
        username: "",
        email: "",
        likes: [],
        publish: [],
      },
      isAuthenticated: false,
      authToken: localStorage.getItem("token"),
    };
  }

  setUser = (user) => {
    this.setState({
      userInfo: {
        id: user._id,
        username: user.username,
        email: user.email,
        likes: user.likes,
        publish: user.publish
      }
    });
  }

  authenticate = () => {
    this.setState({ isAuthenticated: true });
  }

  setToken = (value) => {
    this.setState({ authToken: value });
    localStorage.setItem("token", value);
  }

  updateTheme = (val) => {
    this.setState({ theme: val });
  }

  updateUserInPage = (user) => {
    this.setState({
      userInfo: {
        id: user._id,
        username: user.username,
        email: user.email,
        likes: user.likes,
        publish: user.publish
      }
    });
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          userInfo: this.state.userInfo,
          isAuthenticated: this.state.isAuthenticated,
          authToken: this.state.authToken,
          setUser: this.setUser,
          updateUserInPage: this.updateUserInPage,
          authenticate: this.authenticate,
          setToken: this.setToken,
          updateTheme: this.updateTheme,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;