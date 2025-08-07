function Header() {
  return (
    <div class="flex justify-between p-5">
        <div class="w-16">
          <img src="logo.svg" alt="Logo" class="w-full" />
        </div>
        <nav class="flex gap-6 items-center">
          <a href="#" class="text-white">Home</a>
          <a href="#" class="text-white">Explore</a>
          <a href="#" class="text-white">News</a>
          <a href="#" class="text-white">Genre</a>
          <a href="#" class="text-white">Movie</a>
          <a href="#" class="text-white">TV Show</a>
        </nav>
      </div>
  )
}

export default Header