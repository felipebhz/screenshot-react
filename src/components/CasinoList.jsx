import { useCasinoData } from "../context/CasinoContext"
import CasinoItem from "./CasinoItem";

export default function Users() {
    const { casinos } = useCasinoData()
    return (
        <>
        {casinos.map((casino) => (
            <CasinoItem key={casino.id} casino={casino} />
        ))}
        </>
    );
}
