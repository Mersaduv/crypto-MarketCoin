import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExchangesItem from "./ExchangesItem";

const ExgangesList = ({ data }) => {
  // const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.cryptos);

  // useEffect(() => {
  //   dispatch(fetchCoins());
  // }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((exg) => (
        <ExchangesItem key={exg.id} exg={exg} />
      ))}
    </ul>
  );
};
// export async function getStaticProps() {
//   const { data } = await fetchCoins();
//   return { props: { data } };
// }

export default ExgangesList;
