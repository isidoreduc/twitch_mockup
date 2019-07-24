import React from 'react';
import { Field, reduxForm as connect } from 'redux-form';

class StreamCreate extends React.Component {
  onSubmit(formUserInput) {}

  renderError = meta => {
    if (meta.touched && meta.error) {
      return <div className='ui error message'>{meta.error}</div>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    //this is to show the 'error' css class only there's an error
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      // handleSubmit comes from the list of properties delivered by redux-form once hooked up
      // remember to put class of error to form so that semantic ui shows errors
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formUserInput => {
  const errors = {};
  if (!formUserInput.title) errors.title = 'Enter a title';
  if (!formUserInput.description) errors.description = 'Enter a description';
  return errors;
};

export default connect({ form: 'stream create', validate: validate })(StreamCreate);
