export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateForm = (values) => {
  const errors = {};

  if (!values.user_name?.trim()) {
    errors.user_name = "Name is required";
  }

  if (!values.user_email?.trim()) {
    errors.user_email = "Email is required";
  } else if (!validateEmail(values.user_email)) {
    errors.user_email = "Invalid email address";
  }

  if (!values.message?.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};
