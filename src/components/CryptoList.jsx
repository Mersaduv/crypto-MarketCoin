import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../redux/cryptoSlice/cryptoSlice";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ data }) => {
  // const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.cryptos);

  // useEffect(() => {
  //   dispatch(fetchCoins());
  // }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((coin) => (
        <CryptoItem key={coin.id} coin={coin} />
      ))}
    </ul>
  );
};
// export async function getStaticProps() {
//   const { data } = await fetchCoins();
//   return { props: { data } };
// }

export default CryptoList;
