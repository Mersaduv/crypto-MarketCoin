import React, { createContext, useEffect, useState } from "react";

export const listContextNFT = createContext()

const WatchListNFT = ({ children }) => {

    const [watch, setWatch] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {

            if (!localStorage.getItem('watchlist-nft')) {
                localStorage.setItem('watchlist-nft', '[]')
            } else {
                const list = localStorage.getItem('watchlist-nft')
                setWatch(JSON.parse(list))
            }

        }

    }, []);

    return (
        <listContextNFT.Provider value={{ watch, setWatch }}>
            {children}
        </listContextNFT.Provider>
    )
}

export default WatchListNFT;