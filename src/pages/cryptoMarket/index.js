import CryptoList from "@/src/components/CryptoList";
import { getData, getSomeData } from "@/src/services/serviceData";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = ({ coin }) => {
  // const [cryptoInfo] = coin;
  return (
    <div>
      <CryptoList data={coin} />
    </div>
  );
};

export async function getServerSideProps() {
  // const { id } = context.query;

  try {
    const { data } = await getData();

    return {
      props: {
        coin: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        coin: {},
      },
    };
  }
}

export default index;
