import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import '../index.css';

import FormGroupStates from '../FormGroupStates'
import FormGroup from '../FormGroup';

const constrained = {
  width: '200px',
  margin: '0 auto'
}
storiesOf('FormGroup', module)
  .add('Initial State', () => (
    <div>
      <FormGroup />
      <FormGroup />
      <FormGroup />
    </div>
  ))
  .add('Single Error', () => (
    <div>
      <FormGroup state={FormGroupStates.Errored} />
      <FormGroup state={FormGroupStates.Errored} />
      <FormGroup state={FormGroupStates.Errored} />
    </div>
  ))
  .add('Multiple Errors', () => (
    <div>
      <FormGroup state={FormGroupStates.Errors} />
      <FormGroup state={FormGroupStates.Errors} />
      <FormGroup state={FormGroupStates.Errors} />
    </div>
  ))
  .add('Success', () => (
    <div>
      <FormGroup state={FormGroupStates.Success} />
      <FormGroup state={FormGroupStates.Success} />
      <FormGroup state={FormGroupStates.Success} />
    </div>
  ))
  .add('Constrained > Initial State', () => (
    <div style={constrained}>
      <FormGroup />
      <FormGroup />
      <FormGroup />
    </div>
  ))
  .add('Constrained > Single Error', () => (
    <div style={constrained}>
      <FormGroup state={FormGroupStates.Errored} />
      <FormGroup state={FormGroupStates.Errored} />
      <FormGroup state={FormGroupStates.Errored} />
    </div>
  ))
  .add('Constrained > Multiple Errors', () => (
    <div style={constrained}>
      <FormGroup state={FormGroupStates.Errors} />
      <FormGroup state={FormGroupStates.Errors} />
      <FormGroup state={FormGroupStates.Errors} />
    </div>
  ))
  .add('Constrained > Success', () => (
    <div style={constrained}>
      <FormGroup state={FormGroupStates.Success} />
      <FormGroup state={FormGroupStates.Success} />
      <FormGroup state={FormGroupStates.Success} />
    </div>
  ))
