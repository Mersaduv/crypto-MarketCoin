const DecentralizedExchanges = () => {
  return (
    <table className="table-auto w-[98%] whitespace-nowrap m-auto overflow-x-auto">
      <thead>
        <tr>
          <th className="text-center lg:text-start text-gray-500  pb-2 pl-6 lg:p-2 font-medium text-sm ">
            #
          </th>
          <th className="text-start  text-gray-500  pb-2 pl-6 lg:p-2 font-medium text-sm">
            صرافی
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm">
            معاملات 24h
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  ">
            میزان کوینها
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  md:table-cell">
            نوع معامله
          </th>
          <th className="text-start text-gray-500  pb-2 pl-6 font-medium text-sm  md:table-cell">
            سال تاسیس
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((ex) => ( */}
        <tr className="border-y bg-gray-50 hover:bg-gray-100 border-gray-300">
          <td>
            <button className=" text-sm text-gray-600 font-bold">
              {/* {ex.trust_score_rank} */}
              #0
            </button>
          </td>
          <td
            className={`py-4 flex gap-x-1 sticky items-center`}
          >
            #آیکون
            {/* <img
                src={ex.image}
                alt="icon"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="text-sm cursor-pointer font-bold">{ex.name}</div> */}
          </td>

          <td>
            <div className="text-[12px] lg:text-[14px] font-bold">
              حجم معامله
            </div>
          </td>
          <td>
            <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
              0# تعداد
            </div>
          </td>
          <td>
            <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
              Swap
            </div>
          </td>
          <td>
            <div className="text-[12px] lg:text-[14px] font-bold  md:flex">
              تاریخ :
            </div>
          </td>
        </tr>
        {/* ))} */}
      </tbody>
    </table>
  );
};

export default DecentralizedExchanges;
