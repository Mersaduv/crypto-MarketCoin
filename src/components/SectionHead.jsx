import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShowPrice } from "../helpers/ShowPrice";

const SectionHead = () => {
  const [showMore, setMore] = useState(false);
  const [error, setError] = useState("");
  const [marketdata, setMarketData] = useState({
    totalMarket: "",
    marketCap24: "",
    defiVolume: "",
    stableCoin: "",
    percentageChange: null,
    btcDominance: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "6d6593a5-aaa8-4a92-877c-ad1021319e58",
            },
          }
        );
        console.log(response);
        const totalMarketCap = response.data.data.quote.USD.total_market_cap;
        const totalMarketCap24 = response.data.data.quote.USD.total_volume_24h;
        const stableVolume24 = response.data.data.stablecoin_volume_24h;
        const oldDominace = response.data.data.btc_dominance_yesterday;
        const newDominace = response.data.data.btc_dominance;
        const defiVolume = (
          response.data.data.quote.USD.defi_volume_24h / 1_000_000_000
        ).toFixed(2);

        // Format total market cap to include billion and millions with comma separator
        const billionMarketCap = (
          totalMarketCap / 1_000_000_000
        ).toLocaleString(undefined, { maximumFractionDigits: 2 });
        const millionMarketCap = (
          (totalMarketCap % 1_000_000_000) /
          1_000_000
        ).toLocaleString(undefined, { maximumFractionDigits: 2 });

        // Extract the two decimal digits after the comma and append them with "B"
        const decimalPart = (
          `0${(totalMarketCap / 1_000_000_000).toFixed(2)}`.split(".")[1] ||
          "00"
        ).slice(0, 2);

        const newTotalMarket = `$${
          billionMarketCap.split(".")[0]
        }.${decimalPart}B`;

        // Format the total volume in the last 24 hours in the same way
        const billionMarketCap24 = (
          totalMarketCap24 / 1_000_000_000
        ).toLocaleString(undefined, { maximumFractionDigits: 2 });
        const decimalPart24 = (
          `0${(totalMarketCap24 / 1_000_000_000).toFixed(2)}`.split(".")[1] ||
          "00"
        ).slice(0, 2);

        const newMarketCap24 = `$${
          billionMarketCap24.split(".")[0]
        }.${decimalPart24}B`;

        // Calculate the total volume in stablecoin in billions with two decimal places
        const billionStableVol = (
          stableVolume24 / 1_000_000_000
        ).toLocaleString(undefined, { maximumFractionDigits: 2 });
        const decimalPartStableVol = (
          `0${(stableVolume24 / 1_000_000_000).toFixed(2)}`.split(".")[1] ||
          "00"
        ).slice(0, 2);
        const newStableCoin = `$${
          billionStableVol.split(".")[0]
        }.${decimalPartStableVol}B`;

        const percentageChange =
          ((newDominace - oldDominace) / oldDominace) * 100;

        setMarketData({
          totalMarket: newTotalMarket,
          marketCap24: newMarketCap24,
          defiVolume: defiVolume,
          stableCoin: newStableCoin,
          btcDominance: response.data.data.btc_dominance.toFixed(2),
          data: response.data.data,
          percentageChange: percentageChange,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      {/*Displays a section*/}
      <h1 className="font-bold text-3xl mb-3">
        میزان رمزارزها امروز براساس حجم بازار
        {/*Displays the heading content*/}
      </h1>
      {marketdata.data && (
        <div>
          مجموعه بازار رمزارز جهان در حال حاضر {marketdata.totalMarket} میلیارد
          دلار است، که{" "}
          <span>
            {ShowPrice(
              marketdata.data.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(
                1
              )
            )}
          </span>{" "}
          نسبت به روز قبل{" "}
          {marketdata.data.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(
            1
          ) > 0
            ? " افزایش "
            : "  کاهش "}{" "}
          یافته است.{" "}
          <p
            onClick={() => setMore((prev) => !prev)}
            className={` text-[#84abff] font-bold underline inline-block cursor-pointer`}
          >
            {/*Clickable Div*/}
            نمایش {!showMore ? " بیشتر" : "کمتر "}
          </p>
        </div>
      )}

      {showMore && (
        <div>
          <p component="span" variant="body2">
            {/*If showMore is true then renders below div*/}
            حجم بازار کل رمزارز در طول ۲۴ ساعت گذشته{" "}
            {/*Displays Volume of Cryptocurrency Market in Last 24 hours */}
            {marketdata.marketCap24} میلیارد دلار بوده که{" "}
            {ShowPrice(
              marketdata.data.quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(
                2
              )
            )}
            {marketdata.data.quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(
              2
            ) > 0
              ? " افزایش"
              : "  کاهش "}
            {/*Displays the percentage Change in Total volume of cryptocurrency market in last 24 hour*/}
            پیدا کرده است.
          </p>
          <div>
            <p>
              حجم DeFi در حال حاضر {marketdata.defiVolume} میلیارد دلار است.
              {/*Displays the new information about DeFi*/}
              حجم همه stable coin ها در حال حاضر {marketdata.stableCoin} است،
              همچنین ظرفیت Bitcoin در حال حاضر{" "}
              {marketdata.data.btc_dominance.toFixed(2)}٪ است که{" "}
              {ShowPrice(marketdata.percentageChange.toFixed(2))} نسبت به روز
              قبل
              {marketdata.percentageChange > 0 ? " افزایش" : "  کاهش "} یافته
              است.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionHead;
