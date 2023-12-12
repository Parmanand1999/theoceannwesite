import interceptorFunction from "./interceptot";

const token = localStorage.getItem("oceanAllToken");

const loginService = async (userInput) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}client/login`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    };

    const response = await interceptorFunction(url, options);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};

const signupService = async (userInput) => {
  // console.log(userInput, "==");
  try {
    const url = `${process.env.REACT_APP_BASE_URL}client/signup`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    };

    const response = await interceptorFunction(url, options);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};

const productListService = async (userInput) => {
  // console.log(userInput, "==");
  try {
    const url = `${process.env.REACT_APP_BASE_URL}client/get_product_list`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(userInput),
    };

    const response = await interceptorFunction(url, options);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};

const subscriptionListService = async (userInput) => {
  // console.log(userInput, "==");
  try {
    const url = `${process.env.REACT_APP_BASE_URL}client/subscriptions`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      // body: JSON.stringify(userInput),
    };

    const response = await interceptorFunction(url, options);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};

const paymentService = async (userInput) => {
  // console.log(userInput, "==");
  try {
    const url = `${process.env.REACT_APP_BASE_URL}client/checkout_payment_session`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    };

    const response = await interceptorFunction(url, options);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};

const paymentSuccessService = async (userInput) => {
  // console.log(userInput, "==");
  try {
    const url = `${process.env.REACT_APP_BASE_URL}client/payment_success`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    };

    const response = await interceptorFunction(url, options);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};

export {
  loginService,
  signupService,
  productListService,
  paymentService,
  paymentSuccessService,
  subscriptionListService,
};
