import { useContext, useState } from "react";
import CryptoList from "../components/CryptoList";
import NewCryptocurrencies from "../components/NewCryptocurrencies";
import { listContext } from "../context/WatchListContext";
import { listContextNewCoin } from "../context/WatchListContextNewCoin";

const watchList = () => {
    const [isShow, setIsShow] = useState(false)
    const { watch } = useContext(listContext)
    const watchNew = useContext(listContextNewCoin)
    return (
        <div className="max-w-screen-lg m-auto min-h-[87vh]">
            <button className="relative border-y  p-1 mt-4 text-sm hover:bg-slate-50 hover:shadow-sm" onClick={(() => setIsShow(prev => !prev))}><div className="font-bold absolute -left-6 top-1 h-[20px]  w-[20px] flex justify-center items-center rounded-full bg-[#2563eb] text-white">{watchNew.watch.length}</div> تازه های مارکت</button>


            <h1 className="text-center my-6 font-bold">فهرست کرپپتو های که دنبال میکنید !</h1>
            {
                watch.length ? <div className="mt-6 gap-y-4 font-bold"><h1> برترین های مارکت</h1> <CryptoList data={watch} /></div>
                    :
                    <h3 className="text-center mt-8 font-medium text-xl lg:text-4xl ">
                        لیست شما خالی است.
                    </h3>
            }
            {isShow ? watchNew.watch.length ? <div className="mt-6 gap-y-4 font-bold"><h1> تازه های مارکت    </h1><NewCryptocurrencies data={watchNew.watch} /></div>
                :
                <h3 className="text-center mt-8 font-medium text-xl lg:text-4xl ">
                    تازه های مارکت را دنبال نکردید
                </h3> : ""}

        </div>
    );
}

// export const NewWatchList=()=>{
//     return(

//     )
// }
export default watchList;