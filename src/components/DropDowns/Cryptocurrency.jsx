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
      <div className="relative group">
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
                <div className="hover:bg-gray-50 py-2 px-1 ">
                  <Link href="/">
                    <ElectricBoltIcon className="ml-2" />

                    <span className="font-bold">برترین رمزارزها</span>
                  </Link>
                </div>
                <div className="hover:bg-gray-50 py-2 px-1">
                  <TrendingUpIcon className="ml-2" />

                  <span className="font-bold">نمودار مارکت</span>
                </div>
                <div className="hover:bg-gray-50 py-2 px-1">
                  <FiberNewIcon className="ml-2" />

                  <span className="font-bold">تازه های مارکت</span>
                </div>
              </Box>
              <Box gridColumn="span 6">
                <div className="text-gray-400">قرارداد های هوشمند</div>
                <div className="hover:bg-gray-50 py-2 px-1">
                  <DataSaverOffIcon className="ml-2" />

                  <span className="font-bold">مجموعه ها</span>
                </div>
                <div className="hover:bg-gray-50 py-2 px-1">
                  <BarChartIcon className="ml-2" />

                  <span className="font-bold">برترین بلاکها</span>
                </div>
              </Box>
              <Box gridColumn="span 12">
                <div className="text-gray-400">جامعه ها</div>
                <div className="hover:bg-gray-50 py-2 px-1">
                  <LanguageIcon className="ml-2" />
                  <span className="font-bold">مروری به خبرهای کریپتو</span>
                </div>
                <div className="hover:bg-gray-50 py-2 px-1">
                  <ChatIcon className="ml-2" />
                  <span className="font-bold">گروه تلگرامی تحلیل و بررسی</span>
                </div>
              </Box>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cryptocurrency;
