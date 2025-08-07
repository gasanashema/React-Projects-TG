import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieTopic from "./components/MovieTopic";
function App() {
  const API_KEY = "97ef910c8dbfc58de8ccd2f3fc7adc14";
  const [sections, setSections] = useState({
    "🔥 Trending Now": `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    "🎬 Now Playing": `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    "⭐ Top Rated": `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    "🔥 Popular": `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    "🚀 Upcoming": `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  })
  return (
    <>
      <div className="bg-black text-white">
        <div className="w-full px-10 py-8">
          <div className="p-5">
            <Header />
            <Banner />
            {
              Object.entries(sections).map(([title, url], ind) => <MovieTopic url={url} title={title} key={ind} />)
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default App
