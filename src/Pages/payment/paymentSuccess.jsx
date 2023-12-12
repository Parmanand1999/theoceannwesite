import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { paymentSuccessService } from "../../services/all";
import { useNavigate } from "react-router-dom";

const Paymentscuccess = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("Please login to continue");
  useEffect(() => {
    paymentSuccessHandler();
    const product = localStorage.getItem("oceanSelectedProduct");
    // console.log(product);
    setProductName(product);
  }, []);

  const paymentSuccessHandler = async () => {
    try {
      const sessionId = localStorage.getItem("oceanAllPaymentSession");
      const response = await paymentSuccessService({ session_id: sessionId });
      if (response.payment_status === true) {
        Swal.fire({
          icon: "success",
          html: `Payment Completed successfully`,
          // text: "Please login to continue",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn-min-width waves-effect btn btn-primary",
          },
        }).then(() => {
          localStorage.removeItem("oceanAllPaymentSession");
          localStorage.removeItem("oceanSelectedProduct");
          localStorage.removeItem("oceanAllSignupData");
          if (localStorage.getItem("oceanAllToken")) {
            const token = localStorage.getItem("oceanAllToken");
            const userData = JSON.parse(atob(token.split(".")[1]));
            userData.is_subscribed = true;
            localStorage.setItem("oceanAllUserData", JSON.stringify(userData));
            navigate("/profile");
          } else {
            navigate("/login");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          html: `Payment Failed`,
          // text: "Please login to continue",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn-min-width waves-effect btn btn-primary",
          },
        }).then(() => {
          localStorage.removeItem("oceanAllPaymentSession");
          localStorage.removeItem("oceanSelectedProduct");
          navigate("/plans");
        });
      }
      // if (response.status === 500) {
      //   Swal.fire({
      //     icon: "success",
      //     html: `Payment Completed successfully`,
      //     // text: "Please login to continue",
      //     confirmButtonText: "OK",
      //     customClass: {
      //       confirmButton: "btn-min-width waves-effect btn btn-primary",
      //     },
      //   }).then(() => {
      //     localStorage.removeItem("oceanAllPaymentSession");
      //     localStorage.removeItem("oceanSelectedProduct");
      //     localStorage.removeItem("oceanAllSignupData");
      //     if (localStorage.getItem("oceanAllToken")) {
      //       const token = localStorage.getItem("oceanAllToken");
      //       const userData = JSON.parse(atob(token.split(".")[1]));
      //       userData.is_subscribed = true;
      //       localStorage.setItem("oceanAllUserData", JSON.stringify(userData));
      //       navigate("/profile");
      //     } else {
      //       navigate("/login");
      //     }
      //   });
      // }
    } catch (error) {
      console.log(error);
      alert(`Payment failed\n${error.message}`);
      // localStorage.removeItem("oceanAllUserData");
      // localStorage.removeItem("oceanAllToken");
      navigate("/plans");
    }
  };

  return <></>;
};

export default Paymentscuccess;
