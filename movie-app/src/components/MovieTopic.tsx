function MovieTopic(props:{title:string,url:string}) {
    const title = props.title;
    const url = props.url;
    return (
        <div id="sections">
            <section className="mb-10">
                <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-5">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <a href="#" className="text-sm font-bold text-white">See More</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    
                </div>
            </section>
        </div>
    )
}

export default MovieTopic