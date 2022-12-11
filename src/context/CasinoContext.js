import React, { useContext, useState, useEffect, createContext } from "react";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const CasinoContext = createContext();

export function CasinoContextProvider({ children }) {
    const [casinos, setCasinos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BACKEND_URL}screenshots/`)
            const data = await response.json()
            setCasinos(data);
        }
        fetchData();
    }, []);
    return (
        <CasinoContext.Provider value={{ casinos }}>
            {children}
        </CasinoContext.Provider>
    );
}

export function useCasinoData() {
    const context = useContext(CasinoContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
