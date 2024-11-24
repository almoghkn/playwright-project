export const siteURL = "https://www.saucedemo.com/";
export const cartURL = "https://www.saucedemo.com/cart.html";
export const informationURL =
  "https://www.saucedemo.com/checkout-step-one.html";
export const overviewURL = "https://www.saucedemo.com/checkout-step-two.html";
export const completeURL = "https://www.saucedemo.com/checkout-complete.html";

export const positiveUsers = [
  "standard_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
];
export const password = "secret_sauce";

export const negativeUsers = {
  name: "locked_out_user",
  expected: "Epic sadface: Sorry, this user has been locked out.",
};

export const invalidScenarios = [
  {
    name: "standard_user",
    password: "incorrect_password",
    errorMessage:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "incorrect_username",
    password: "secret_sauce",
    errorMessage:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "incorrect_username",
    password: "incorrect_password",
    errorMessage:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "",
    password: "secret_sauce",
    errorMessage: "Epic sadface: Username is required",
  },
  {
    name: "standard_user",
    password: "",
    errorMessage: "Epic sadface: Password is required",
  },
  {
    name: "",
    password: "",
    errorMessage: "Epic sadface: Username is required",
  },
];
