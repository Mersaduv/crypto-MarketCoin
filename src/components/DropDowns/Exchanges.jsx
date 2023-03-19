import { Box } from "@mui/material";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RiExchangeFundsFill } from "react-icons/ri";
const Exchanges = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="relative group">
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
                <div className="hover:bg-gray-50 py-2 px-2">
                  <MdOutlineCurrencyExchange className="ml-2" />

                  <span className="font-bold whitespace-nowrap text-sm">
                    صرافی های متمرکز
                  </span>
                </div>
                <hr />
                <div className="hover:bg-gray-50 py-2 px-2">
                  <RiExchangeFundsFill className="ml-2" />

                  <span className="font-bold whitespace-nowrap text-sm">
                    صرافی های غیر متمرکز
                  </span>
                </div>
              </Box>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exchanges;
