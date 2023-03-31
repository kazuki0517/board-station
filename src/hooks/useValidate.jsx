import React, { useState } from 'react'

const useValidate = () => {
 const [formError, setFormError] = useState(false);
 const [formSuccess, setFormSuccess] = useState(false);

 const validate = (value) => {
  if(value.status === 200) {
    setFormSuccess(true);
  } else {
    setFormError(true);
  }
 }
 return { validate, formError, formSuccess, setFormSuccess, setFormError };
}

export {useValidate};

