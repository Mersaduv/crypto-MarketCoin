import { Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RiExchangeFundsFill } from "react-icons/ri";
const Exchanges = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="relative group hidden md:block">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=" items-center p-2 border-b-2 border-[#2377ff] flex   border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer  focus:outline-none f"
        >
          <button className="">صرافی ها</button>
          <span className="text-2xl text-gray-500">
            <BiChevronDown />
          </span>
        </div>

        {isOpen && (
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute p-4  w-44 z-10 bg-white py-2 rounded-md shadow-md gap-y-4 -right-3"
          >
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4}>
              <Box gridColumn="span 4">
                <Link
                  href="/exchanges"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  <MdOutlineCurrencyExchange className="ml-2" />

                  <span className="font-bold whitespace-nowrap text-sm">
                    صرافی های متمرکز
                  </span>
                </Link>
                <hr />
                <Link
                  href="/decentralized-exchanges"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1"
                >
                  <RiExchangeFundsFill className="ml-2" />

                  <span className="font-bold whitespace-nowrap text-sm">
                    صرافی های غیر متمرکز
                  </span>
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
          <h1>صرافی ها</h1>{" "}
          {/* {!isOpen ? <BiChevronDown size={38} /> : <BiChevronUp size={38} />}{" "} */}
          {isOpen ? (
            <BiChevronDown className="transition-all rotate-180" size={38} />
          ) : (
            <BiChevronDown className="transition-all" size={38} />
          )}
        </div>
        <hr />
        {isOpen && (
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4}>
            <Box gridColumn="span 4">
              <Link
                href="/exchanges"
                className="hover:bg-gray-50 inline-block w-full py-2 px-1"
              >
                <MdOutlineCurrencyExchange className="ml-2" />

                <span className="font-bold whitespace-nowrap text-sm">
                  صرافی های متمرکز
                </span>
              </Link>
              <hr />
              <Link
                href="/decentralized-exchanges"
                className="hover:bg-gray-50 inline-block w-full py-2 px-1"
              >
                <RiExchangeFundsFill className="ml-2" />

                <span className="font-bold whitespace-nowrap text-sm">
                  صرافی های غیر متمرکز
                </span>
              </Link>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Exchanges;
