import * as React from "react";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { getData } from "../services/serviceData";
import Link from "next/link";
import { useRouter } from "next/router";
import TrendBeta from "./TrendBeta";
import { FcFlashOn } from "react-icons/fc";
import StarIcon from "@mui/icons-material/Star";

import { Typography } from "@mui/material";
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
  const [dataCoin, setDataCoin] = React.useState([]);

  const [, setInputValue] = React.useState("");
  const router = useRouter();
  React.useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const { data } = await getData();
        setDataCoin(data);
        console.log(data);
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
    highlightedIndex,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: dataCoin || [],
    getOptionLabel: (option) => option.name || "",
  });
  // Get the value of the first option if it exists
  const { value, ...inputProps } = getInputProps();

  // Pass the defaultValue prop to the input element using spread syntax.
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     // find the first option
  //     const firstOption = groupedOptions[0];
  //     if (firstOption) {
  //       // set the input value to the first option's label

  //       // setInputValue(firstOption.name);
  //       // navigate to the first option's URL

  //       router.push(
  //         "/cryptoMarket/[coinId]",
  //         `/cryptoMarket/${firstOption.id}`
  //       );

  //       console.log(firstOption, event.target.value);
  //       event.target.value = firstOption.name;
  //     }
  //   }
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(highlightedIndex);
      // find the highlighted option
      const highlightedOption = groupedOptions[highlightedIndex];
      if (highlightedOption) {
        // navigate to the highlighted option's URL
        router.push(
          "/cryptoMarket/[coinId]",
          `/cryptoMarket/${highlightedOption.id}`
        );

        console.log(highlightedOption, event.target.value);
        event.target.value = highlightedOption.name;
      }
    }
    // console.log(value);
  };

  return (
    <div className="autoComplate flex items-center gap-x-2">
      <Link href="/watchlist">
        <Typography
          sx={{
            display: "flex",
            padding: "6px",
            whiteSpace: "nowrap",
            gap: "2px",
            "&:hover": {
              color: "#000", // black color on hover
              backgroundColor: "#f5f5f5", // lighten the gray color on hover
            },
          }}
          component="span"
          alignItems="center"
          color="gray"
        >
          <StarIcon fontSize="small" />
          <Typography variant="subtitle2">فهرست شما</Typography>
        </Typography>
      </Link>
      <div {...getRootProps()}>
        <Input
          className="px-2 pb-2 pt-1"
          placeholder="جستجو..."
          onKeyDown={handleKeyDown} // handle keydown event
          {...inputProps}
        />
      </div>
      {groupedOptions.length > 0 && (
        <Listbox
          className="flex absolute shadow border-none flex-col w-80 top-10 left-0 "
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
                index,
              })}
              className="flex hover:bg-gray-100 cursor-pointer p-2 mr-1 justify-between"
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
      )}
    </div>
  );
}
