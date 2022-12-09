function CasinoItem({ casino: { website, content } }) {
    return (
        <>
            {/* <img src={content} width={800} />
            <p>{website}</p> */}

            {/* <div className="mockup-window border border-base-700">
  <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div> */}

            <div class="card shadow-2xl w-380 m-20">
                <figure>
                    <img src={content} />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">DaisyUI Card</h2>
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                    </div>
                    <button class="btn btn-accent">accent</button>
                </div>
            </div>
        </>
    )
}

export default CasinoItem