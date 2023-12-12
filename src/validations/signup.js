const signUpValidationFunction = (userInput) => {
  const errors = {};

  const email_pattern =
    /^(?=.{1,35}$)[a-zA-Z0-9.,_@-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  if (!userInput.first_name) {
    errors.first_name = "First Name is required";
  }
  if (!userInput.last_name) {
    errors.last_name = "Last Name is required";
  }
  if (!userInput.email) {
    errors.email = "Email is required";
  }
  if (!email_pattern.test(userInput?.email)) {
    errors.email = "Please enter a valid Email";
  }
  if (!userInput.company_name) {
    errors.company_name = "Organization name is required";
  }
  if (!userInput.phone_number) {
    errors.phone_number = "Contact is required";
  }

  if (!userInput.country) {
    errors.country = "Please select country";
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
  if (!userInput.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  }
  if (userInput.confirmPassword !== userInput.password) {
    errors.confirmPassword = "Password didn`t match";
  }

  return errors;
};

export default signUpValidationFunction;
