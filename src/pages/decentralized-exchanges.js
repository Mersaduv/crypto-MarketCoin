
import axios from "axios";
import DecentralizedExchanges from "../components/DecentralizedExchanges";


const indexs = ({ data }) => {
    console.log(data.data);
    return (
        <div className="overflow-x-auto mt-4 min-w-[360px]">
            <h1 className="text-2xl font-bold my-6"> صرافی غیر متمرکز</h1>
            <hr />
            <div className=" my-4">
                <h2 className="font-semibold text-lg">   از ویژگی‌های صرافی غیر متمرکز می‌توان به موارد زیر اشاره کرد:</h2>
                <li className="my-2">نیاز به برداشت یا واریز نیست. تمام تراکنش‌های همتا به همتا توسط قراردادهای هوشمند مدیریت می‌شوند.</li>
                <li className="">هیچ شخص و سازمانی قادر به تنظیم یا کنترل آنها نیست.</li>
                <li className="my-2">ارزهای دیجیتال از کیف پول‌های دیگر به‌غیر از کیف‌های موجود در صرافی ارزهای دیجیتال منتقل می‌شوند. درواقع صرافی غیر متمرکز به کیف پول ارز دیجیتال شما متصل شده و معامله را انجام می‌دهد.</li>

            </div>
            <hr />


            <div className="my-4 text-center font-bold">ضمن اطلاع رسانی سرویس های بخش تبادله Decentralized Exchange متوقف شده </div>
            <DecentralizedExchanges />



        </div>
    );
}

export default indexs;
export async function getServerSideProps() {
    try {

        const { data } = await axios.get("https://api.coingecko.com/api/v3/global/decentralized_finance_defi")


        return {
            props: {
                data
            },
        };
    } catch (error) {
        console.error(error);
    }

}