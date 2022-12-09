import React from "react"
import { useCasinoData } from "../context/CasinoContext"
import CasinoItem from "./CasinoItem";


export default function Users() {
    const { casinos } = useCasinoData()
    //console.log(casinos)
    return (
        <>
        {casinos.map((casino) => (
            <CasinoItem key={casino.id} casino={casino} />
        ))}
        </>
    );
}
