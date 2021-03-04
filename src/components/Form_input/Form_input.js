import React from 'react';
import './Form_input.scss';

const Form_input = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default Form_input;
