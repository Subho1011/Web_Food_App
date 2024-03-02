import React from 'react';
import './Signup.css';


const SignupForm = (props) => {

  const closeModalHandler = () => {
    props.closeModal();
  }

  return (
    <div className='modal-content' >
      <form >
        <div className="form-control">
          <div className='form-details'>
            <div className="form-heading">
              <h1>Sign up to start eating amazing</h1>
            </div>
            <div className="form-name">
              <label>Name</label>
              <input />
            </div>
            <div className="form-email">
              <label>Email</label>
              <input />
            </div>
            <div className="form-phone">
              <label>Phone</label>
              <input />
            </div>
            <div className='form-action'>
              <button onClick={closeModalHandler}>close</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
