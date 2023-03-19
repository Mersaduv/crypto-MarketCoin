import { getOneExchanges } from "@/src/services/serviceData";


const index = ({ exg }) => {
  console.log(exg);

  return (
    <div>
      details
      <h1>{exg.name}</h1>
      <div>Rank : {exg.trust_score_rank} </div>
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
