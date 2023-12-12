const createUserValidations = (userInput) => {
  const errors = {};

  const email_pattern =
    /^(?=.{1,35}$)[a-zA-Z0-9.,_@-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  if (!userInput.first_name) {
    errors.first_name = "First Name is required";
  }

  if (!userInput.email) {
    errors.email = "Email is required";
  }
  if (!email_pattern.test(userInput?.email)) {
    errors.email = "Please enter a valid Email";
  }

  if (!userInput.phone_number) {
    errors.phone_number = "Contact is required";
  }

  if (!userInput.country_code) {
    errors.country_code = "Please select country code";
  }

  if (!userInput.password) {
    errors.password = "Password is required";
  }
  if (!passwordRegex.test(userInput?.password)) {
    errors.password =
      "A valid pwd contains atleast 1 Small , 1 Capital , 1 Numeric and 1 special character with minimum 8 characters length";
  }
  if (!userInput.role) {
    errors.role = "Please assign some role";
  }

  return errors;
};

export default createUserValidations;
