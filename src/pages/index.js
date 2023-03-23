// import Link from "next/link";
import CryptoList from "../components/CryptoList";
import SectionHead from "../components/SectionHead";
// import { fetchCoins } from "../redux/cryptoSlice/cryptoSlice";

import { getData } from "../services/serviceData";
export default function Home({ data }) {
  return (
    <>
      <div className="w-2/3">
        <SectionHead />
      </div>
      <div className="overflow-x-auto mt-4">

        <CryptoList data={data} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await getData();

  // const { data } = await fetchCoins(); درخواست دیتا با موفقیت انجام نشد !!!!!

  return { props: { data } };
}
