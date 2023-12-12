import styles from "./login.module.css";
import companyLogo from "../../Componants/Assets/signup-img/company_logo.svg";
import { useState } from "react";
import loginValidations from "../../validations/login";
import { Link } from "react-router-dom";
import { loginService } from "../../services/all";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import google from "../../Componants/Assets/signup-img/google_icon.svg";
import outlook from "../../Componants/Assets/signup-img/outlook.svg";
import facebook from "../../Componants/Assets/signup-img/facebook_icon.svg";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const blurHandler = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const validationErrors = loginValidations({
      ...loginForm,
      [name]: loginForm[name],
    });
    setErrors({ ...errors, [name]: validationErrors[name] });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const validationErrors = loginValidations(loginForm);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length < 1) {
      try {
        const data = await loginService(loginForm);
        // console.log(data, "jjjj");
        if (data.status === 200) {
          // Successful login
          toast.success("Login Success");
          //   console.log(data);
          localStorage.removeItem("oceanAllSignupData");
          localStorage.setItem("oceanAllToken", data.token);
          const userData = atob(data.token.split(".")[1]);
          localStorage.setItem("oceanAllUserData", userData);
          const parsedUserInfo = JSON.parse(userData);
          // console.log(parsedUserInfo);
          localStorage.setItem("isAdmin", data.is_admin);
          if (parsedUserInfo.is_subscribed === true) {
            navigate("/profile");
            // window.location.href = `http://192.168.18.37:3000/login?token=${data.token}`;
            // window.location.href = `${process.env.REACT_APP_REDIRECT_URL}?token=${data.token}`;
          } else if (
            !Object.keys(parsedUserInfo).includes("is_subscribed") &&
            !Object.keys(parsedUserInfo).includes("user_domain")
          ) {
            localStorage.setItem("isAdmin", false);
            // setIsAdmin(false);

            navigate("/profile");
          } else {
            navigate("/plans");
          }
        } else {
          // Handle other status codes (e.g., display an error message)
          toast.success(data.err);
          console.error(`Login failed with status code: ${data.status}`);
        }
      } catch (error) {
        //
        console.error("An error occurred during login:", error);
      }
    }
  };

  return (
    <>
      <body className={styles.loginBody}>
        <div className={styles.background}>
          <div className={styles.maincontent}>
            <div className={styles.formDiv}>
              <div className={styles.formContainer}>
                <div className={styles.formwidthbox}>
                  <div className={styles.companylogodiv}>
                    <img
                      src={companyLogo}
                      alt="Company Logo"
                      className={styles.companylogo}
                    />
                  </div>
                  <div className={styles.topheadingSignup}>
                    <h3 className={styles.signUp}>Login</h3>
                    <p className={styles.subheading}>
                      Create your account by filling the information
                    </p>
                  </div>
                  <form onSubmit={submitHandler}>
                    <div className={styles.firstRow}>
                      <div className={styles.inputbox}>
                        <span className={styles.span}>Email</span>
                        <input
                          type="text"
                          name="email"
                          id=""
                          onChange={changeHandler}
                          onBlur={blurHandler}
                          placeholder="Enter your email"
                          className={styles.inputdata}
                        />
                        <div className={styles.errorFirstname}>
                          {errors.email && (
                            <p className={styles.validationErrortext}>
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.firstRow}>
                      <div className={styles.inputbox}>
                        <span>Password</span>
                        <div className={styles.passwordContainerLogin}>
                          <div id="passwordField" className={styles.eyeclass}>
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              onChange={changeHandler}
                              onBlur={blurHandler}
                              id=""
                              placeholder="Enter password"
                              className={styles.inputdata}
                            />
                            <div
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                              className={styles.eyeIconLogin}
                            >
                              <FaRegEye />
                            </div>
                          </div>
                        </div>

                        <div className={styles.errorPassword}>
                          {errors.password && (
                            <p className={styles.validationErrortext}>
                              {errors.password}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.remember}>
                      <label className={styles.remembermediv}>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className={styles.rememberme}
                        />
                        Remember me
                      </label>
                    </div>

                    <div className={styles.signinbox}>
                      <button className={styles.signIn_button}>Login</button>
                    </div>
                    <p className={styles["login-link"]}>
                      Don't have an account?
                      <Link
                        className={styles.loginLink}
                        onClick={() => {
                          navigate("/signup");
                        }}
                      >
                        SignUp
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
                  </form>
                </div>
              </div>
            </div>

            <div className={styles.gifDiv}>
              <img
                src={require("../../Componants/Assets/signup-img/signin_Img.png")}
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

export default Login;
