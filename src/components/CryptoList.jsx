import dynamic from "next/dynamic";

// import Link from "next/link";

const Link = dynamic(() => import("next/link"), { ssr: false });

import React, { useContext, useEffect } from "react";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { listContext } from "../context/WatchListContext";
import { ShowPriceList } from "../helpers/ShowPriceList";
import CoinChart from "./CoinChart";

const CryptoList = ({ data }) => {
  const { watch, setWatch } = useContext(listContext);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watch));
  }, [watch]);

  return (
    <table className="table-auto w-[92%] whitespace-nowrap m-auto overflow-x-auto ">
      <thead>
        <tr>
          <th className="text-center lg:text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 lg:p-2 font-medium text-sm ">
            دنبال کردن
          </th>
          <th className="text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 lg:p-2 font-medium text-sm">
            نام
          </th>
          <th className="text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm">
            % 24H
          </th>
          <th className="text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  ">
            قیمت
          </th>
          <th className="text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  md:table-cell">
            مارکت
          </th>
          <th className="text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm  md:table-cell">
            وضعیت هفته
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id} className="border-y border-gray-300">
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
            <td className="cursor-pointer py-4">
              <Link
                href="/cryptoMarket/[coinId]"
                as={`/cryptoMarket/${coin.id}`}
                className="flex items-center gap-2"
              >
                <img
                  src={coin.image}
                  alt="icon"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="text-sm font-bold">
                  {coin.name}
                  <div className="text-gray-400 dark:text-gray-300 font-bold text-[12px] ml-2">
                    {coin.symbol.toLocaleUpperCase()}
                  </div>
                </div>
              </Link>
            </td>

            <td>
              <div className="text-[12px] lg:text-[14px] font-bold">
                {ShowPriceList(coin.price_change_percentage_24h.toFixed(3))}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                $ {coin.current_price.toLocaleString()}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                $ {coin.market_cap.toLocaleString()}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                {/* <CoinChart coin={coin} time7d={7} /> */}
                    اختلال شبکه نمودار           <span>
                        <svg style={{ color: 'rgb(220 38 38)', width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                    </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoList;
