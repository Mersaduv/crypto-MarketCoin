import axios from "axios";
import {
  AppBar,
  Autocomplete,
  makeStyles,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
// import { styled, alpha, makeStyles } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Cryptocurrency from "./DropDowns/Cryptocurrency";
import Exchanges from "./DropDowns/Exchanges";
import Projects from "./DropDowns/Projects";
import SignUp from "./userAccount/SignUp";
import LogIn from "./userAccount/LogIn";
import { HiOutlineMinusSm } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";
import LanguageDropdown from "./DropDowns/LanguageDropdown";
import { FaMoon } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import StarIcon from "@mui/icons-material/Star";
import SearchAutoComplate from "./SearchAutoComplate";
import TrendingCoins from "./TrendingCoins";
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: "rgb(239, 242, 245)",
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   height: "30px",
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     height: "30px",
//   },
// }));
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     alignItems: "center",
//     fontSize: theme.typography.pxToRem(14),
//     fontWeight: theme.typography.fontWeightMedium,
//     color: theme.palette.text.primary,
//     "&:hover": {
//       backgroundColor: theme.palette.grey[100],
//       boxShadow: theme.shadows[1],
//     },
//     borderRadius: theme.shape.borderRadius,
//     cursor: "pointer",
//   },
// }));
const Navbar = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [profileSignUp, setprofileSignUp] = useState(true);
  const [profileLogIn, setprofileLogIn] = useState(false);
  const [globalMetrics, setGlobalMetrics] = useState(null);

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

  // const classes = useStyles();
  return (
    <div className="border-y flex flex-col-reverse md2:flex-col">
      {/* header show price market  */}
      <div className="flex justify-between w-full  py-1.5 border-b">
        <div className="flex flex-1 whitespace-nowrap overflow-y-hidden  overflow-x-auto gap-x-4">
          <div className="flex items-center gap-x-4">
            <div className="flex whitespace-nowrap  text-xs gap-x-2">
              <div>رمزارزها: </div>
              <div className="text-blue-600 ">
                {globalMetrics?.active_cryptocurrencies}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>صرافیا: </div>
              <div className="text-blue-600 ">
                {globalMetrics?.active_exchanges}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>مارکت: </div>
              <div className="text-blue-600 ">
                ${globalMetrics?.quote.USD.total_market_cap.toLocaleString()}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>حجم 24h: </div>
              <div className="text-blue-600 ">
                ${globalMetrics?.quote.USD.total_volume_24h.toLocaleString()}
              </div>
            </div>

            <div className="flex whitespace-nowrap text-xs gap-x-2">
              <div>سهم: </div>
              <div className="text-blue-600 whitespace-nowrap flex ">
                بیتکوین: <div> {globalMetrics?.btc_dominance.toFixed(2)}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] md2:flex  border-r pr-4  hidden gap-x-1 ">
          {/* dark mode and language  */}
          <div className="flex items-center gap-x-2   ">
            <FaMoon />
            <LanguageDropdown />
          </div>
          {/* Profile */}
          <div>
            <div
              id="account"
              className="text-sm gap-x-2 whitespace-nowrap font-bold flex items-center"
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

            {profileModal && (
              <div className="fixed inset-0 z-30 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-60"
                  onClick={() => setProfileModal(false)}
                ></div>

                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-[460px] p-4 mx-auto bg-white rounded-md shadow-lg">
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

                      <div id="accountUser" className="mt-2 text-center">
                        {profileSignUp && <SignUp />}
                        {profileLogIn && <LogIn />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Box display="flex" alignItems="center">
        <Box display="flex" width="100%" gap={4} alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "space-between", md: "flex-start" }}
            width="100%"
            gap={2}
          >
            <Typography variant="h6" component="div">
              <Link href="/cryptoMarket">MarketCoin</Link>
            </Typography>
            <Box
              display="flex"
              fontWeight="fontWeightBold"
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
              width="auto"
              justifyContent="center"
              visibility={{ xs: "hidden", md: "visible" }}
              gap={1}
            >
              <Cryptocurrency />
              <Exchanges />
              <Projects />
            </Box>

            <Box
              display={{ xs: "flex", md: "none" }}
              alignItems="center"
              gap={3}
            >
              <FiSearch size="22px" />
              <MenuIcon className="cursor-pointer" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* <Typography
            sx={{ display: "flex", padding: "4px", whiteSpace: "nowrap" }}
            component="span"
          >
            <StarIcon fontSize="small" />
            <Typography variant="subtitle2">
              <Link href="/watchlist">فهرست شما</Link>
            </Typography>
          </Typography> */}
          {/* search BOX  */}
          <div className="flex">
            <SearchAutoComplate />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
