function MovieCard(props) {
  return (
    <div className="hover:[&>img]:h-[210px] transition-all">
          <img src={props.image} alt={props.title} className="h-[240px] rounded-lg" />
          <p className="font-semibold">{props.title}</p>
          <p className="flex justify-between text-sm">
            <span>{props.release_date?.slice(0, 4)}</span>
            <span>{props.vote_average}⭐</span>
          </p>
        </div>
  )
}

export default MovieCard