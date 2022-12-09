import CasinoContext from '../context/CasinoContext';

function CasinoItem({ casino: { website, content } }) {
    return (
        <>
        <img src={content} width={800} />
        <p>{website}</p>
        </>
    )
}

export default CasinoItem