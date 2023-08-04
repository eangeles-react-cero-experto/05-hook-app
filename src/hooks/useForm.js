import { useState } from "react";

export const useForm = (initialFormValue = {}) => {
  const [formState, setFormState] = useState(initialFormValue);

  const onInputChanged = (event) => {
    const {
      target: { name, value },
    } = event;

    setFormState({ ...formState, [name]: value });
  };

  const onFormReseted = () => {
    setFormState(initialFormValue);
  };

  return {
    formState,
    onInputChanged,
    onFormReseted,
  };
};
