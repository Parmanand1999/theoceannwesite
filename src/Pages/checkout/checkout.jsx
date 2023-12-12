import styles from "./checkout.module.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { paymentService } from "../../services/all";
import Swal from "sweetalert2";

const Checkout = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  window.scrollTo(0, 0);

  const [selectedProduct, setSelectedProduct] = useState({});

  const [planForm, setPlanForm] = useState({
    durationType: "yearly",
    duration: 1,
    numberOfUsers: selectedProduct.minimum_users,
    months: 12,
  });

  useEffect(() => {
    const { state } = location;
    // console.log(state, "===");
    setSelectedProduct(state.product);
    let newForm = { ...planForm };
    newForm.numberOfUsers = state.product.minimum_users;
    setPlanForm(newForm);
  }, []);

  const changeHandler = (userInput) => {
    // event.preventDefault();
    // console.log(planForm);
    const newForm = { ...planForm };

    if (userInput === "monthDecrease") {
      if (newForm.duration > 1) {
        newForm.duration = newForm.duration - 1;
        if (newForm.durationType === "yearly") {
          newForm.months = newForm.duration * 12;
        } else {
          newForm.months = newForm.months - 1;
        }
      }
    }
    if (userInput === "monthIncrease") {
      newForm.duration = newForm.duration + 1;
      if (newForm.durationType === "yearly") {
        newForm.months = newForm.duration * 12;
      } else {
        newForm.months = newForm.months + 1;
      }
    }
    if (userInput === "userDecrease") {
      if (newForm.numberOfUsers > selectedProduct.minimum_users) {
        newForm.numberOfUsers = newForm.numberOfUsers - 1;
      }
    }
    if (userInput === "userIncrease") {
      newForm.numberOfUsers = newForm.numberOfUsers + 1;
    }
    setPlanForm(newForm);
  };

  const paymentHandler = async (event) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("oceanAllSignupData"));
      const userData = JSON.parse(localStorage.getItem("oceanAllUserData"));
      // console.log(userInfo, "==", userData, "---");
      const { numberOfUsers, duration, durationType } = planForm;

      const amount =
        planForm.numberOfUsers *
          planForm.months *
          selectedProduct.product_price_per_user +
        parseInt(selectedProduct.ATC_adjustment) +
        parseInt(selectedProduct.training_charges) -
        selectedProduct.discount;

      if (amount > 10000) {
        Swal.fire({
          icon: "warning",
          html: `Amount exceed 10,000 , please select less amount`,
          // text: "Please login to continue",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn-min-width waves-effect btn btn-primary",
          },
        }).then(() => {
          // localStorage.removeItem("oceanAllPaymentSession");
          // localStorage.removeItem("oceanSelectedProduct");
          // navigate("/plans");
        });
      }

      const paymentPayload = {
        number_of_users: numberOfUsers,
        quantity: duration,
        period: durationType,
        id: selectedProduct.id,
      };
      if (userInfo) {
        paymentPayload.email = userInfo.email;
      }
      if (userData) {
        paymentPayload.email = userData.email;
      }
      // setIsLoading(true);
      const response = await paymentService(paymentPayload);

      if (response.status === 200) {
        localStorage.setItem("oceanAllPaymentSession", response.session_id);
        // setIsLoading(false);
        window.location.href = response.url;
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const durationHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newForm = { ...planForm };
    if (value === "yearly") {
      newForm.months = newForm.months * 12;
    } else {
      newForm.months = newForm.months / 12;
    }
    newForm[name] = value;
    setPlanForm(newForm);
  };

  return (
    <>
      <div className={styles.userDetail}>
        <div className={styles.DetailLeftDiv}>
          <h3 className={styles.enterDetailHeading}>Enter Details</h3>
          <div className={styles.dataDiv}>
            <label htmlFor="">Plan Duration</label>
            <div className={styles.durationContainer}>
              <div className={styles.selectDurationDiv}>
                <select
                  className={styles.selectDuration}
                  value={planForm.durationType}
                  name="durationType"
                  disabled
                  onChange={durationHandler}
                >
                  {/* <option value="">Select Plan Tenure</option> */}
                  <option value="yearly">Yearly</option>
                  {/* <option value="monthly">Monthly</option> */}
                </select>
              </div>
              <div className={styles.inputDetailNumber}>
                <div
                  type="number"
                  className={styles.plusButton}
                  name="monthDecrease"
                  onClick={() => {
                    changeHandler("monthDecrease");
                  }}
                >
                  -
                </div>
                <div type="text" placeholder="1" className={styles.numberDuration}>
                  {planForm.duration}
                </div>
                <div
                  className={styles.plusButton}
                  name="monthDecrease"
                  onClick={() => {
                    changeHandler("monthIncrease");
                  }}
                >
                  +
                </div>
              </div>
            </div>
            <label htmlFor="">Select Number of users</label>
            <div className={styles.userInputDiv}>
              <div
                className={styles.plusButton}
                onClick={() => {
                  changeHandler("userDecrease");
                }}
              >
                -
              </div>
              <div type="text" placeholder="1" className={styles.userNumber}>
                {planForm.numberOfUsers}
              </div>
              <div
                className={styles.plusButton}
                onClick={() => {
                  changeHandler("userIncrease");
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DetailRightDiv}>
          <div className={styles.checkoutDiv}>
            <h3 className="enterDetailHeading font-bold">Checkout Summary</h3>
            <p className={styles.priceText}>
              Price ${selectedProduct.product_price_per_user}
            </p>

            <div className={styles.userDataDetail}>
              <div className={styles.detailRow}>
                <p className={styles.dataText}>Description</p>
                <p className={styles.dataText}>Months</p>
                <p className={styles.dataText}>User</p>
                <p className={styles.dataText}>ACT Adjustments</p>
                <p className={styles.dataText}>Training Charges</p>
                <p className={styles.dataText}>Discount</p>
              </div>

              <div className={styles.detailRow2}>
                <p className={styles.dataText}>Quantity</p>
                <p className={styles.dataText}>{planForm.months}</p>
                <p className={styles.dataText}>{planForm.numberOfUsers}</p>
                <p className={styles.dataText}>${selectedProduct.ATC_adjustment}</p>
                <p className={styles.dataText}>${selectedProduct.training_charges}</p>
                <p className={styles.dataText}>${selectedProduct.discount}</p>
              </div>
            </div>
            <div className={styles.totalDiv}>
              <p className={styles["font-bold"]}>Total</p>
              <p>
                $
                {planForm.numberOfUsers *
                  planForm.months *
                  selectedProduct.product_price_per_user +
                  parseInt(selectedProduct.ATC_adjustment) +
                  parseInt(selectedProduct.training_charges) -
                  selectedProduct.discount}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.checkoutLowerSection}>
        {" "}
        <Button color="primary" className={styles.payButton} onClick={paymentHandler}>
          Pay
        </Button>{" "}
        <Button
          color="secondary"
          className={styles.cancelButton}
          onClick={() => {
            Navigate("/plans");
          }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Checkout;
