import axios from 'axios';
import NewCryptocurrencies from '../components/NewCryptocurrencies';
const NewCryptocurrencie = ({ data }) => {

    return (<div className='min-w-[360px] overflow-x-auto'>
        <h1 className='text-2xl font-bold '>رمزارزهای جدید</h1>
        <p className='text-gray-500 my-4'>
            رمزارزهای جدید اضافه شده به MarketCoin در 30 روز گذشته</p>
        <NewCryptocurrencies data={data.data} />
    </div>);
}

export default NewCryptocurrencie;


export async function getServerSideProps() {
    try {
        const { data } = await axios.get(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            {
                headers: {
                    'X-CMC_PRO_API_KEY': '6d6593a5-aaa8-4a92-877c-ad1021319e58',
                },
                params: {
                    sort: 'date_added',
                    limit: 25, // change this to the number of recently added cryptos you want to retrieve
                },
            }
        );

        return {
            props: {
                data
            },
        };
    } catch (error) {
        console.error(error);
    }

}