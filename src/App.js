import { Suspense, lazy, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import FooterSection from "./Componants/FooterSection";
import Navbar from "./Componants/Navbar";
import { Chartering } from "./Componants/oceann-components/Chartering";
import { Finance } from "./Componants/oceann-components/Finance";
import OceannAI from "./Componants/oceann-components/Oceann_AI";
import OceannAnalytics from "./Componants/oceann-components/Oceann_Analytics";
import OceannBI from "./Componants/oceann-components/Oceann_BI";
import OceannOperations from "./Componants/oceann-components/Oceann_Operations";
import Home from "./Landing_Page_Components/Home";
import { BookDemo } from "./Pages/BookDemo";
import { ContactUs } from "./Pages/ContactUs";
import { Cookies } from "./Pages/Cookies";
import { Product } from "./Pages/Product";
import Career from "./Pages/Career";
import Paymentsuccess from "./Pages/payment/paymentSuccess";
import { OceannApi } from "./Componants/oceann-components/OceannApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Componants/ScrollToTop/ScrollToTop";
import Signup from "./Pages/signup/signup";
import Spinner from "./Componants/spinner/spinner";
import { globalStore } from "./store/globalStore";
import Protected from "./Componants/protectedRoutes/protected";
import LoginMiddleware from "./Componants/protectedRoutes/loginMiddleware";
import Plans from "./Pages/Plans";
import Profile from "./Pages/myProfile/profile";
import Login from "./Pages/login/login";
import Checkout from "./Pages/checkout/checkout";
// const Plans = lazy(() => import("./Pages/Plans"));

const PreTradeIntelligence = lazy(() => import("./Pages/Pretradeintelligence"));

const AboutUs = lazy(() => import("./Pages/AboutUs"));
// const Signup = lazy(() => import("./Pages/signup/signup"));
// const Signup = lazy(() => import("./Pages/signup/signup"));
// import Solution from "./Pages/Solution.js"
const Solution = lazy(() => import("./Pages/Solution"));
const OceannZero = lazy(() => import("./Pages/OceannZero"));
const Platform = lazy(() => import("./Componants/Platform"));
const OceannMail = lazy(() =>
  import("./Componants/oceann-components/Oceann_Mail")
);
const OceannVM = lazy(() => import("./Componants/oceann-components/Oceann_VM"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const Events = lazy(() => import("./Pages/Event"));
const News = lazy(() => import("./Pages/News"));
const Tanker = lazy(() => import("./Pages/tanker.js"));
const Dry = lazy(() => import("./Pages/dry"));
const Pooling = lazy(() => import("./Pages/pooling"));
// const Login = lazy(() => import("./Pages/login/login"));
// const Checkout = lazy(() => import("./Pages/checkout/checkout"));
// const Profile = lazy(() => import("./Pages/myProfile/profile"));
const Parceling = lazy(() => import("./Pages/parceling"));

const MainPage = () => {
  const { setIsLoading, setButtonDisabled } = globalStore();
  window.spinnerStoreFuntion = () => {
    return { setIsLoading, setButtonDisabled };
  };

  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Spinner />
        <Outlet />
      </ScrollToTop>
      <FooterSection />
    </>
  );
};

function App() {
  // const [authenticated, setIsAuthenticated] = useState(false);
  // console.log("in app");
  // const token = localStorage.getItem("oceanAllToken");
  // if (token) {
  //   setIsAuthenticated(true);
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <Home />
            // </Suspense>
          ),
        },
        {
          path: "/profile",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <Protected element={Profile} />
          ),
        },
        {
          path: "/about-us",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
            <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <LoginMiddleware element={Login} />

            // </Suspense>
          ),
        },
        {
          path: "/signup",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <LoginMiddleware element={Signup} />
            // </Suspense>
          ),
        },
        {
          path: "/solution",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
            <Solution />
            // </Suspense>
          ),
        },
        { 
          path: "/platform",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
            <Platform />
            </Suspense>
          ),
        },
        {
          path: "/payment/success",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <Protected element={Paymentsuccess} />
            // </Suspense>
          ),
        },

        {
          path: "/solution/oceann-mail",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
            <OceannMail />
            </Suspense>
          ),
        },
        {
          path: "/solution/oceann-api",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <OceannApi />
            // </Suspense>
          ),
        },
        {
          path: "/solution/oceann-vm",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
            <OceannVM />
            </Suspense>
          ),
        },
        {
          path: "/solution/oceann-bi",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <OceannBI />
            // </Suspense>
          ),
        },
        {
          path: "/checkout",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <Protected element={Checkout} />
            // </Suspense>
          ),
        },
        {
          path: "/product/oceann-analytics",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <OceannAnalytics />
            </Suspense>
          ),
        },
        {
          path: "/product/operations",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <OceannOperations />
            </Suspense>
          ),
        },
        {
          path: "/solution/oceann-ai",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <OceannAI />
            </Suspense>
          ),
        },
        {
          path: "product/ocean-zero",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <OceannZero />
            </Suspense>
          ),
        },
        {
          path: "/plans",
          element: (
            // <Suspense fallback={<div>Loading....</div>}>
            <Plans />
            // </Suspense>
          ),
        },
        {
          path: "/product/pre-trade-intelligence",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <PreTradeIntelligence />
            </Suspense>
          ),
        },
        {
          path: "/product",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Product />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "product/Pre-Trade-Intelligence",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <PreTradeIntelligence />
            </Suspense>
          ),
        },
        {
          path: "/product/oceann-mail",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "/product/oceann-zero",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <OceannZero />
            </Suspense>
          ),
        },
        {
          path: "/demo",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <BookDemo />
            </Suspense>
          ),
        },
        {
          path: "/product/oceann-finance",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Finance />
            </Suspense>
          ),
        },
        {
          path: "/product/chartering",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Chartering />
            </Suspense>
          ),
        },
        {
          path: "/privacy",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Privacy />
            </Suspense>
          ),
        },
        {
          path: "/knowledge-Hub/events",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Events />
            </Suspense>
          ),
        },
        {
          path: "/knowledge-Hub/news",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <News />
            </Suspense>
          ),
        },
        {
          path: "/cookies",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Cookies />
            </Suspense>
          ),
        },
        {
          path: "/career",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Career />
            </Suspense>
          ),
        },
        {
          path: "/tank",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Tanker />
            </Suspense>
          ),
        },

        {
          path: "/dry",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Dry />
            </Suspense>
          ),
        },

        {
          path: "/pooling",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Pooling />
            </Suspense>
          ),
        },

        {
          path: "/parceling",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Parceling />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
