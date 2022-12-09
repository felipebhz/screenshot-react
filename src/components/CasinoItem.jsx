import CasinoContext from '../context/CasinoContext';

function CasinoItem({ casino: { website, content } }) {
    return (
        <>
            {/* <img src={content} width={800} />
            <p>{website}</p> */}

            <div className="card lg:card-side bg-base-100 shadow-xl mb-20">
                <figure>
                    <img src={content} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur expedita mollitia esse quasi quibusdam fugiat nesciunt ipsam saepe sit deserunt modi officia quos nisi dignissimos atque, ullam necessitatibus illo. Illo.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Visit Casino Website</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CasinoItem