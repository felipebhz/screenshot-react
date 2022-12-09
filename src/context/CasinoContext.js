import React, { useContext, useState, useEffect, createContext } from "react";

const CasinoContext = createContext();

export function CasinoContextProvider({ children }) {
    const [casinos, setCasinos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://127.0.0.1:8000/screenshots/`)
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
