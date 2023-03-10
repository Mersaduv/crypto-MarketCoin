import Link from "next/link";
import CryptoList from "../components/CryptoList";
import { fetchCoins } from "../redux/cryptoSlice/cryptoSlice";

import { getData } from "../services/serviceData";
export default function Home({ data }) {
  return (
    <>
      <div className="text-3xl font-bold underline">Market</div>
      <div>

      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await getData();

  // const { data } = await fetchCoins(); درخواست دیتا با موفقیت انجام نشد !!!!!

  return { props: { data } };
}
