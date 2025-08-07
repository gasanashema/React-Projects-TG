function Banner() {
    return (
        <div className="flex items-center justify-around py-8 gap-x-12">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold">FIND MOVIE</h1>
                <h2 className="text-2xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                    TV SHOWS AND MORE
                </h2>
                <p className="my-2">Stream your favorite trending and top-rated movies now!</p>
                <button className="px-5 py-2 border-2 border-white rounded">▶️ Watch tutorial</button>
            </div>
            <div className="relative">
                <img src="img2.jpeg" alt="" className="w-[250px] rounded-lg" />
                <img src="img1.jpeg" alt="" className="w-[250px] rounded-lg absolute right-20 top-10" />
            </div>
        </div>
    )
}

export default Banner