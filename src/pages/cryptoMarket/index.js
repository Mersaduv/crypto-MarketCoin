import CryptoList from "@/src/components/CryptoList";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";
import SectionHead from "@/src/components/SectionHead";

const index = ({ coinData, page }) => {
  // console.log(coinData);
  const [hasWindow, setHasWindow] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (

    <div className="max-w-screen-2xl m-auto  ">
      {hasWindow && (
        <>

          <div className="w-2/3  mt-8 mb-6 mx-2">
            <SectionHead />
          </div>
          <div className="overflow-x-auto mt-4 min-w-[360px]">
            <CryptoList data={coinData} />
          </div>


          <Stack dir="ltr" className="w-full nextpage" display={"flex"} justifyContent={"center"} spacing={2}>
            {coinData.length >= 50 && (
              <Pagination
                count={coinData.length}
                page={page}

                color="primary"
                shape="rounded"
                onChange={(event, value) => {
                  router.push(`/cryptoMarket?page=${value}`);
                }}

              />
            )}
          </Stack>



        </>
      )}


    </div>
  );
};
// Get the data in the next.js page using getServerSideProps
export const getServerSideProps = async ({ query }) => {
  let page = +query.page || 1;

  try {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
    );
    const coinData = result.data;

    return {
      props: {
        coinData,
        page,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        coinData: [],
        page,
      },
    };
  }
};

export default index;
