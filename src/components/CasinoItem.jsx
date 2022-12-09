import CasinoContext from '../context/CasinoContext';

function CasinoItem({ casino: { website, content } }) {
    return (
        <>
        <p>{website}</p>
        </>
    )
}

export default CasinoItem