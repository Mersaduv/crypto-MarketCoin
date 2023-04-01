// swiper
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// mui
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
// import { ShowPrice } from "../helpers/ShowPrice";
import { FcFlashOn } from "react-icons/fc";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect, useState } from "react";

import axios from "axios";
import { ShowPrice } from "@/src/helpers/ShowPrice";
const SliderTrendMarket = () => {
  const [topCoins, setTopCoin] = useState([]);

  const fetchTrend = async () => {
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

  useEffect(() => {
    fetchTrend();
  }, []);

  return (
    <>
      <Swiper
        autoplay={{ delay: 4000 }}
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
                      <Typography fontSize={14} color={"gray"} marginLeft={2}>
                        {item.symbol.toLocaleUpperCase()}
                      </Typography>
                    </Box>

                    <Box>
                      {ShowPrice(item.price_change_percentage_24h.toFixed(2))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SliderTrendMarket;
