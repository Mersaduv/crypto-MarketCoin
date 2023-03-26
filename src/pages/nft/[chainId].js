import { getSomeNft } from "@/src/services/serviceData";

const index = ({ data }) => {
    console.log(data);
    return (
        <div>
            one nft
        </div>
    );
}

export default index;
export async function getServerSideProps(context) {
    const { params } = context;

    try {
        const { data } = await getSomeNft(params.coinId);

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