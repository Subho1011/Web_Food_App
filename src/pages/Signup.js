import React from 'react';
import './Signup.css';
const Signup = () => {

  const ModalOverlay = () => { };
  const SignupForm = () => {
    return (
      <div>
        <form>
          <div className="form-control">
            <div className='form-details'>
              <div className="form-heading">
                <h1>Sign up to start eating amazing</h1>
              </div>
              <div className="form-name">
                <label>Name</label><br />
                <input />
              </div>
              <div className="form-email">
                <label>Email</label><br />
                <input />
              </div>
              <div className="form-phone">
                <label>Phone</label><br />
                <input />
              </div>
            </div>
            <p className='line'></p>
            <div className="form-address">
              <span className="city">
                <input />
              </span>
              <span className="state">
                <input />
              </span>
              <span className="pincode">
                <input />
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
  return (
    <React.Fragment>
      <SignupForm />
    </React.Fragment>
  );
}

export default Signup;