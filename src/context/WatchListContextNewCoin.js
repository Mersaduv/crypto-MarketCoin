import React, { createContext, useEffect, useState } from "react";

export const listContextNewCoin = createContext()

const WatchListContextNewCoin = ({ children }) => {

    const [watch, setWatch] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {

            if (!localStorage.getItem('watchlist-newcoin')) {
                localStorage.setItem('watchlist-newcoin', '[]')
            } else {
                const list = localStorage.getItem('watchlist-newcoin')
                setWatch(JSON.parse(list))
            }

        }

    }, []);

    return (
        <listContextNewCoin.Provider value={{ watch, setWatch }}>
            {children}
        </listContextNewCoin.Provider>
    )
}

export default WatchListContextNewCoin;