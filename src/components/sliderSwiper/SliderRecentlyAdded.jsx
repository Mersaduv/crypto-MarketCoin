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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect, useState } from "react";
import axios from "axios";
import { ShowPrice } from "@/src/helpers/ShowPrice";
const SliderRecentlyAdded = () => {
  const [newCoin, setNewCoin] = useState([]);

  const fetchRecently = async () => {
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
  };

  useEffect(() => {
    fetchRecently();
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
                      {ShowPrice(item.quote.USD.percent_change_24h.toFixed(3))}
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

export default SliderRecentlyAdded;
