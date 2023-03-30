import Image from "next/image";

// swiper
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import slideOne from "../../public/slide-one.png";

// mui
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { ShowPrice } from "../helpers/ShowPrice";
import { FcFlashOn } from "react-icons/fc";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useContext, useEffect, useState } from "react";
import { listContextNewCoin } from "../context/WatchListContextNewCoin";
import axios from "axios";
import { getExchanges } from "../services/serviceData";
const Slider = () => {
  const [newCoin, setNewCoin] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [topCoins, setTopCoin] = useState([]);

  //   const watchNew = useContext(listContextNewCoin);

  useEffect(() => {
    const fetchDataSlide = async () => {
      // for Recently Added
      try {
        const response = await axios.get(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "6d6593a5-aaa8-4a92-877c-ad1021319e58",
            },
            params: {
              sort: "date_added",
              limit: 9, // change this to the number of recently added cryptos you want to retrieve
            },
          }
        );
        const newCoins = response.data;
        setNewCoin(newCoins.data);
        // console.log(newCoins);
      } catch (error) {
        console.error(error);
      }

      // for Top Exchanges
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges?per_page=9"
        );
        const exchangesData = response.data;
        setExchanges(exchangesData);
        // console.log(exchangesData);
      } catch (error) {
        console.error(error);
      }

      // for Trending market
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false&locale=en"
        );
        const topCoin = response.data;
        setTopCoin(topCoin);
        console.log(topCoin);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataSlide();
  }, []);

  const content = [
    {
      id: 1,
      rank: 1,
      img: slideOne,
      name: "bitcoin",
      symbol: "BTC",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 2,
      rank: 2,
      img: slideOne,
      name: "etheruim",
      symbol: "ETH",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 3,
      rank: 3,
      img: slideOne,
      name: "Ripple",
      symbol: "XRP",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 4,
      rank: 4,
      img: slideOne,
      name: "bitcoin",
      symbol: "BTC",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 5,
      rank: 5,
      img: slideOne,
      name: "etheruim",
      symbol: "ETH",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 6,
      rank: 6,
      img: slideOne,
      name: "Ripple",
      symbol: "XRP",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 7,
      rank: 7,
      img: slideOne,
      name: "bitcoin",
      symbol: "BTC",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 8,
      rank: 8,
      img: slideOne,
      name: "etheruim",
      symbol: "ETH",
      price_change_percentage_24h: 12.34422331,
    },
    {
      id: 9,
      rank: 9,
      img: slideOne,
      name: "Ripple",
      symbol: "XRP",
      price_change_percentage_24h: 12.34422331,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      {newCoin && (
        <>
          {/* Swiper Slider for Trending market  */}
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="mySwiper w-1/3  shadowSlide rounded-xl "
            style={{ margin: "100px 0px" }}
          >
            {topCoins
              .reduce((acc, curr, i) => {
                if (i % 3 === 0) acc.push([]);
                acc[acc.length - 1].push(curr);
                return acc;
              }, [])
              .map((subArray) => (
                <SwiperSlide key={subArray[0].id}>
                  <Box
                    sx={{
                      fontSize: "19px",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: -2,
                      margin: 2,
                    }}
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={{ md2: "16px", md3: "19px" }}
                      gap={1}
                    >
                      <FcFlashOn size={22} />
                      <Box>برترین های مارکت</Box>
                    </Box>

                    <Link
                      href="/"
                      className="text-[#2563eb] hover:text-[#77a0f8]  -ml-2 cursor-pointer text-sm"
                    >
                      بیشتر
                      <KeyboardArrowLeftIcon />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",

                      mb: "30px",
                      gap: "27px",
                    }}
                  >
                    {subArray.map((item) => (
                      <Box
                        key={item.id}
                        display={"flex"}
                        justifyContent={"space-between"}
                        paddingX={1.5}
                      >
                        <Box display={"flex"} gap={2}>
                          <Typography fontSize={14} color={"gray"}>
                            #{item.market_cap_rank}
                          </Typography>
                          <img src={item.image} alt="banner" width={23} />
                          <Typography
                            fontSize={{ md2: "13px", md3: "16px" }}
                            noWrap
                            maxWidth={{
                              md2: "60px",
                              md3: "110px",
                              lg: "150px",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            fontSize={14}
                            color={"gray"}
                            marginLeft={2}
                          >
                            {item.symbol.toLocaleUpperCase()}
                          </Typography>
                        </Box>

                        <Box>
                          {ShowPrice(
                            item.price_change_percentage_24h.toFixed(2)
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Swiper Slider for Recently Added  */}
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="mySwiper w-1/3  shadowSlide rounded-xl "
            style={{ margin: "100px 0px" }}
          >
            {newCoin
              .reduce((acc, curr, i) => {
                if (i % 3 === 0) acc.push([]);
                acc[acc.length - 1].push(curr);
                return acc;
              }, [])
              .map((subArray) => (
                <SwiperSlide key={subArray[0].id}>
                  <Box
                    sx={{
                      fontSize: "19px",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: -2,
                      margin: 2,
                    }}
                  >
                    <Box
                      fontSize={{ md2: "16px", md3: "19px" }}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <AccessTimeIcon size={22} />
                      <Box>به تازگی اضافه شده</Box>
                    </Box>

                    <Link
                      href="/new-cryptocurrencies"
                      className="text-[#2563eb] hover:text-[#77a0f8]  -ml-2 cursor-pointer text-sm"
                    >
                      بیشتر
                      <KeyboardArrowLeftIcon />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",

                      mb: "30px",
                      gap: "27px",
                    }}
                  >
                    {subArray.map((item) => (
                      <Box
                        key={item.id}
                        display={"flex"}
                        justifyContent={"space-between"}
                        paddingX={1.5}
                      >
                        <Box display={"flex"} gap={1}>
                          <Typography fontSize={14} color={"gray"}>
                            #{item.cmc_rank}
                          </Typography>
                          {/* <img src={item.img} alt="banner" width={20} /> */}
                          <Typography
                            noWrap
                            fontSize={{ md2: "13px", md3: "16px" }}
                            maxWidth={{
                              md2: "60px",
                              md3: "110px",
                              lg: "150px",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography fontSize={{ md2: "13px", md3: "16px" }}>
                            {item.symbol.toLocaleUpperCase()}
                          </Typography>
                        </Box>
                        <Box>
                          {ShowPrice(
                            item.quote.USD.percent_change_24h.toFixed(3)
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Swiper Slider for Top Exchanges  */}
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="mySwiper w-1/3  shadowSlide rounded-xl "
            style={{ margin: "100px 0px" }}
          >
            {exchanges
              .reduce((acc, curr, i) => {
                if (i % 3 === 0) acc.push([]);
                acc[acc.length - 1].push(curr);
                return acc;
              }, [])
              .map((subArray) => (
                <SwiperSlide key={subArray[0].id}>
                  <Box
                    sx={{
                      fontSize: "19px",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: -2,
                      margin: 2,
                    }}
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={{ md2: "16px", md3: "19px" }}
                      gap={1}
                    >
                      <CurrencyExchangeIcon size={22} />
                      <Box>صرافی های برتر</Box>
                    </Box>

                    <Link
                      href="/exchanges"
                      className="text-[#2563eb] hover:text-[#77a0f8]  -ml-2 cursor-pointer text-sm"
                    >
                      بیشتر
                      <KeyboardArrowLeftIcon />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",

                      mb: "30px",
                      gap: "27px",
                    }}
                  >
                    {subArray.map((item) => (
                      <Box
                        key={item.id}
                        display={"flex"}
                        justifyContent={"space-between"}
                        paddingX={1.5}
                      >
                        <Box display={"flex"} gap={1}>
                          <Typography fontSize={14} color={"gray"}>
                            #{item.trust_score_rank}
                          </Typography>
                          <img src={item.image} alt="banner" width={23} />
                          <Typography
                            fontSize={{ md2: "13px", md3: "16px" }}
                            noWrap
                            maxWidth={{
                              md2: "85px",
                              md3: "130px",
                              lg: "150px",
                            }}
                          >
                            {item.name}
                          </Typography>
                          {/* <Typography>
                            {item.symbol.toLocaleUpperCase()}
                          </Typography> */}
                        </Box>
                        <Box whiteSpace={"nowrap"} fontSize={14} color={"gray"}>
                          امتیاز : {item.trust_score}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
    </Box>
  );
};

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get(
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": "6d6593a5-aaa8-4a92-877c-ad1021319e58",
//         },
//         params: {
//           sort: "date_added",
//           limit: 9, // change this to the number of recently added cryptos you want to retrieve
//         },
//       }
//     );
//     const newCoin = response.data;
//     return {
//       props: {
//         newCoin,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//   }
// }
export default Slider;
