import ExgangesList from "@/src/components/ExgangesList";
import { getExchanges } from "@/src/services/serviceData";
import axios from "axios";
import { useEffect, useState } from "react";

const index = ({ data, dataExMarket }) => {
  const [showMore, setMore] = useState(false);
  console.log(dataExMarket);
  // const [cryptoInfo] = coin;
  return (
    <div>
      <section className="mt-8 mb-6 mx-2">
        <h1 className="text-2xl font-bold">صرافی‌های ارز دیجیتال برتر</h1>
        <div className="">
          <div>مارکت کوین از رتبه‌بندی و امتیازدهی صرافی‌ها براساس ترافیک، نوسان پذیری، حجم معاملات و اعتماد به صحت حجم معاملات گزارش شده استفاده میکند     <div

            onClick={() => setMore((prev) => !prev)}
            className={` text-[#84abff] font-bold underline inline-block cursor-pointer`}
          >
            {/*Clickable Div*/}
            نمایش {!showMore ? " بیشتر" : "کمتر "}
          </div></div>

          {showMore && <div>
            {dataExMarket && `  در حال حاضر ${dataExMarket.data.length} صرافی ارز دیجیتال با حجم کل ۲۴ ساعته ردیابی می‌شوند.  رتبه‌بندی صرافی‌ها`}
          </div>}
        </div>
      </section>
      <div className=" min-w-[360px] overflow-x-auto">
        <ExgangesList data={data} />
      </div>

    </div>
  );
};

export async function getServerSideProps() {
  // const { id } = context.query;

  try {
    const { data } = await getExchanges();
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/exchange/map', {
      headers: {
        'X-CMC_PRO_API_KEY': '6d6593a5-aaa8-4a92-877c-ad1021319e58',
      }
    })
    const dataExMarket = response.data
    return {
      props: {
        data,
        dataExMarket
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
