// import Image from "next/image";
// import Link from "next/link";
// import { useContext, useEffect } from "react";
// import { HiOutlineStar } from "react-icons/hi";
// import { HiStar } from "react-icons/hi";
// import { listContext } from "../context/WatchListContext";
// import { ShowPriceList } from "../helpers/ShowPriceList";

// const CryptoItem = ({ coin }) => {
//   const { watch, setWatch } = useContext(listContext);

//   useEffect(() => {
//     localStorage.setItem("watchlist", JSON.stringify(watch));
//   }, [watch]);

//   return (
//     <tr key={coin.id} className="border-y border-gray-300">
//       <td>
//         <button
//           onClick={() => {
//             const isExist = watch.find((item) => item.id === coin.id);

//             if (isExist) {
//               const newWatch = watch.filter((item) => item.id !== coin.id);
//               setWatch(newWatch);
//             } else {
//               setWatch([...watch, coin]);
//             }
//           }}
//         >
//           {watch.find((item) => item.id === coin.id) ? (
//             <div className=" w-12 lg:w-10 flex justify-center">
//               <HiStar className="text-orange-400" size={25} />
//             </div>
//           ) : (
//             <div className="w-12 lg:w-10 flex justify-center">
//               <HiOutlineStar size={22} />
//             </div>
//           )}
//         </button>
//       </td>

//       <Link
//         key={coin.id}
//         href="/cryptoMarket/[coinId]"
//         as={`/cryptoMarket/${coin.id}`}
//       >
//         <td className="flex items-center gap-2 my-1 py-3 cursor-pointer">
//           <img
//             src={coin.image}
//             alt="icon"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <p className="text-sm font-bold">
//             {coin.name}
//             <span className="text-gray-400 dark:text-gray-300 font-bold text-[12px] ml-2">
//               {coin.symbol.toLocaleUpperCase()}
//             </span>
//           </p>
//         </td>
//       </Link>

//       <td>
//         <p className="text-[12px] lg:text-[14px] font-bold">
//           {ShowPriceList(coin.price_change_percentage_24h.toFixed(3))}
//         </p>
//       </td>
//       <td>
//         <p className="text-[12px] lg:text-[14px] font-bold hidden lg:flex">
//           $ {coin.current_price.toLocaleString()}
//         </p>
//       </td>
//       <td>
//         <p className="text-[12px] lg:text-[14px] font-bold hidden lg:flex">
//           $ {coin.market_cap.toLocaleString()}
//         </p>
//       </td>
//     </tr>
//   );
// };

// export default CryptoItem;
