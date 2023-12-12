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

<div class="topcontent">
      <div className="personalDetailTable">
        <div class="about">
          <p class="personalHeading">Personal Details</p>
          <div className="edit_icon">
            {/* <img src={edit} alt="" className="editIcon" /> */}
          </div>
        </div>

        <div className="rightTable">
          <div class="firstline">
            <div class="rightline">
              <div class="dataQuestion">First Name</div>
              <div class="dataAnswer">{user?.first_name} </div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion">Last Name</div>
              <div class="dataAnswer">{user?.last_name}</div>
            </div>
          </div>
        </div>

        <div className="rightTable">
          <div class="firstline">
            <div class="rightline">
              <div class="dataQuestion">Registered Email</div>
              <div class="dataAnswer">{user?.email}</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion">Password</div>
              <div class="dataAnswer">{user?.password}</div>
            </div>
          </div>
        </div>

        <div className="rightTable">
          <div class="firstlinelast">
            <div class="rightline">
              <div class="dataQuestion">contact</div>
              <div class="dataAnswer">{user?.phone_number}</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion"></div>
              <div class="dataAnswer"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="personalDetailTable">
        <div class="about">
          <p class="personalHeading">Company Information</p>
          {/* <div className="edit_icon">
            <img src={edit} alt="" className="editIcon" />
          </div> */}
        </div>

        <div className="rightTable">
          <div class="firstline">
            <div class="rightline">
              <div class="dataQuestion">Company Name</div>
              <div class="dataAnswer">{user?.company_name}</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion">Company Code</div>
              <div class="dataAnswer">{user?.id}</div>
            </div>
          </div>
        </div>

        <div className="rightTable">
          <div class="firstline">
            <div class="rightline">
              <div class="dataQuestion">Country</div>
              <div class="dataAnswer">{user?.country}</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion">Vat no</div>
              <div class="dataAnswer">{user?.vat}</div>
            </div>
          </div>
        </div>

        <div className="rightTable">
          <div class="firstline">
            <div class="rightline">
              <div class="dataQuestion">Company Registration no</div>
              <div class="dataAnswer">3894739873945</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion">Company Type</div>
              <div class="dataAnswer">{user?.company_type?.value}</div>
            </div>
          </div>
        </div>

        <div className="rightTable">
          <div class="firstline">
            <div class="rightline">
              <div class="dataQuestion">Company Main Email</div>
              <div class="dataAnswer">{user?.issuer_mail}</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion">Website</div>
              <div class="dataAnswer">{user?.user_domain}</div>
            </div>
          </div>
        </div>
        <div className="rightTable">
          <div class="firstlinelast">
            <div class="rightline">
              <div class="dataQuestion">Company Phone Number</div>
              <div class="dataAnswer">+971-XX-1234567</div>
            </div>
            <div className="hrline"></div>
            <div class="leftline">
              <div class="dataQuestion"></div>
              <div class="dataAnswer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>




















































































































        </>



    );
};

export default PersonalDetails;