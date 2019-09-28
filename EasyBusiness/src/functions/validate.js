export default function validater(values) {
  let errors = {};

  if (!values.username) {
    errors.username = "✗ Username is required";
  } else if (!/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(values.username)) {
    errors.username = "✗ Username is invalid";
  }

  if (!values.password) {
    errors.password = "✗ Password is required";
  } else if (values.password.length < 5) {
    errors.password = "✗ Password needs to be more than 5 characters";
  }

  if (!values.confirm) {
    errors.confirm = "✗ Please confirm your password";
  } else if (values.password !== values.confirm) {
    errors.confirm = "✗ Confirm Password does not match your Password";
  }

  if (!values.phone) {
    errors.phone = "✗ Phone Number is required";
  } else if (values.phone.length < 10) {
    errors.phone = "✗ Phone Number must not be less than 10 digits";
  }

  return errors;
}
