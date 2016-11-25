import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "Default",
      componentModifier: "",
      errors: [],
      success: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.state) {
      this.setState(this.props.state);
    }
  }

  handleSubmit(event) {
    //this.setState({inputValue: event.target.value});
  }

  render () {
    const errors = this.state.errors
    const success = this.state.success
    return (
      <form className={'Login ' + this.state.componentModifier}>

        {this.props.children}

        { errors && errors.length > 0 &&
          <div className="Login__error">{errors[0].errorMessage}</div>
        }
        
        { success.successMessage &&
          <div className="Login__success">{success.successMessage}</div>
        }

        <button type='submit' className='Login__button'>Submit</button>
      </form>
    )
  }
}

export default Login