const FormGroupStates = {
  Errored: {
    stateName: "Errored",
    componentModifier: "FormGroup--is-errored",
    inputValue: "I've put in bad input.",
    errors:["This is incorrect."]
  },
  Errors: {
    stateName: "Errors",
    componentModifier: "FormGroup--is-errored",
    inputValue: "I've put in bad input.",
    errors:["This is incorrect.","This is also incorrect."]
  },
  Success: {
    stateName: "Success",
    componentModifier: "FormGroup--is-success",
    inputValue: "I have nice input!",
    success: "This is good."
  }
}

export default FormGroupStates