import axios from "axios";
import { Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Cryptocurrency from "./DropDowns/Cryptocurrency";
import Exchanges from "./DropDowns/Exchanges";
import Projects from "./DropDowns/Projects";
import SignUp from "./userAccount/SignUp";
import LogIn from "./userAccount/LogIn";
import { HiOutlineMinusSm } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";
import LanguageDropdown from "./DropDowns/LanguageDropdown";
import StarIcon from "@mui/icons-material/Star";
import SearchAutoComplate from "./SearchAutoComplate";
import BasicModal from "./modals/SearchModal";
import { Dialog, Transition } from "@headlessui/react";
import { AuthState } from "@/src/context/AuthProvider";
import AccountMenu from "./AccountMenu";
import Cookies from "js-cookie";
import AccountMenuDown from "./DropDowns/AccountMenuDown";

const Navbar = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [profileSignUp, setprofileSignUp] = useState(true);
  const [profileLogIn, setprofileLogIn] = useState(false);
  const [globalMetrics, setGlobalMetrics] = useState(null);

  const [openMenu, setOpenMenu] = useState(false);
  const authUser = React.useContext(AuthState);
  useEffect(() => {
    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "6d6593a5-aaa8-4a92-877c-ad1021319e58",
          },
        }
      )
      .then((response) => {
        const globalMetricsData = response.data.data;
        setGlobalMetrics(globalMetricsData);
      })
      .catch((error) => console.log(error));
  }, []);

  const signUpHandler = () => {
    setprofileSignUp(true);
    setprofileLogIn(false);
  };
  const logInHandler = () => {
    setprofileLogIn(true);
    setprofileSignUp(false);
  };

  // const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("email");
    Cookies.remove("password");
    authUser.setState({ data: authUser.state.data, register: false });
  };
  return (
    <div className="border-y   max-w-screen-2xl bg-white m-auto flex flex-col-reverse md2:flex-col">
      <div className="md2:flex md2:justify-between w-full font-semibold  py-1.5 border-b">
        {/* header show price market  */}
        <div className="flex md2:flex-1 whitespace-nowrap md2:py-3   overflow-x-auto md2:overflow-x-auto gap-x-4">
          <div className="flex items-center gap-x-4">
            <div className="flex whitespace-nowrap  text-xs gap-x-2">
              <div>رمزارزها: </div>
              <div className="text-[#2563eb] ">
                {globalMetrics?.active_cryptocurrencies}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>صرافیا: </div>
              <div className="text-[#2563eb] ">
                {globalMetrics?.active_exchanges}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>مارکت: </div>
              <div className="text-[#2563eb] ">
                ${globalMetrics?.quote.USD.total_market_cap.toLocaleString()}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>حجم 24h: </div>
              <div className="text-[#2563eb] ">
                ${globalMetrics?.quote.USD.total_volume_24h.toLocaleString()}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>سهم: </div>
              <div className="text-[#2563eb] whitespace-nowrap flex ">
                بیتکوین:{" "}
                <div className="mr-1">
                  {" "}
                  {globalMetrics?.btc_dominance.toFixed(2)}%{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[280px] flex  items-center  border-r pr-1   gap-x-1 ">
          <div className="w-full flex justify-between pr-2">
            {/*  language  */}
            <div className=" md2:flex hidden   items-center ">
              <LanguageDropdown />
            </div>
            {/* Profile */}
            {authUser.state.register ? (
              //profile icon
              <div className="hidden md2:block">
                <AccountMenu handleLogout={handleLogout} />
              </div>
            ) : (
              <div
                id="account"
                className="text-sm gap-x-2 whitespace-nowrap md2:flex hidden font-bold  items-center"
                onClick={() => setProfileModal(true)}
              >
                <button
                  onClick={logInHandler}
                  className="px-4 pt-0.5 pb-1.5  font-semibold text-sm border text-blue-600 border-blue-700  hover:bg-gray-50 rounded-lg"
                >
                  ورود
                </button>
                <button
                  onClick={signUpHandler}
                  className="px-4 pt-0.5 pb-1.5 font-semibold text-sm bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                >
                  ثبت نام
                </button>
              </div>
            )}
          </div>
          <div>
            {profileModal && (
              <div className="fixed inset-0 z-30 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-60"
                  onClick={() => setProfileModal(false)}
                ></div>

                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-[450px] p-4 mx-auto bg-white dark:bg-slate-700 rounded-md shadow-lg">
                    <div className="mt-3">
                      <div className="flex items-center justify-evenly mx-auto border-b border-gray-400 pb-4">
                        <CloseIcon
                          onClick={() => setProfileModal(false)}
                          className="absolute top-3 right-5 text-gray-400 cursor-pointer"
                        />
                        <button
                          onClick={signUpHandler}
                          className={` ${
                            profileSignUp
                              ? "text-black text-lg text-center font-medium px-6 py-2 rounded-lg"
                              : " text-gray-400 text-lg text-center font-medium px-6 py-2 rounded-lg"
                          }`}
                        >
                          Sign Up
                          <HiOutlineMinusSm
                            size="60px"
                            className={`${
                              profileSignUp
                                ? "text-blue-600 -mt-6 mr-0.5 "
                                : "text-white  -mt-6 mr-0.5 "
                            } `}
                          />
                        </button>
                        <button
                          onClick={logInHandler}
                          className={` ${
                            profileLogIn
                              ? "text-black text-lg text-center font-medium px-6 py-2 rounded-lg"
                              : " text-gray-400 text-lg text-center font-medium px-6 py-2 rounded-lg"
                          }`}
                        >
                          Log In
                          <HiOutlineMinusSm
                            size="60px"
                            className={`${
                              profileLogIn
                                ? "text-blue-600 -mt-6 mr-0.5 "
                                : "text-white  -mt-6 mr-0.5 "
                            } `}
                          />
                        </button>
                      </div>

                      <div id="accountUser" className="mt-2 text-cente">
                        {profileSignUp && (
                          <SignUp setProfileModal={setProfileModal} />
                        )}
                        {profileLogIn && (
                          <LogIn setProfileModal={setProfileModal} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Box display="flex" alignItems="center" fontWeight={"bold"}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "space-between", md2: "flex-start" }}
          width="100%"
          gap={2}
        >
          <Typography variant="h6" fontWeight={600}>
            <Link href="/">MarketCoin</Link>
          </Typography>
          <div className="hidden md2:flex items-center py-2 ">
            <Cryptocurrency />
            <Exchanges />
            <Projects />
          </div>

          <Box
            display={{ xs: "flex", md2: "none" }}
            alignItems={"center"}
            gap={1}
            paddingY={1}
          >
            {/* <FiSearch size="22px" /> */}
            <BasicModal />
            <div className="flex pr-3 ">
              <button type="button" onClick={() => setOpenMenu(true)}>
                <MenuIcon />
              </button>
            </div>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            display: { xs: "none", md2: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* search BOX  */}
          <div className="flex">
            <SearchAutoComplate />
          </div>
        </Box>
      </Box>

      {/* Responsive Menu */}
      <div dir="rtl" className="w-full">
        <Transition.Root show={openMenu} as={React.Fragment}>
          <Dialog
            dir="rtl"
            as="div"
            className="relative w-full  md2:hidden"
            onClose={setOpenMenu}
          >
            {/* dark opacity the screen for showing the menu */}
            <Transition.Child
              as={React.Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 w-full  bg-black bg-opacity-50" />
            </Transition.Child>

            {/* menu */}
            <div className="fixed inset-0 w-full  flex justify-center">
              <Transition.Child
                as={React.Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex  flex-col overflow-y-auto bg-white dark:bg-gray-800 shadow-xl w-screen">
                  {/* header  */}
                  <div className=" sticky top-0 pl-2 flex items-center z-40 bg-white shadow justify-between ">
                    {/* close button */}
                    <div className="flex flex-row-reverse p-3">
                      <button type="button" onClick={() => setOpenMenu(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Link logo*/}
                    <Link className="font-bold z-50" href="/">
                      MarketCoin
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Cryptocurrency />
                    <Exchanges />
                    <Projects />
                    {/* watchList  */}
                    <div
                      onClick={() => setOpenMenu(false)}
                      className="whitespace-nowrap gap-2"
                    >
                      <Link
                        className="border-b flex items-center py-4 mx-4 hover:text-black hover:bg-gray-100 text-gray"
                        href="/watchList"
                      >
                        <StarIcon className="text-3xl ml-1" />
                        <div className="text-black  font-semibold">
                          فهرست شما
                        </div>
                      </Link>
                    </div>
                    {authUser.state.register && (
                      <AccountMenuDown handleLogout={handleLogout} />
                    )}

                    {/* Profile first mobile  */}
                    {authUser.state.register ? (
                      <button
                        id="accountmobile"
                        onClick={handleLogout}
                        className=" mx-4  gap-x-2 mt-8  px-4  py-2    font-semibold text-base border   hover:bg-gray-100 bg-gray-50 rounded-md "
                      >
                        خروج از حساب
                      </button>
                    ) : (
                      <div
                        id="accountmobile"
                        className="text-sm gap-x-2 mt-8 whitespace-nowrap font-bold flex flex-col px-4 gap-y-2 "
                        onClick={() => {
                          setProfileModal(true);
                          setOpenMenu(false);
                        }}
                      >
                        <button
                          onClick={signUpHandler}
                          className="py-2   font-semibold text-base bg-blue-600 hover:bg-blue-700 rounded-md  text-white"
                        >
                          ثبت نام
                        </button>
                        <button
                          onClick={logInHandler}
                          className="py-2    font-semibold text-base border text-blue-600   hover:bg-gray-100 bg-gray-50 rounded-md "
                        >
                          ورود
                        </button>
                      </div>
                    )}

                    {/* dark mode and language  */}
                    <div className="flex justify-between items-center   px-4 mt-7 gap-x-2   ">
                      <div className="bg-gray-100 p-3  pr-7 rounded-md">
                        <LanguageDropdown />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default Navbar;
