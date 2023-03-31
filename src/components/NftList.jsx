import Link from "next/link";
import { useContext, useEffect } from "react";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { listContextNFT } from "../context/WatchListNFT";
const NftList = ({ data }) => {
  const { watch, setWatch } = useContext(listContextNFT);
  //   console.log(data);
  useEffect(() => {
    localStorage.setItem("watchlist-nft", JSON.stringify(watch));
  }, [watch]);

  return (
    <table className="table-auto w-[98%] whitespace-nowrap m-auto overflow-x-auto ">
      <thead>
        <tr>
          <th className="text-center lg:text-start text-gray-500  pb-2 pl-6 lg:p-2 font-medium text-sm ">
            دنبال کردن
          </th>
          <th
            className={`text-start   text-gray-500  pb-2 pl-6 lg:p-2 font-medium text-sm`}
          >
            نام
          </th>

          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  ">
            پلتفرم
          </th>
          <th className="text-start pr-2 text-gray-500  pb-2 pl-6 font-medium text-sm  md:table-cell">
            آدرس قرارداد
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((chain) => (
          <tr
            key={chain.id}
            className="border-y bg-gray-50 hover:bg-gray-100 border-gray-300"
          >
            <td>
              <button
                onClick={() => {
                  const isExist = watch.find((item) => item.id === chain.id);

                  if (isExist) {
                    const newWatch = watch.filter(
                      (item) => item.id !== chain.id
                    );
                    setWatch(newWatch);
                  } else {
                    setWatch([...watch, chain]);
                  }
                }}
              >
                {watch.find((item) => item.id === chain.id) ? (
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
            <td className="cursor-pointer whitespace-pre-wrap flex items-center py-4  sm:w-auto  gap-2 ">
              <div className="text-gray-400  font-bold text-[12px] ml-2">
                {chain.symbol.toLocaleUpperCase()}
              </div>
              {/* <img
                  src={chain.symbol}
                  alt="icon"
                  width={30}
                  height={30}
                  className="rounded-full"
                /> */}
              <div className="text-sm font-bold">
                {chain.name}
                {/* <div className="text-gray-400  font-bold text-[12px] ml-2">
                    {chain.symbol.toLocaleUpperCase()}
                  </div> */}
              </div>
            </td>

            <td>
              <div className="text-[12px] lg:text-[14px] font-bold ">
                {chain.asset_platform_id}
              </div>
            </td>

            <td>
              <div className="text-[12px] lg:text-[14px] mr-2 font-bold  md:flex">
                $ {chain.contract_address}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NftList;
