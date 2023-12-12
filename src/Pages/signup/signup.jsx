import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import signUpValidationFunction from "../../validations/signup";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { signupService } from "../../services/all";
import { FaRegEye } from "react-icons/fa";
import { globalStore } from "../../store/globalStore";
import { toast } from "react-toastify";
import google from "../../Componants/Assets/signup-img/google_icon.svg";
import outlook from "../../Componants/Assets/signup-img/outlook.svg";
import facebook from "../../Componants/Assets/signup-img/facebook_icon.svg";
import CountryData from "country-data";

const Signup = () => {
  const [signUpForm, setsignUpForm] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    phone_number: "",
    country_code: "+91",
    country: "",
    dob: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    tnc: false,
  });
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const { buttonDisabled } = globalStore();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  useEffect(() => {
    setCountries(CountryData.countries.all);
  }, []);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    const newForm = { ...signUpForm };
    newForm[field] = value;
    // console.log(newForm, "55");
    setsignUpForm(newForm);
  };

  const countryHandler = (userInput) => {
    setSelectedCountry(userInput.countryCallingCodes[0]);
    const newForm = { ...signUpForm };
    newForm.country_code = userInput.countryCallingCodes[0];
    newForm.country = userInput.name;
    setsignUpForm(newForm);
  };

  const keyHandler = (userInput) => {
    const { event, name } = userInput;
    if (name === "company_name" && !/^[A-Za-z \b]+$/.test(event.key)) {
      event.preventDefault(); // Prevent entering numbers
    }
    if (name === "first_name" && !/^[A-Za-z \b]+$/.test(event.key)) {
      event.preventDefault(); // Prevent entering numbers
    }
    if (name === "last_name" && !/^[A-Za-z \b]+$/.test(event.key)) {
      event.preventDefault(); // Prevent entering numbers
    }
    if (name === "email" && !/^[a-zA-Z0-9\-_.@]|Backspace$/.test(event.key)) {
      event.preventDefault();
    }
    if (
      name === "phone_number" &&
      !/^[0-9]|Backspace$|^ArrowLeft$|^ArrowRight$|^Control$|^a$|^c$|^v$/.test(
        event.key
      )
    ) {
      event.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(signUpForm, "fff");
      const validationErrors = signUpValidationFunction(signUpForm);
      setErrors(validationErrors);
      // console.log(validationErrors);
      if (Object.keys(validationErrors).length < 1) {
        const newForm = { ...signUpForm };
        newForm.company_name = newForm.company_name
          .toLowerCase()
          .replace(/\s/g, "");
        const response = await signupService(newForm);
        if (response.status === 200) {
          toast.success("Signup success, please continue");
          localStorage.setItem(
            "oceanAllSignupData",
            JSON.stringify(signUpForm)
          );
          navigate("/plans");
        } else {
          toast.success(
            `Account already exists with given ${Object.keys(response.error)[0]
            }`
          );
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  function blurhandler(event) {
    event.preventDefault();
    const { name } = event.target;
    const validationErrors = signUpValidationFunction({
      ...signUpForm,
      [name]: signUpForm[name],
    });
    setErrors({ ...errors, [name]: validationErrors[name] });
  }

  return (
    <>
      <body className={styles.signupBody}>
        <div className={styles.background}>
          <div className={styles.maincontent}>
            <div className={styles.formDiv}>
              <div className={styles.formContainer}>
                <div className={styles.formwidthbox}>
                  <div className={styles.topheadingSignup}>
                    <h2 className={styles.signUp}>Sign Up</h2>
                    <p className={styles.subheading}>
                      Create your account by filling the information
                    </p>
                  </div>

                  <div className={styles.firstRow}>
                    <div className={styles.inputbox}>
                      <span>First Name</span>
                      <input
                        type="text"
                        value={signUpForm.first_name}
                        name="first_name"
                        id=""
                        onBlur={blurhandler}
                        onKeyDown={(event) => {
                          keyHandler({ event, name: "first_name" });
                        }}
                        onChange={(e) =>
                          handleChange("first_name", e.target.value)
                        }
                        placeholder="Enter First Name"
                        className={styles.inputdata}
                      />
                      <div className={styles.errorFirstname}>
                        {errors.first_name && (
                          <p className={styles.validationErrortext}>
                            {errors.first_name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={styles.inputbox}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        value={signUpForm.last_name}
                        onBlur={blurhandler}
                        name="last_name"
                        onKeyDown={(event) => {
                          keyHandler({ event, name: "last_name" });
                        }}
                        onChange={(e) =>
                          handleChange("last_name", e.target.value)
                        }
                        placeholder="Enter Last Name"
                        className={styles.inputdata}
                      />
                      <div className={styles.errorLastname}>
                        {errors.last_name && (
                          <p className={styles.validationErrortext}>
                            {errors.last_name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.firstRow}>
                    <div className={styles.inputbox}>
                      <span>Organization Name</span>
                      <input
                        type="text"
                        value={signUpForm.company_name}
                        name="company_name"
                        onBlur={blurhandler}
                        onKeyDown={(event) => {
                          keyHandler({ event, name: "company_name" });
                        }}
                        onChange={(e) =>
                          handleChange("company_name", e.target.value)
                        }
                        placeholder="Enter Organization Name "
                        className={styles.inputdata}
                      />
                      <div className={styles.errorCompanyname}>
                        {errors.company_name && (
                          <p className={styles.validationErrortext}>
                            {errors.company_name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={styles.inputbox}>
                      <span>Country</span>
                      <select
                        id=""
                        className={styles.selectCountry}
                        defaultValue={selectedCountry}
                        onBlur={blurhandler}
                        name="country"
                        onChange={(e) => {
                          handleChange("country", e.target.value);
                          const selectedCountry = countries.find(
                            (country) => country.name === e.target.value
                          );
                          if (selectedCountry) {
                            countryHandler(selectedCountry);
                          }
                        }}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>

                      <div className={styles.errorCountry}>
                        {errors.country && (
                          <p className={styles.validationErrortext}>
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.firstRow}>
                    <div className={styles.inputbox}>
                      <span>Email</span>
                      <input
                        type="text"
                        value={signUpForm.email}
                        onBlur={blurhandler}
                        name="email"
                        onKeyDown={(event) => {
                          keyHandler({ event, name: "email" });
                        }}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="Enter Email Id"
                        className={styles.inputdata}
                      />
                      <div className={styles.errorEmail}>
                        {errors.email && (
                          <p className={styles.validationErrortext}>{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className={styles.inputbox}>
                      <span className={styles.span}>Mobile Number</span>
                      <div className={styles.mbdiv}>
                        <div className={styles.cselectdiv}>
                          <div className={styles.codeSelector}>
                            <p>{selectedCountry}</p>
                          </div>
                          <div className={styles.errorCountrycode}></div>
                        </div>
                        <div className={styles.mobileDiv}>
                          <input
                            type="text"
                            value={signUpForm.phone_number}
                            onBlur={blurhandler}
                            name="phone_number"
                            onKeyDown={(event) => {
                              keyHandler({ event, name: "phone_number" });
                            }}
                            onChange={(e) =>
                              handleChange("phone_number", e.target.value)
                            }
                            placeholder="Enter Mobile Number"
                            className={styles.inputdataMob}
                          />
                          <div className={styles.errorPhonenumber}>
                            {errors.phone_number && (
                              <p className={styles.validationErrortext}>
                                {errors.phone_number}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.firstRow}>
                    <div className={styles.inputbox}>
                      <span>Password</span>
                      <div className={styles.passwordInputDiv}>
                        <div id="passwordInput" className={styles.eyeclass}>
                          <input
                            type={showPassword ? "text" : "password"}
                            value={signUpForm.password}
                            onBlur={blurhandler}
                            name="password"
                            onChange={(e) =>
                              handleChange("password", e.target.value)
                            }
                            placeholder="Enter password"
                            className={styles.inputdata}
                          />

                          <div
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                            className={styles.eyeIcon}
                          >
                            <FaRegEye />
                          </div>
                        </div>

                      </div>
                      <div className={styles.errorPassword}>
                        {errors.password && (
                          <p className={styles.passworderror}>{errors.password}</p>
                        )}
                      </div>
                    </div>
                    <div className={styles.inputbox}>
                      <span>Confirm Password</span>
                      <div className={styles.passwordInputDiv}>
                        <div id="passwordInput" className={styles.eyeclass}>
                          <input
                            type={confirmPassword ? "text" : "password"}
                            value={signUpForm.confirmPassword}
                            name="confirmPassword"
                            onBlur={blurhandler}
                            onChange={(e) =>
                              handleChange("confirmPassword", e.target.value)
                            }
                            placeholder="Confirm Password"
                            className={styles.inputdata}
                          />
                          <div
                            onClick={() => {
                              setConfirmPassword(!confirmPassword);
                            }}
                            className={styles.eyeIcon}
                          >
                            <FaRegEye />
                          </div>
                        </div>

                      </div>
                      <div className={styles.errorConfirmpassword}>
                        {errors.confirmPassword && (
                          <p className={styles.passworderror}>
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.remember}>
                    <label className={styles.remembermediv}>
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={signUpForm.rememberMe}
                        onBlur={blurhandler}
                        onChange={(e) =>
                          handleChange("rememberMe", e.target.checked)
                        }
                        className={styles.rememberme}
                      />
                      Remember me
                    </label>
                  </div>
                  <div className={styles.remember}>
                    <label className={styles.remembermediv}>
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        checked={signUpForm.agreeToTerms}
                        onBlur={blurhandler}
                        name="tnc"
                        onChange={(e) => handleChange("tnc", e.target.checked)}
                        className={styles.rememberme}
                      />
                      <div>
                        {" "}
                        I accept the
                        <a style={{ "margin-left": "2px" }}>
                          Terms and conditions
                        </a>
                      </div>
                    </label>
                  </div>

                  <div className={styles.signinbox}>
                    <button
                      className={styles["signup_button"]}
                      disabled={buttonDisabled}
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className={styles["login-link"]}>
                    Already have an account?{" "}
                    <Link
                      className={styles.loginLink}
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login Here
                    </Link>
                  </p>

                  <div className={styles.orbox}>
                    <hr className={styles.orhr} />
                    OR
                    <hr className={styles.orhr} />
                  </div>

                  <div className={styles.options}>
                    <div className={styles["icon_div"]}>
                      <img src={google} alt="" />
                    </div>

                    <div className={styles["icon_div"]}>
                      <img src={outlook} alt="" />
                    </div>

                    <div className={styles["icon_div"]}>
                      <img src={facebook} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.gifDiv}>
              <img
                src={require("../../Componants/Assets/signup-img/signup_img.png")}
                alt=""
                className={styles.gif}
              />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Signup;
