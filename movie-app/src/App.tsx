import Banner from "./components/Banner";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="w-full px-10 py-8">
          <div className="p-5">
            <Header />
            <Banner />


          </div>
        </div>
      </div>
    </>
  )
}

export default App
