import React from 'react';
import {Link} from 'react-router-dom';


class Login extends React.Component{

    render(){

        return (
            <div>
            <div className="container">
              <div className="card card-login mx-auto mt-5">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" autoFocus="autofocus"/>
                        <label htmlFor="inputEmail">Email address</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required"/>
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value="remember-me"/>
                          Remember Password
                        </label>
                      </div>
                    </div>
                    <a className="btn btn-primary btn-block" href="index.html">Login</a>
                  </form>
                  <div className="text-center">
                    <Link to="/" className="d-block small mt-3">Register an account</Link>
                  </div>
                </div>
              </div>
            </div>
                    </div>
        )
    }
}

export default Login