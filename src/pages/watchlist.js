import { useContext } from "react";
import CryptoList from "../components/CryptoList";
import { listContext } from "../context/WatchListContext";

const watchList = () => {

    const { watch } = useContext(listContext)

    return (
        <div className="max-w-screen-lg m-auto min-h-[87vh]">
            {
                watch.length ? <CryptoList data={watch} />
                    :
                    <h3 className="text-center mt-8 font-medium text-xl lg:text-4xl ">
                        لیست شما خالی است.
                    </h3>
            }
        </div>
    );
}

export default watchList;