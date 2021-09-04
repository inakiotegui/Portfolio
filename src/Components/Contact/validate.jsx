export default function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }  
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.msj) {
      errors.msj = "A message is required";
    }
    return errors;
}