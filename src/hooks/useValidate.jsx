import { useState } from 'react'

const useValidate = () => {
 const [formError, setFormError] = useState(false);
 const [formSuccess, setFormSuccess] = useState(false);

 const validate = (value) => {
  if(value.status === 200) {
    setFormError(false);
    setFormSuccess(true);
  } else {
    setFormSuccess(false);
    setFormError(true);
  }
 }

 return { validate,setFormError, setFormSuccess, formError, formSuccess};
}

export {useValidate};

