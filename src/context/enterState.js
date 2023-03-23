import { createContext, useContext, useState } from "react"

export const EnterState = createContext()
export const EnterSetState = createContext()

export default function EnterStateProvider({ children }) {

    const [openEnter, setOpenEnter] = useState(false)

    return (
        <EnterState.Provider value={{ openEnter, setOpenEnter }}>
            {children}
        </EnterState.Provider>
    )
}
export const useEnterState = () => useContext(EnterState);

