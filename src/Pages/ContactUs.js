import React from "react";
import { useInView } from "react-intersection-observer";
import img_3 from "../Componants/Assets/ContactImages/img_3.png";
import img_4 from "../Componants/Assets/ContactImages/img_4.png";
import contactUsImg_1 from "../Componants/Assets/image/Contact-Img-1.png";
import contactUsImg_2 from "../Componants/Assets/image/contactImg_2.png";
export const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });

  return (
    <>
      <div
        ref={ref}
        className="h-[40vh] w-full flex justify-center items-center relative"
      >
        {inView && (
          <img
            src={contactUsImg_1}
            alt=""
            className="absolute w-full h-[40vh] left-0 top-0 z-0"
          />
        )}
        <h1 className="text-[#FEFEFE] font-extrabold max-sm:text-[2.5rem] text-[4rem] z-10">
          Contact Us
        </h1>
      </div>

      <main className="flex flex-col mx-[1rem] lg:mx-[3rem] xl:mx-[4rem]">
        {/* section 1 */}
        <div className="text-center flex flex-col gap-[1rem]">
          <div className="flex justify-center items-center">
            <div>
              <h3 className="mt-[2rem] sm:text-[2.2rem] font-semibold ">
                Let’s Link Up
              </h3>
              <hr className="w-[50%] h-[4px] bg-[#F39C12] rounded-[30px]" />
            </div>
          </div>
          <p className="text-[.8rem] sm:text-[1rem]">
            Our innovative platform is revolutionizing the global landscape for
            shipowners, operators, tonnage charterers, and commodities traders,
            leading to a transformation in their operational methods and
            decision-making processes. If you're inquisitive about our
            corporation, our software offerings, or the ways in which we can
            drive your organization's success, we're at your service. We are
            enthusiastic about the prospect of establishing a connection with
            you in the foreseeable future.
          </p>
          {/* <p>
            If you're inquisitive about our corporation, our software offerings,
            or the ways in which we can drive your organization's success, we're
            at your service. We are enthusiastic about the prospect of
            establishing a connection with you in the foreseeable future.
          </p> */}
          <p className="sm:text-[1rem] font-semibold">
            Looking to connect with us!
          </p>
        </div>
        {/* section 2 */}
        <div className="md:flex justify-around lg:justify-center">
          <div className="mt-[2rem} sm:items-center lg:w-full sm:flex sm:justify-center">
            <img className="" src={contactUsImg_2} alt="" />
          </div>
          <div className="mt-[2rem] lg:w-full sm:mx-[3rem] md:mx-0">
            <h3 className="pb-4 md:text-start sm:text-[2.2rem] sm:text-center text-[1.4rem] max-sm:text-center font-normal">
              Send us a message
            </h3>
            {/* <form action="">
              <div className="md:flex text-[.8rem] sm:text-[1rem] lg:justify-center md:gap-4">
                <div className="lg:w-full">
                  <div className="">
                    <label className="" htmlFor="">
                      Company Name
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="">
                      Last Name
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="">
                      Email
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
                <div className="lg:w-full">
                  <div className="">
                    <label className="" htmlFor="">
                      First Name
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="">
                      Mobile Number
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="">
                      Country
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  className="bg-gray-50 mt-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name=""
                  id=""
                  cols="10"
                  rows="10"
                  placeholder="Your Message
                  "
                ></textarea>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="button"
                  class="focus:outline-none  bg-[#F39C12] mt-5 text-white md:px-[3.5rem]   font-medium rounded-lg text-sm px-[3rem] py-2.5"
                >
                  Send
                </button>
              </div>
            </form> */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input
                type="hidden"
                name="access_key"
                value="44d38b63-ca3e-4c5c-a2b3-9ad50a9a6c7e"
              />
              <input
                type="hidden"
                name="subject"
                value="TheOceann.com New Contact submitted"
              />
              <div className="md:flex text-[.8rem] sm:text-[1rem] lg:justify-center md:gap-4">
                <div className="lg:w-full md:flex flex-col gap-2">
                  <div className="">
                    <label className="" htmlFor="company-name">
                      {" "}
                      Company Name{" "}
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="company-name"
                      name="company-name"
                      type="text"
                      placeholder="Enter Your company name"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="last-Name">
                      Last Name
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email adrres"
                    />
                  </div>
                </div>
                <div className="lg:w-full md:flex flex-col gap-2">
                  <div className="">
                    <label className="" htmlFor="">
                      First Name
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="mobile-Number">
                      {" "}
                      Mobile Number{" "}
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="country">
                      Country
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Enter your country name"
                    />
                  </div>
                </div>
              </div>
              <div className="md:mt-5">
                <textarea
                  className="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="message"
                  id="message"
                  cols="10"
                  rows="10"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  disabled=""
                  type="submit"
                  class="focus:outline-none bg-[#F39C12] mt-5 text-white md:px-[3.5rem] font-medium rounded-lg text-sm px-[3rem] py-2.5"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* section 3 */}

        <div className="mt-[2rem] sm:mx-[2rem]">
          <div className="text-center mb-4 sm:mx-[3rem]">
          <div className="flex justify-center mb-[2rem] items-center">
            <div>
              <h3 className="mt-[2rem] sm:text-[2.2rem] font-semibold ">
                Get in touch
              </h3>
              <hr className="w-[50%] h-[4px] bg-[#F39C12] rounded-[30px]" />
            </div>
          </div>
            <p className="text-[.8rem] sm:text-[1rem]">
              Join the dialogue that's influencing the exciting digital
              evolution of maritime trade by connecting with us on social
              platforms.
            </p>
          </div>
          <div className="text-center   md:justify-between lg:justify-center  sm:flex sm:text-[.8rem] gap-4">
            <div className="mb-[2rem] xl:w-full md:mx-0">
              <img className="w-full xl:h-[350px]" src={img_3} alt="" />
              <p className="text-[.8rem] sm:text-[1rem] text-center ">
                Business Enquiry: business@theoceann.com
              </p>
            </div>
            <div className="xl:w-full  md:mx-0">
              <img className="w-full xl:h-[350px]" src={img_4} alt="" />
              <p className="text-center sm:text-[1rem] text-[rem]">
                IT Support: support@theoceann.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[2rem] sm:mx-[2rem] ">
          <div className="flex justify-center mb-[2rem] items-center">
            <div>
              <h3 className="mt-[2rem] sm:text-[2.2rem] font-semibold ">
                Address
              </h3>
              <hr className="w-[50%] h-[4px] bg-[#F39C12] rounded-[30px]" />
            </div>
          </div>
          <div className="sm:flex gap-4 md:justify-center ">
            <div className="border-2 md:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.2327116156303!2d55.2785263!3d25.262756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f454aa34dacbf%3A0xc807568e929e8477!2sDUQE!5e0!3m2!1sen!2sin!4v1698671418933!5m2!1sen!2sin"
                style={{ border: "0", width: "100%", height: "250px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
              <div>
                <div className="m-[2rem]">
                  <h3 className="font-semibold capitalize">
                    Theoceann.com,(Dubai)
                  </h3>
                  <p className="text-[.8rem] sm:text-[1rem]">
                    Duqe Square Busines Center, Quarter Deck, <br />
                    Mina Rashid, Queen Elizabeth 2, DUBAI, UAE
                  </p>
                  <a
                    className="uppercase font-bold"
                    href="https://maps.app.goo.gl/p1FmfJr4rSETidWk6"
                  >
                    <i className=""></i>
                    <p className="sm:text-[1rem]">click here to open map</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 md:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.028504896482!2d77.420203!3d28.508790100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9a5b9420fc9%3A0x9ee0df967cd4d452!2sAlphathum%20by%20Bhutani%20Group!5e0!3m2!1sen!2sin!4v1695721487104!5m2!1sen!2sin"
                style={{ border: "0", width: "100%", height: "250px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>

              
              <div>
                <div className="m-[2rem]">
                  <h3 className="font-semibold capitalize">
                    Theoceann.com,(IN)
                  </h3>
                  <p className="text-[.8rem] sm:text-[1rem]">
                    Tower-B, Alphathum By Bhutani, Sector - 90,
                    <br />
                    Noida , Uttar Pradesh, India 201305
                  </p>
                  <a
                    className="flex  uppercase font-bold"
                    href="https://maps.app.goo.gl/9vAjontr1jGEBUmU6"
                  >
                    <i className="text-center"></i>
                    <p className="sm:text-[1rem]"> click here to open map</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[3rem] sm:mx-[2rem] text-center">
          <div className="flex justify-center items-center">
            <div>
              <h3 className="mt-[2rem] sm:text-[2.2rem] font-semibold ">
                Get in touch with us
              </h3>
              <hr className="w-[50%] h-[4px] bg-[#F39C12] rounded-[30px]" />
            </div>
          </div>
          <p className="mt-4 text-[.8rem] sm:text-[1rem]">
            Join the dialogue that's influencing the exciting digital evolution
            of maritime trade by connecting with us on social platforms.
          </p>
        </div>
      </main>
    </>
  );
};
