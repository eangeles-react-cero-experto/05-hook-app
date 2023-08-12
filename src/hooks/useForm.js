import { useState } from "react";

export const useForm = (initialFormValue = {}) => {
  const [formState, setFormState] = useState(initialFormValue);

  const onInputChanged = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const resetForm = () => {
    setFormState(initialFormValue);
  };

  return {
    formState,
    onInputChanged,
    resetForm,
  };
};
