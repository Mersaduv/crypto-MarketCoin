import { useEffect, useState } from "react";

const ExgangesList = ({ data }) => {
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  const [isScrolled, setIsScrolled] = useState(false);


  const shadowClass = isScrolled ? "shadow" : "";
  return (
    <table className="table-auto w-[98%] whitespace-nowrap m-auto overflow-x-auto">
      <thead>
        <tr>
          <th className="text-center lg:text-start text-gray-500  pb-2 pl-6 lg:p-2 font-medium text-sm ">
            #
          </th>
          <th
            className={`text-start  text-gray-500  pb-2 pl-6 lg:p-2 font-medium text-sm ${shadowClass}`}
          >
            صرافی
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm">
            امتیاز
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  ">
            معاملات بیتکوین 24h
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  md:table-cell">
            سال تاسیس
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  md:table-cell">
            وضعیت هفته
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((ex) => (
          <tr
            key={ex.id}
            className="border-y bg-gray-50 hover:bg-gray-100 border-gray-300"
          >
            <td>
              <button className=" text-sm text-gray-600 font-bold">
                {ex.trust_score_rank}
              </button>
            </td>
            <td className={`py-4 flex gap-x-1   items-center ${shadowClass}`}>
              <img
                src={ex.image}
                alt="icon"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="text-sm cursor-pointer font-bold  overflow-hidden whitespace-nowrap overflow-ellipsis">
                {ex.name}
              </div>
              <div className="text-gray-400  font-bold text-[12px] ml-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 8.33301C13.2217 8.33301 15.8334 7.21372 15.8334 5.83301C15.8334 4.4523 13.2217 3.33301 10.0001 3.33301C6.77842 3.33301 4.16675 4.4523 4.16675 5.83301C4.16675 7.21372 6.77842 8.33301 10.0001 8.33301Z"
                    fill="#A6B0C3"
                  ></path>
                  <path
                    d="M4.16675 7.49967V9.99967C4.16675 11.3804 6.77842 12.4997 10.0001 12.4997C13.2217 12.4997 15.8334 11.3804 15.8334 9.99967V7.49967C15.8334 8.88039 13.2217 9.99967 10.0001 9.99967C6.77842 9.99967 4.16675 8.88039 4.16675 7.49967Z"
                    fill="#A6B0C3"
                  ></path>
                  <path
                    d="M4.16675 11.6663V14.1663C4.16675 15.2573 5.79731 16.1851 8.07096 16.5264C7.58068 15.767 7.54345 14.8 7.95931 14.0091C5.74412 13.6545 4.16675 12.7394 4.16675 11.6663Z"
                    fill="#A6B0C3"
                  ></path>
                  <path
                    d="M12.4685 13.9321L12.5003 13.964L12.5484 13.9158C12.5219 13.9213 12.4952 13.9268 12.4685 13.9321Z"
                    fill="#A6B0C3"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0798 11.9176C18.418 12.2516 18.418 12.7933 18.0798 13.1274L13.0635 18.0831C12.7253 18.4172 12.177 18.4172 11.8388 18.0831L9.42039 15.6938C9.0822 15.3597 9.0822 14.8181 9.42039 14.484C9.75858 14.1499 10.3069 14.1499 10.6451 14.484L12.4512 16.2683L16.8551 11.9176C17.1933 11.5835 17.7416 11.5835 18.0798 11.9176Z"
                    fill="#16C784"
                  ></path>
                </svg>
              </div>
            </td>

            <td>
              <div
                className={`text-[12px] w-7 h-6 flex items-center justify-center rounded-lg text-white  lg:text-[14px] font-bold ${
                  ex.trust_score < 4
                    ? "bg-red-600"
                    : ex.trust_score < 7
                    ? "bg-orange-400"
                    : "bg-green-500"
                }`}
              >
                {ex.trust_score}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                $ {ex.trade_volume_24h_btc.toFixed(0)}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                {ex.year_established}
              </div>
            </td>
            <td>
              <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
                نمودار دردسترس نیست
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExgangesList;
