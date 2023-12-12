const loginValidations = (userInput) => {
  // console.log(userInput, "//")
  const errors = {};
  // const email_pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
  const email_pattern =
    /^(?=.{1,35}$)[a-zA-Z0-9.,_@-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

  if (!userInput.email) {
    errors.email = "Email is required";
  }
  if (!email_pattern.test(userInput?.email)) {
    errors.email = "Please enter a valid Email";
  }

  if (!userInput.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default loginValidations;
