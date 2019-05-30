import React from "react";
import MaskedInput from 'react-text-mask';


const Input = props => {

  const {
    values,
    touched,
    errors,
    dirty,
    onChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    mask,
    placeholder,
    label
  } = props;

  return (
    <MaskedInput
      label={label}
      placeholder={placeholder}
      id="CodCnpj"
      name='CodCnpj'
      type="text"
      mask={mask}
      error={touched && errors}
      value={values}
      onChange={onChange}
      onBlur={handleBlur}
    />
  );
};
export default Input;