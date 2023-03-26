// import Link from "next/link";
import CryptoList from "../components/CryptoList";
import SectionHead from "../components/SectionHead";
// import { fetchCoins } from "../redux/cryptoSlice/cryptoSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";
import letter from "../../public/newsletter_bg_light.svg"

import { getData } from "../services/serviceData";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import SignUp from "../components/userAccount/SignUp";
import LogIn from "../components/userAccount/LogIn";
import CloseIcon from "@mui/icons-material/Close";
import { HiOutlineMinusSm } from "react-icons/hi";
export default function Home({ coins, page }) {
  const [profileModal, setProfileModal] = useState(false);
  const [profileSignUp, setprofileSignUp] = useState(true);
  const [profileLogIn, setprofileLogIn] = useState(false);
  const signUpHandler = () => {
    setprofileSignUp(true);
    setprofileLogIn(false);
  };
  const logInHandler = () => {
    setprofileLogIn(true);
    setprofileSignUp(false);
  };

  const router = useRouter()
  return (
    <div dir="rtl">
      <div >
        <SectionHead />
      </div>
      <div className="overflow-x-auto mt-4 min-w-[360px]">

        <CryptoList data={coins} />

        <Stack dir="ltr" className="w-full mb-8 nextpage" display={"flex"} justifyContent={"center"} marginTop={2} spacing={2}>
          {coins.length >= 50 && (
            <Pagination
              count={coins.length}
              page={page}

              color="primary"
              shape="rounded"
              onChange={(event, value) => {
                router.push(`/cryptoMarket?page=${value}`);
              }}

            />
          )}
        </Stack>
      </div>

      <div className="flex flex-col md:flex-row px-4 pt-4  bg-slate-100">
        <div className="flex flex-col">
          <h1 className="text-2xl my-1">اولین کسی  باشید که با خبرید</h1>
          <h1 className="text-2xl font-bold">اخبار رمزارز هر روز</h1>
          <p className="text-sm my-4">تجزیه و تحلیل، اخبار های جدید ارز دیجیتالی را در ایمیل خود دریافت کنید! از اینجا ثبت‌نام کنید تا هیچ خبرنامه‌ای را از دست ندهید.
            .</p>
          <button onClick={() => setProfileModal(true)} className="bg-blue-600 md:mr-6 md:w-40 focus:ring-2 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 px-5 mb-6">Subscribe now</button>

        </div>
        <Image className="w-full" src={letter} alt='banner' />
      </div>

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
                    className={` ${profileSignUp
                      ? "text-black text-lg text-center font-medium px-6 py-2 rounded-lg"
                      : " text-gray-400 text-lg text-center font-medium px-6 py-2 rounded-lg"
                      }`}
                  >
                    Sign Up
                    <HiOutlineMinusSm
                      size="60px"
                      className={`${profileSignUp
                        ? "text-blue-600 -mt-6 mr-0.5 "
                        : "text-white  -mt-6 mr-0.5 "
                        } `}
                    />
                  </button>
                  <button
                    onClick={logInHandler}
                    className={` ${profileLogIn
                      ? "text-black text-lg text-center font-medium px-6 py-2 rounded-lg"
                      : " text-gray-400 text-lg text-center font-medium px-6 py-2 rounded-lg"
                      }`}
                  >
                    Log In
                    <HiOutlineMinusSm
                      size="60px"
                      className={`${profileLogIn
                        ? "text-blue-600 -mt-6 mr-0.5 "
                        : "text-white  -mt-6 mr-0.5 "
                        } `}
                    />
                  </button>
                </div>

                <div id="accountUser" className="mt-2 text-cente">
                  {profileSignUp && <SignUp />}
                  {profileLogIn && <LogIn />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export const getServerSideProps = async ({ query }) => {
  let page = +query.page || 1;

  try {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
    );
    const coins = result.data;

    return {
      props: {
        coins,
        page,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        coins: [],
        page,
      },
    };
  }
};
// export async function getServerSideProps() {
//   const { data } = await getData();

//   // const { data } = await fetchCoins(); درخواست دیتا با موفقیت انجام نشد !!!!!

//   return { props: { data } };
// }
