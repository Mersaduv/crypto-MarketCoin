import NftList from "@/src/components/NftList";
import { getNft } from "@/src/services/serviceData";

const indexs = ({ data }) => {
    console.log(data);
    return (
        <div className="">
            <section className="mt-8 mb-6 mx-2">
                <h1 className="text-2xl font-bold">بالاترین قیمت آمار NFT</h1>
                <div className="text-gray-500 my-4">آمار برای مجموعه NFT و دارایی های فردی است که برای بالاترین قیمت به فروش می رسد. ما داده ها را به ترتیب نزولی فهرست می کنیم</div>
            </section>
            <div className=" overflow-x-auto mt-4 min-w-[360px]">
                <NftList data={data} />
            </div>

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