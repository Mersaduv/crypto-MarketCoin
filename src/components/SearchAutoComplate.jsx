import * as React from "react";

import { styled } from "@mui/system";
import { getData } from "../services/serviceData";
import Link from "next/link";
import { useRouter } from "next/router";

import { FcFlashOn } from "react-icons/fc";
import StarIcon from "@mui/icons-material/Star";
import useAutocomplete from "@mui/base/useAutocomplete";
import { FiSearch } from "react-icons/fi";
import { useEnterState } from "../context/enterState";

const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "auto",
  maxHeight: 400,
  border: "1px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function SearchAutoComplate() {
  const { openEnter, setOpenEnter } = useEnterState();

  const [dataCoin, setDataCoin] = React.useState([]);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0); // initialize with a default value
  const [isOpen, setIsOpen] = React.useState(false); // add state for list visibility
  // const [selectedOptions, .useState(null);
  const router = useRouter();
  React.useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const { data } = await getData();
        setDataCoin(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataSearch();
  }, []);
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: dataCoin || [],
    getOptionLabel: (option) => option.name || "",
  });
  // if (selectedOptions) {
  //   console.log(selectedOptions);
  // }
  const { onBlur, onFocus, ...inputProps } = getInputProps();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // get the highlighted option, or the first option if none are highlighted
      const selectedOption =
        groupedOptions[highlightedIndex] || groupedOptions[0];

      // navigate to the selected option's URL
      if (selectedOption) {
        router.push(
          "/cryptoMarket/[coinId]",
          `/cryptoMarket/${selectedOption.id}`
        );
        if (openEnter) {
          setHighlightedIndex(selectedOption.id);
          setOpenEnter((prev) => !prev);
          console.log("Enter");
        }
        setIsOpen(false);
      }

      // update the input value to match the selected option's name
      if (selectedOption) {
        event.target.value = selectedOption.name;
      }

      console.log(highlightedIndex, groupedOptions[highlightedIndex]);
      // reset highlightedIndex

      setHighlightedIndex(0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex === 0 ? groupedOptions.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex === groupedOptions.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  return (
    <div dir="rtl" className="autoComplated w-full flex items-center gap-x-2">
      <Link href="/watchList">
        <div className="hidden md:flex p-3 whitespace-nowrap sm:gap-2 hover:text-black hover:bg-gray-100 text-gray">
          <StarIcon fontSize="small" />
          <span className="text-sm font-medium">فهرست شما</span>
        </div>
      </Link>
      <div
        id="autoComplated"
        className="w-full bg-gray-100 hover:outline-blue-200  hover:outline border flex sm:justify-between items-center mr-6 md2:mr-0"
        {...getRootProps()}
      >
        <Input
          className="px-2 pb-2 pt-1  flex-1 font-normal sm:w-44 outline-none focus:border-none focus:outline-none mr-3 md2:mr-0"
          placeholder="جستجو..."
          onBlur={(event) => {
            onBlur(event);
            if (!focused) {
              setAnchorEl(null);
            }
          }}
          onFocus={(event) => {
            onFocus(event);
            setAnchorEl(document.getElementById("trend"));
            setIsOpen(true); // open the list when the input is focused
          }}
          onKeyDown={handleKeyDown}
          // onClose={handleClose}
          {...inputProps}
        />
        <FiSearch className="mx-1" size={18} />
      </div>
      {isOpen && groupedOptions.length > 0 ? (
        <>
          <Listbox
            className="hidden md:flex z-50  absolute shadow border-none flex-col w-80 top-10 left-0 "
            {...getListboxProps()}
          >
            <div
              id="trend"
              className="flex items-center gap-x-1 p-2 mr-1 font-bold "
            >
              <div>محبوبترین</div>
              <FcFlashOn size={25} />
            </div>
            {groupedOptions.map((option, index = option.id) => (
              <li
                key={option.id}
                {...getOptionProps({
                  option,
                  index: option.id,
                })}
                className={
                  highlightedIndex === index
                    ? "flex hover:bg-gray-100 cursor-pointer p-2 mr-1 justify-between bg-gray-100"
                    : "flex hover:bg-gray-100 cursor-pointer p-2 mr-1 justify-between"
                }
                onMouseMove={() => {
                  setHighlightedIndex(index);
                }}
                onClick={() => {
                  // Same logic as handleKeyDown function when "Enter" key is pressed
                  router.push(
                    "/cryptoMarket/[coinId]",
                    `/cryptoMarket/${option.id}`
                  );

                  setIsOpen(false); // close the list when an item is clicked
                  setHighlightedIndex(0);
                }}
              >
                <div className="flex flex-row gap-x-2">
                  <img
                    src={option.image}
                    alt="icon"
                    className="rounded-full h-7 w-7"
                  />
                  <div className="flex gap-x-1.5">
                    {option.name}{" "}
                    <div className="text-gray-500">{option.symbol}</div>
                  </div>
                </div>{" "}
                <div>#{option.market_cap_rank}</div>
              </li>
            ))}
          </Listbox>

          {/* mobile first uL list  */}
          <Listbox
            className="flex md:hidden  absolute shadow border-none flex-col w-full top-[80px] left-0 "
            {...getListboxProps()}
          >
            <div
              id="trend"
              className="flex items-center gap-x-1 p-2 mr-1 font-bold "
            >
              <div>محبوبترین</div>
              <FcFlashOn size={25} />
            </div>
            {groupedOptions.map((option, index = option.id) => (
              <li
                key={option.id}
                {...getOptionProps({
                  option,
                  index: option.id,
                })}
                className={
                  highlightedIndex === index
                    ? "flex hover:bg-gray-100 cursor-pointer p-2 mr-1 justify-between bg-gray-100"
                    : "flex hover:bg-gray-100 cursor-pointer p-2 mr-1 justify-between"
                }
                onMouseMove={() => {
                  setHighlightedIndex(index);
                }}
                onClick={() => {
                  // Same logic as handleKeyDown function when "Enter" key is pressed
                  router.push(
                    "/cryptoMarket/[coinId]",
                    `/cryptoMarket/${option.id}`
                  );

                  setIsOpen(false); // close the list when an item is clicked
                  setHighlightedIndex(0);
                  setOpenEnter((prev) => !prev);
                }}
              >
                <div className="flex flex-row gap-x-2">
                  <img
                    src={option.image}
                    alt="icon"
                    className="rounded-full h-7 w-7"
                  />
                  <div className="flex gap-x-1.5">
                    {option.name}{" "}
                    <div className="text-gray-500">{option.symbol}</div>
                  </div>
                </div>{" "}
                <div>#{option.market_cap_rank}</div>
              </li>
            ))}
          </Listbox>
        </>
      ) : null}
    </div>
  );
}
