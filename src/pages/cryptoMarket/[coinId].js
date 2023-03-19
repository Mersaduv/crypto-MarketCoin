import { getSomeData } from "@/src/services/serviceData";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = ({ coin }) => {
  const [cryptoDetail] = coin;
  return (
    <div>
      <h1>
        {cryptoDetail.name} ({cryptoDetail.symbol})
      </h1>
      {/* <img src={cryptoDetail.image} alt={cryptoDetail.name} /> */}
      <div>Current Price: {cryptoDetail.current_price} USD</div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  try {
    const { data } = await getSomeData(params.coinId);

    return {
      props: {
        coin: data,
      },
    };
  } catch (error) {
    return {
      props: {
        coin: {},
      },
    };
  }
}

export default index;
