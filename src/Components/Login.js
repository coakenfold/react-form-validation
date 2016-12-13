import React from 'react';
import './Login.css';
//import FormGroup from './Components/FormGroup';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: "",
      nameError: "",
      passwordValue: "",
      passwordError: "",
      formError: "",
      formSuccess: ""
    }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

    this.validateName = this.validateName.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
  }



  handleChangeName(event) {
    this.setState({
      nameValue: event.target.value,
      nameError: this.validateName(event.target.value)
    });
  }

  handleChangePassword(event) {
    this.setState({
      passwordValue: event.target.value,
      passwordError: this.validatePassword(event.target.value)
    });
  }

  validateName(input) {
    if (input === 'error') {
      return "You have triggered an error!";
    }
    return ""
  }

  validatePassword(input) {
    if (input === 'error') {
      return "You have triggered an error!";
    }
    return ""
  }

  formError(fields) {
    if (fields.nameError && fields.passwordError) {
      return "Problem with both fields I'm afraid."
    }
    if (fields.nameError) {
      return "Problem with the name."
    }
    if (fields.passwordError) {
      return "Problem with the password."
    }

    return ""
  }
  formSuccess(fields) {
    if (fields.nameValue !== "" && fields.nameError === "" && fields.passwordValue !== "" && fields.passwordError === "") {
      return "Good on you."
    }
    return ""
  }
  formValid(fields) {
    if (fields.nameValue !== "" && fields.nameError === "" && fields.passwordValue !== "" && fields.passwordError === "") {
      return true
    }
    return false
  }

  render () {
    const nameValue = this.state.nameValue
    const nameError = this.state.nameError
    const passwordValue = this.state.passwordValue
    const passwordError = this.state.passwordError
    const formError = this.formError({nameError, passwordError})
    const formSuccess = this.formSuccess({nameValue, nameError, passwordValue, passwordError})
    const formValid = this.formValid({nameValue, nameError, passwordValue, passwordError})
    
    let button = null;
    if (formValid) {
      button = <button type='submit' className='Login__submit'>Submit</button>
    } else {
      button = <button disabled type='submit' className='Login__submit'>Submit</button>
    }
    
    return (
      <div className='Login__container'>
        <h1>Login</h1>
        <p className="Login__note">Type "error" to trigger validation messages</p>
        <form className={'Login '} autoComplete="off">
          <fieldset className={'Login__form-group '}>
            <label>
              <input id="Login__name" 
                  className="Login__name" 
                  type="text" 
                  value={ nameValue }
                  onChange={ this.handleChangeName } />
              <span className="Login__label">Name</span>
            </label>

            { nameError &&
              <label className="Login__error-field" htmlFor="Login__name">
                { nameError }
              </label>
            }
          </fieldset>

          <fieldset className={'Login__form-group '}>
            <label>
              <input id="Login__password" 
                  className="Login__password" 
                  type="password" 
                  value={ passwordValue }
                  onChange={ this.handleChangePassword } />
              <span className="Login__label">Password</span>
            </label>

            { passwordError &&
              <label className="Login__error-field" htmlFor="Login__password">
                { passwordError }
              </label>
            }
          </fieldset>

          { formError &&
            <div className="Login__error-form">
              { formError }
            </div>
          }
          
          { formSuccess &&
            <div className="Login__success-form">
              { formSuccess }
            </div>
          }

          { button }
          
        </form>
      </div>
    )
  }
}

export default Login
