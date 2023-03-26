import { useContext, useState } from "react";
import CryptoList from "../components/CryptoList";
import NewCryptocurrencies from "../components/NewCryptocurrencies";
import NftList from "../components/NftList";
import { listContext } from "../context/WatchListContext";
import { listContextNewCoin } from "../context/WatchListContextNewCoin";
import { listContextNFT } from "../context/WatchListNFT";

const watchList = () => {
    const [isShow, setIsShow] = useState(false)
    const [isShowNft, setIsShowNf] = useState(false)
    const { watch } = useContext(listContext)
    const watchNew = useContext(listContextNewCoin)
    const watchNft = useContext(listContextNFT)
    return (
        <div className="   max-w-screen-lg m-auto ">
            <h1 className="text-center my-6 font-bold text-2xl">فهرست کرپپتو های که دنبال میکنید !</h1>


            <div className="flex flex-row  items-start">
                <button className="relative border-y  p-1 text-sm hover:bg-slate-50 hover:shadow-sm" onClick={(() => setIsShow(prev => !prev))}><div className="font-bold absolute -left-6 top-1 h-[20px]  w-[20px] flex justify-center items-center rounded-full bg-[#2563eb] text-white">{watchNew.watch.length}</div> تازه های مارکت</button>
                <button className="relative border-y  p-1 mr-8 text-sm hover:bg-slate-50 hover:shadow-sm" onClick={(() => setIsShowNf(prev => !prev))}><div className="font-bold absolute -left-6 top-1 h-[20px]  w-[20px] flex justify-center items-center rounded-full bg-[#2563eb] text-white">{watchNft.watch.length}</div>لیست  NFT های شما</button>

            </div>


            <div className="min-w-[360px] overflow-x-auto">
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

                {isShowNft ? watchNft.watch.length ? <div className="mt-6 text-black gap-y-4 font-bold"><h1>قرار داد های هوشمند</h1><NftList data={watchNft.watch} /></div>
                    :
                    <h3 className="text-center mt-8 font-medium text-xl lg:text-4xl ">
                        تازه های مارکت را دنبال نکردید
                    </h3> : ""}
            </div>

        </div>
    );
}

export default watchList;