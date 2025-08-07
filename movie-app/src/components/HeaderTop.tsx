function HeaderTop() {
  return (
    <div className="flex justify-between p-5">
        <div className="w-16">
          <img src="logo.svg" alt="Logo" className="w-full" />
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Explore</a>
          <a href="#" className="text-white">News</a>
          <a href="#" className="text-white">Genre</a>
          <a href="#" className="text-white">Movie</a>
          <a href="#" className="text-white">TV Show</a>
        </nav>
      </div>
  )
}

export default HeaderTop