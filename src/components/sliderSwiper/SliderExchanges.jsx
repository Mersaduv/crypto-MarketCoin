
// swiper
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// mui
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const SliderExchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  const fetchExchanges = async () => {
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
  };
  useEffect(() => {
    fetchExchanges();
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
  );
};

export default SliderExchanges;
