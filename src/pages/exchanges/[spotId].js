import { getOneExchanges } from "@/src/services/serviceData";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = ({ exg }) => {
  console.log(exg);

  return (
    <div>
      details
      <h1>{exg.name}</h1>
      <img src={exg.image} alt={exg.name} />
      <p>Rank : {exg.trust_score_rank} </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params);
  try {
    const { data } = await getOneExchanges(params.spotId);

    return {
      props: {
        exg: data,
      },
    };
  } catch (error) {
    return {
      props: {
        spot: {},
      },
    };
  }
}

export default index;
