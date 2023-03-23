// // image
// import Image from "next/image";
// import rocketSvg from "../../public/rocket-icon.svg";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FcFlashOn } from "react-icons/fc";
// import { getData } from "../services/serviceData";
// const TrendBeta = ({ options }) => {
//   const [coinsList, setCoinsList] = useState([options]);

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const { data } = await getData();
//   //         setCoinsList(data);
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //     };
//   //     fetchData();
//   //   }, []);

//   return (
//     <div className="flex flex-col  text-xs">
//       <div className="flex gap-x-1">
//         <div>Trending</div>
//         <FcFlashOn />
//       </div>
//       <div className="flex flex-col">
//         {coinsList &&
//           coinsList.map((crypto) => (
//             <div key={crypto.id} className="flex font-bold justify-between">
//               {" "}
//               <div className="flex flex-row">
//                 <img
//                   src={crypto.image}
//                   alt="icon"
//                   className="rounded-full h-9 w-9"
//                 />
//                 <div>
//                   {crypto.name}{" "}
//                   <div className="text-gray-500">{crypto.symbol}</div>
//                 </div>
//               </div>{" "}
//               <div>{crypto.market_cap_rank} // Enter</div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default TrendBeta;
