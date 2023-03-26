import { Box } from "@mui/material";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ChatIcon from "@mui/icons-material/Chat";
import LanguageIcon from "@mui/icons-material/Language";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import BarChartIcon from "@mui/icons-material/BarChart";
import Link from "next/link";

const Cryptocurrency = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className=" hidden md:block relative group">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=" items-center p-2 border-b-2 border-[#2377ff] flex   border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer  focus:outline-none f"
        >
          <button className="">رمز ارزها</button>
          <span className="text-2xl text-gray-500">
            <BiChevronDown />
          </span>
        </div>

        {isOpen && (
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute p-4 w-96 z-10 bg-white py-2 rounded-md shadow-md gap-y-4 -right-24"
          >
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 6">
                <div className="text-gray-400">رمزارزها</div>
                <div>
                  <Link
                    href="/"
                    className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                  >
                    <ElectricBoltIcon className="ml-2" />

                    <span className="font-bold">برترین رمزارزها</span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/globalChart"
                    className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                  >
                    {" "}
                    <TrendingUpIcon className="ml-2" />
                    <span> نمودار مارکت</span>{" "}
                  </Link>
                </div>
                <div>
                  <Link
                    className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                    href="/new-cryptocurrencies"
                  >
                    <FiberNewIcon className="ml-2" />

                    <span className="font-bold">تازه های مارکت</span>
                  </Link>
                </div>
              </Box>
              <Box gridColumn="span 6">
                <div className="text-gray-400">قرارداد های هوشمند</div>
                <div>
                  <Link
                    href="/nft"
                    className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                  >
                    <DataSaverOffIcon className="ml-2" />

                    <span className="font-bold">NFT ها</span>
                  </Link>
                </div>

                {/* <div className="hover:bg-gray-50 py-2 px-1">
                  <BarChartIcon className="ml-2" />

                  <span className="font-bold">برترین بلاکها</span>
                </div> */}
              </Box>
              <Box gridColumn="span 12">
                <div className="text-gray-400">جامعه ها</div>
                <Link
                  href="https://fa.cryptonews.com/"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  <LanguageIcon className="ml-2" />
                  <span className="font-bold">مروری به خبرهای کریپتو</span>
                </Link>
                <Link
                  href="https://t.me/telochat_fa"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  <ChatIcon className="ml-2" />
                  <span className="font-bold">گروه تلگرامی تحلیل و بررسی</span>
                </Link>
              </Box>
            </Box>
          </div>
        )}
      </div>

      {/* menu dropdown first mobile */}
      <div className="w-full mx-4 md:hidden">
        <div
          className={`${
            isOpen && "text-blue-600"
          } font-bold py-4 text-xl flex justify-between items-center`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {" "}
          <h1>رمزارزها</h1>{" "}
          {/* {!isOpen ? <BiChevronDown size={38} /> : <BiChevronUp size={38} />}{" "} */}
          {isOpen ? (
            <BiChevronDown className="transition-all rotate-180" size={38} />
          ) : (
            <BiChevronDown className="transition-all" size={38} />
          )}
        </div>
        <hr />
        {isOpen && (
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
            <Box gridColumn="span 12">
              <div className="text-gray-400">رمزارزها</div>
              <div>
                <Link
                  href="/"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  <ElectricBoltIcon className="ml-2" />

                  <span className="font-bold">برترین رمزارزها</span>
                </Link>
              </div>
              <div>
                <Link
                  href="/globalChart"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  {" "}
                  <TrendingUpIcon className="ml-2" />
                  <span> نمودار مارکت</span>{" "}
                </Link>
              </div>
              <div>
                <Link
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                  href="/new-cryptocurrencies"
                >
                  <FiberNewIcon className="ml-2" />

                  <span className="font-bold">تازه های مارکت</span>
                </Link>
              </div>
            </Box>
            <Box gridColumn="span 12">
              <div className="text-gray-400">قرارداد های هوشمند</div>
              <div>
                <Link
                  href="/nft"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  <DataSaverOffIcon className="ml-2" />

                  <span className="font-bold">NFT ها</span>
                </Link>
              </div>
              {/* <div className="hover:bg-gray-50 py-2 px-1">
                <BarChartIcon className="ml-2" />

                <span className="font-bold">برترین بلاکها</span>
              </div> */}
            </Box>
            <Box gridColumn="span 12">
              <div className="text-gray-400">جامعه ها</div>
              <Link
                href="https://fa.cryptonews.com/"
                className="hover:bg-gray-50 inline-block w-full py-2 px-1"
              >
                <LanguageIcon className="ml-2" />
                <span className="font-bold">مروری به خبرهای کریپتو</span>
              </Link>
              <Link
                href="https://t.me/telochat_fa"
                className="hover:bg-gray-50 inline-block w-full py-2 px-1"
              >
                <ChatIcon className="ml-2" />
                <span className="font-bold">گروه تلگرامی تحلیل و بررسی</span>
              </Link>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Cryptocurrency;
