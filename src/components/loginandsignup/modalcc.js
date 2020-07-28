import React from 'react'
import {MODAL_CLASS} from './UserAuthcc'
import {useDispatch} from 'react-redux'

export let MODAL_CLASS_FORM = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <div class="login_modals_graphics">
        <div class="header_style_external">
          <h2> Check out my modals: </h2>
        </div>
        <MODAL_CLASS
          dispatch={dispatch}
          formID="loginForm"
          passwordID="loginPassword"
          emailID="loginEmail"
          function="Log in to an account"
          action="Log in"
          purpose="Log into an account"
        />
        <MODAL_CLASS
          dispatch={dispatch}
          formID="signupForm"
          passwordID="signupPassword"
          emailID="signupEmail"
          function="Sign up for a new account"
          action="Sign up"
          purpose="Sign up with this form"
        />
      </div>
    </div>
  );
};

  
  
