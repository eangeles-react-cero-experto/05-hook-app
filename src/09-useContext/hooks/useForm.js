import { useCallback, useEffect, useRef, useState } from "react";

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const formRef = useRef();
  const submitCallbackRef = useRef(null);

  const onSubmit = useCallback((callback) => {
    submitCallbackRef.current = callback;
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitCallbackRef.current) {
      submitCallbackRef.current();
    }
  };

  useEffect(() => {
    formRef.current.addEventListener("input", handleInput);
    formRef.current.addEventListener("submit", handleSubmit);
    return () => {
      formRef.current?.removeEventListener("input", handleInput);
      formRef.current?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return {
    formRef,
    formState,
    onSubmit,
  };
};
