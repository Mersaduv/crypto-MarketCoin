import dynamic from "next/dynamic";

// import Link from "next/link";

const Link = dynamic(() => import("next/link"), { ssr: false });
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React, { useContext, useEffect } from "react";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";

import { ShowPriceList } from "../helpers/ShowPriceList";
import moment from "moment-jalaali";
import "moment/locale/fa"; // import the Persian (fa) locale
import { listContextNewCoin } from "../context/WatchListContextNewCoin";

const NewCryptocurrencies = ({ data }) => {
  const { watch, setWatch } = useContext(listContextNewCoin);
  console.log(data);
  useEffect(() => {
    localStorage.setItem("watchlist-newcoin", JSON.stringify(watch));
  }, [watch]);

  return (
    <table className="table-auto w-[98%] whitespace-nowrap m-auto overflow-x-auto ">
      <thead>
        <tr>
          <th className="text-center lg:text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 lg:p-2 font-medium text-sm ">
            دنبال کردن
          </th>
          <th
            className={`text-start  dark:bg-black text-gray-500 dark:text-gray-300 pb-2 pl-6 lg:p-2 font-medium text-sm`}
          >
            نام
          </th>
          <th className="text-start pr-4 text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm">
            قیمت
          </th>
          <th className="text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  ">
            % 24H
          </th>
          <th className="text-start pr-2 text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  md:table-cell">
            کل مارکت
          </th>
          <th className="text-start pr-2 text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  md:table-cell">
            بلاکچین
          </th>
          <th className="text-start pr-2 text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  md:table-cell">
            ایجاد شده
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id} className="border-y bg-gray-50 hover:bg-gray-100 border-gray-300">
            <td>
              <button
                onClick={() => {
                  const isExist = watch.find((item) => item.id === coin.id);

                  if (isExist) {
                    const newWatch = watch.filter(
                      (item) => item.id !== coin.id
                    );
                    setWatch(newWatch);
                  } else {
                    setWatch([...watch, coin]);
                  }
                }}
              >
                {watch.find((item) => item.id === coin.id) ? (
                  <div className=" w-12 lg:w-10 flex justify-center">
                    <HiStar className="text-orange-400" size={25} />
                  </div>
                ) : (
                  <div className="w-12 lg:w-10 flex justify-center">
                    <HiOutlineStar size={22} />
                  </div>
                )}
              </button>
            </td>
            <td className="cursor-pointer whitespace-pre-wrap py-4 ">
              {/* <img
                  src={coin.image}
                  alt="icon"
                  width={30}
                  height={30}
                  className="rounded-full"
                /> */}
              <div className="text-sm font-bold">
                {coin.name}
                <div className="text-gray-400 dark:text-gray-300 font-bold text-[12px] ml-2">
                  {coin.symbol.toLocaleUpperCase()}
                </div>
              </div>
            </td>

            <td>
              <div className="text-[12px] lg:text-[14px] font-bold mr-4">
                {ShowPriceList(coin.quote.USD.percent_change_24h.toFixed(3))}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                $ {coin.quote.USD.price.toLocaleString()}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] mr-2 font-bold  md:flex">
                $ {coin.quote.USD.fully_diluted_market_cap.toLocaleString()}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] mr-2 font-bold  md:flex">
                {coin.platform ? (
                  coin.platform.symbol
                ) : (
                  <AccountBalanceWalletIcon className="text-gray-500" />
                )}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] mr-2 font-bold  md:flex">
                {moment(coin.date_added).locale("fa").fromNow()}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewCryptocurrencies;
