import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return(
      <div className="login">
        <form className="admin-login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required pattern="\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" aria-describedby="passwordHelp" required minlength="8" maxlength="72" pattern="(\w*[-\/\\^$*+?!&.()|[\]{}]*){3,}" />
          </div>
          <button type="submit" class="btn btn-primary">Log In as Admin</button>
        </form>
      </div>
      );
  }
}

export default LogIn;