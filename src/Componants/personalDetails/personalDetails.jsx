import "./personalDetails.css";
import { useEffect, useState } from "react";

const PersonalDetails = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("oceanAllUserData"));
    console.log(userData);
    setUser(userData);
  }, []);

  return (
    <>
      <div className="myProfileRightpart">
        <div class="personaldetailDiv">
          <div class="container">
            <p class="detailSpan">Personal Details</p>

            <p class="personaldetailItems">First Name</p>
            <p class="personaldetailItems">{user?.first_name}</p>
            <div class="hrdiv"></div>

            <p class="personaldetailItems">Last Name</p>
            <p class="personaldetailItems">{user?.last_name}</p>
            <p class="personaldetailItems">Registered Email</p>
            <p class="personaldetailItems">{user?.email}</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItems">Password</p>
            <p class="personaldetailItems">{user?.password}</p>
            <p class="personaldetailItemslast">Contact</p>
            <p class="personaldetailItemslast">{user?.phone_number}</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItemslast"></p>
            <p class="personaldetailItemslast"></p>
          </div>
        </div>
        <div class="personaldetailDiv">
          <div class="container">
            <p class="detailSpan">Company Information</p>
            <p class="personaldetailItems">Company Name</p>
            <p class="personaldetailItems">{user?.company_name}</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItems">Company Code</p>
            <p class="personaldetailItems">{user?.id}</p>
            <p class="personaldetailItems">Country</p>
            <p class="personaldetailItems">{user?.country}</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItems">Vat No</p>
            <p class="personaldetailItems">{user?.vat}</p>
            <p class="personaldetailItems">Company Registration no</p>
            <p class="personaldetailItems">3894739873945</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItems">Company Type</p>
            <p class="personaldetailItems">{user?.company_type?.value}</p>
            <p class="personaldetailItems">Company Main Email</p>
            <p class="personaldetailItems">{user?.issuer_mail}</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItems">Website</p>
            <p class="personaldetailItems">{user?.user_domain}</p>
            <p class="personaldetailItemslast">Company Phone Number</p>
            <p class="personaldetailItemslast">+971-XX-1234567</p>
            <div class="hrdiv"></div>
            <p class="personaldetailItemslast"></p>
            <p class="personaldetailItemslast"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
