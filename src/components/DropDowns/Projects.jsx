import { Box } from "@mui/material";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import { AiOutlineDropbox } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import Link from "next/link";
function TransitionUp(props) {
  return <Slide {...props} className="text-2xl" direction="up" />;
}
const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex  items-center justify-center">
      <div className="relative group hidden md:block">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=" items-center p-2 border-b-2 border-[#2377ff] flex   border-opacity-0 hover:border-opacity-100 hover:text-[#2377ff]  duration-200 cursor-pointer  focus:outline-none f"
        >
          <button className="">پروژه های مرتبط</button>
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
                <Button
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1.5"
                  onClick={handleClick(TransitionUp)}
                >
                  <InstallMobileIcon className="ml-2" />

                  <span className="font-bold whitespace-nowrap text-sm">
                    مارکت موبایل
                  </span>
                </Button>
                <hr />
                <Link
                  href="https://www.coingecko.com/en/api/documentation"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1.5"
                >
                  <TbApi className="ml-2 text-2xl" />

                  <span dir="ltr" className="font-bold flex flex-col  text-sm">
                    <p>A: application </p>
                    <p>P: programming </p>
                    <p className="ml-0.5 ">I: interface</p>
                  </span>
                </Link>
                <hr />
                <Link
                  href="/airdrop"
                  className="hover:bg-gray-50 inline-block w-full py-2 px-1.5"
                >
                  <AiOutlineDropbox className="ml-2" />

                  <span className="font-bold whitespace-nowrap text-sm">
                    توکن های Airdrop
                  </span>
                </Link>
              </Box>
            </Box>
          </div>
        )}

        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="هنوز اپلیکیشن مارکت موبایل توسعه نیافته !"
          key={transition ? transition.name : ""}
        />
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
          <h1>پروژه های مرتبط</h1>{" "}
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
              <Button
                className="hover:bg-gray-50 text-start inline-block w-full py-2 px-1.5"
                onClick={handleClick(TransitionUp)}
              >
                <InstallMobileIcon className="ml-2" />

                <span className="font-bold whitespace-nowrap text-sm">
                  مارکت موبایل
                </span>
              </Button>
              <hr />
              <Link
                href="https://www.coingecko.com/en/api/documentation"
                className="hover:bg-gray-50 inline-block w-full py-2 px-1.5"
              >
                <TbApi className="ml-2 text-2xl" />

                <span dir="ltr" className="font-bold flex flex-col  text-sm">
                  <p>A: application </p>
                  <p>P: programming </p>
                  <p className="ml-0.5 ">I: interface</p>
                </span>
              </Link>
              <hr />
              <Link
                href="/airdrop"
                className="hover:bg-gray-50 inline-block w-full py-2 px-1.5"
              >
                <AiOutlineDropbox className="ml-2" />

                <span className="font-bold whitespace-nowrap text-sm">
                  توکن های Airdrop
                </span>
              </Link>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Projects;
