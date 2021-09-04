import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    msj: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setValues({
      name: "",
      email: "",
      msj: "",
    });
    setIsSubmitting(false);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }// eslint-disable-next-line
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    reset,
  };
};

export default useForm;