import { useState } from 'react';

export const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);
  const reset = () => setValues(defaults);
  const updateValues = (e) => {
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = +value;
    }
    setValues({ ...values, [e.target.name]: value });
  };
  return [values, updateValues, reset];
};
