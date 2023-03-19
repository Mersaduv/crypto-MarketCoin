
// image
import Image from "next/image";
import rocketSvg from "../../public/rocket-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { FcFlashOn } from "react-icons/fc";
const TrendingCoins = () => {
  const [coinsList, setCoinsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoinsList(data.coins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col  text-xs">
      <div className="flex gap-x-1">
        <div>Trending</div>
        <FcFlashOn />
      </div>
      <div className="flex flex-col">
        {coinsList &&
          coinsList.map((crypto) => (
            <div
              key={crypto.item.coin_id}
              className="flex font-bold justify-between"
            >
              {" "}
              <div className="flex flex-row">
                <img
                  src={crypto.item.small}
                  alt="icon"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <div>
                  {crypto.item.name}{" "}
                  <div className="text-gray-500">{crypto.item.symbol}</div>
                </div>
              </div>{" "}
              <div>{crypto.item.market_cap_rank} // Enter</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
