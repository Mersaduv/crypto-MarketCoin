import ExgangesList from "@/src/components/ExgangesList";
import { getExchanges } from "@/src/services/serviceData";


const index = ({ coin }) => {
  // const [cryptoInfo] = coin;
  return (
    <div>
      <ExgangesList data={coin} />
    </div>
  );
};

export async function getServerSideProps() {
  // const { id } = context.query;

  try {
    const { data } = await getExchanges();

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
