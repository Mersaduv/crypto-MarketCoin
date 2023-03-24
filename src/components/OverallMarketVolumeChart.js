

// import { useEffect, useState } from "react";
// import axios from "axios";
// import 'chartjs-adapter-moment';
// import moment from "moment/moment";
// import {
//     Chart as ChartJS,
//     LinearScale,
//     TimeScale,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     PointElement,
//     CategoryScale
// } from 'chart.js';

// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     LinearScale,
//     TimeScale,
//     LineElement,
//     PointElement,
//     CategoryScale,
//     Title,
//     Tooltip,
//     Legend,

// );
// // ChartJS.defaults.global.fontColor = '#333';
// const OverallMarketVolumeChart = () => {
//     const [chartTime, setChartTime] = useState(365);
//     const [chartData, setChartData] = useState(null);

//     const fetchChartData = async () => {
//         try {
//             // const exchangeIds = ["binance", "coinbase", "kraken"]
//             const response = await fetch(
//                 `https://api.coingecko.com/api/v3/coins/data/market_chart?vs_currency=usd&days=${chartTime}`,
//                 {
//                     method: "GET",
//                     headers: {
//                         Accept: "application/json",
//                     },
//                 }
//             );
//             const data = await response.json();
//             console.log(data);
//             // const coinChartData = [{ x: data.data.updated_at, y: data.data.total_market_cap.usd.toFixed(5) }]
//             const coinChartData = data.market_caps.map((value) => ({
//                 x: value[0],
//                 y: value[1],
//             }));
//             console.log(coinChartData);
//             setChartData(coinChartData);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchChartData();
//     }, [chartTime]);

//     return (
//         <div className="px-4">
//             {!chartData ? (
//                 <p>Loading...</p>
//             ) : (
//                 <>
//                     <h2 className="text-gray-800 font-bold text-xl mb-3">Total Market Cap Chart</h2>
//                     <Line
//                         options={{
//                             responsive: true,
//                             elements: { point: { radius: 2 } },
//                             scales: {
//                                 y: {
//                                     ticks: {
//                                         callback: function (val, index) {
//                                             return "$" + val.toLocaleString();
//                                         },
//                                     },
//                                 },
//                             },
//                             plugins: {
//                                 legend: {
//                                     position: "bottom",
//                                 },
//                             },
//                         }}
//                         data={{
//                             labels: chartData.map((value) =>
//                                 chartTime === 365
//                                     ? moment(value.x).format("LT")
//                                     : moment(value.x).format("MMM DD")
//                             ),

//                             datasets: [
//                                 {
//                                     label: "نمودار حجمی مارکت",
//                                     data: chartData.map((val) => val.y),
//                                     borderColor: "rgb(99, 102, 241)",
//                                     backgroundColor: "rgba(99, 102, 241, .5)",
//                                 },
//                             ],
//                         }}
//                     // data={chartData}
//                     />

//                     <div className={`flex items-center justify-center mt-8 gap-4`}>
//                         <button
//                             onClick={() => setChartTime(1)}
//                             className={`border rounded-md px-4 py-1 ${chartTime === 1 && "bg-indigo-500 text-white"
//                                 }`}
//                         >
//                             Day
//                         </button>

//                         <button
//                             onClick={() => setChartTime(7)}
//                             className={`border rounded-md px-4 py-1 ${chartTime === 7 && "bg-indigo-500 text-white"
//                                 }`}
//                         >
//                             Week
//                         </button>

//                         <button
//                             onClick={() => setChartTime(30)}
//                             className={`border rounded-md px-4 py-1 ${chartTime === 30 && "bg-indigo-500 text-white"
//                                 }`}
//                         >
//                             Month
//                         </button>

//                         <button
//                             onClick={() => setChartTime(365)}
//                             className={`border rounded-md px-4 py-1 ${chartTime === 365 && "bg-indigo-500 text-white"
//                                 }`}
//                         >
//                             Year
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default OverallMarketVolumeChart;




import { useEffect, useState } from "react";
import axios from "axios";
import 'chartjs-adapter-moment';
import moment from "moment/moment";
import {
    Chart as ChartJS,
    LinearScale,
    TimeScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    CategoryScale
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    TimeScale,
    LineElement,
    PointElement,
    CategoryScale,
    Title,
    Tooltip,
    Legend,

);
// ChartJS.defaults.global.fontColor = '#333';
const OverallMarketVolumeChart = () => {
    const [chartTime, setChartTime] = useState(365);
    const [chartData, setChartData] = useState(null);

    const fetchChartData = async () => {
        try {
            // const exchangeIds = ["binance", "coinbase", "kraken"]
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${chartTime}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            // const coinChartData = [{ x: data.data.updated_at, y: data.data.total_market_cap.usd.toFixed(5) }]
            const coinChartData = data.market_caps.map((value) => ({
                x: value[0],
                y: value[1],
            }));
            console.log(coinChartData);
            setChartData(coinChartData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchChartData();
    }, [chartTime]);

    return (
        <div className="px-4 my-4">
            {!chartData ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1 className="text-gray-800 font-bold text-center text-xl my-8 mb-3">نمودار مارکت به اساس حجم معاملات بیتکوین</h1>
                    <Line
                        options={{
                            responsive: true,
                            elements: { point: { radius: 1 } },
                            scales: {
                                y: {
                                    ticks: {
                                        callback: function (val, index) {
                                            return "$" + val.toLocaleString();
                                        },
                                    },
                                },
                            },
                            plugins: {
                                legend: {
                                    position: "bottom",
                                },
                            },
                        }}
                        data={{
                            labels: chartData.map((value) =>
                                chartTime === 1
                                    ? moment(value.x).format("LT")
                                    : moment(value.x).format(" MMM DD")
                            ),

                            datasets: [
                                {
                                    label: "نمودار حجمی مارکت",
                                    data: chartData.map((val) => val.y),
                                    borderColor: "#2563eb",
                                    backgroundColor: "rgba(99, 102, 241, .5)",
                                },
                            ],
                        }}
                    // data={chartData}
                    />

                    <div className={`flex items-center justify-center mt-8 gap-4`}>
                        <button
                            onClick={() => setChartTime(1)}
                            className={`border rounded-md px-4 py-1 ${chartTime === 1 && "bg-[#2563eb] text-white"
                                }`}
                        >
                            Day
                        </button>

                        <button
                            onClick={() => setChartTime(7)}
                            className={`border rounded-md px-4 py-1 ${chartTime === 7 && "bg-[#2563eb] text-white"
                                }`}
                        >
                            Week
                        </button>

                        <button
                            onClick={() => setChartTime(30)}
                            className={`border rounded-md px-4 py-1 ${chartTime === 30 && "bg-[#2563eb] text-white"
                                }`}
                        >
                            Month
                        </button>

                        <button
                            onClick={() => setChartTime(365)}
                            className={`border rounded-md px-4 py-1 ${chartTime === 365 && "bg-[#2563eb] text-white"
                                }`}
                        >
                            Year
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default OverallMarketVolumeChart;
