import React from 'react';
import './FormGroup.css';

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentModifier: '',
      errors: [],
      inputValue: '',
      stateName: "Default",
      success: undefined
    }

    this.handleChange = this.handleChange.bind(this)
    this.generateComponentModifier = this.generateComponentModifier(this)
  }

  componentDidMount() {
    if (this.props.state) {
      this.setState(this.props.state);
    }
  }

  handleChange(event) {
    if (event.target.value === 'fail') {
      this.setState({
        componentModifier: 'FormGroup--is-errored',
        errors: ["So sorry."],
        inputValue: event.target.value,
        success: undefined
      });
    } else if (event.target.value === 'pass') {
      this.setState({
        componentModifier: 'FormGroup--is-success',
        errors: [],
        inputValue: event.target.value,
        success: "Congratulations."
      });
    } else {
      this.setState({
        componentModifier: '',
        errors: [],
        inputValue: event.target.value,
        success: undefined
      });
    }
  }

  generateComponentModifier() {
    if (this.state.errors.length > 1) {
      return 'FormGroup--is-errored'
    }
    if (this.state.success) {
      return 'FormGroup--is-success'
    }

    return ''
  }

  render () {
    const errors = this.state.errors;
    const success = this.state.success;
    
    const errorMessages = errors.map((error, index) => 
        <div key={index} className="FormGroup__error">{error}</div>
    )

    return (
      <fieldset className={ 'FormGroup ' + this.state.componentModifier }>
        <label>
          <span className="FormGroup__label">I am the label</span>
          <input id="FormGroup__userText" 
              className="FormGroup__userText" 
              type="text" 
              placeholder="Type" 
              value={this.state.inputValue}
              onChange={ this.handleChange } />
        </label>

        { errors.length > 0 &&
          <div className="FormGroup__errors">{errorMessages}</div>
        }
        
        { success &&
          <div className="FormGroup__success">{success}</div>
        }
      </fieldset>
    )
  }
}

export default FormGroup