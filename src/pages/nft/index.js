import NftList from "@/src/components/NftList";
import { getNft } from "@/src/services/serviceData";

const indexs = ({ data }) => {
    console.log(data);
    return (
        <div className="overflow-x-auto mt-4 min-w-[360px]">
            nft List

            <NftList data={data} />
        </div>
    );
}

export default indexs;
export async function getServerSideProps() {
    try {

        const { data } = await getNft()


        return {
            props: {
                data
            },
        };
    } catch (error) {
        console.error(error);
    }

}