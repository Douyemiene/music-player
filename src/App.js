import Logo from "./Images/DupLogo.png";
import Navbar from "./components/Navbar";
import "./App.css";
import AsideItem from "./components/AsideItem";
import { FiRss } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import Artist from "./components/Artist";
import Release from "./components/Release";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <section className="flex pt-12 text-gray-600 md:w-3/4 ">
        <div className="md:w-1/4 md:pl-6 hidden md:block">
          <AsideItem Icon={FiRss} name="Explore" />
          <AsideItem Icon={FiGrid} name="My Dubplates" />
          <AsideItem Icon={FiHeadphones} name="Genres" />
          <AsideItem Icon={FiUsers} name="Following" />
          <AsideItem Icon={FiInfo} name="How it works" />
        </div>
        <div className="flex-grow w-full">
          <div className="w-10/12 mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-blue-300 text-white text-2xl font-semibold md:text-4xl rounded-lg  md:mr-12 px-24 pt-16 text-left pb-16 shadow-lg">
            <div>
              Buy. Sell. <span className=" font-extrabold">Trade</span>.
              Exclusive tracks from the worlds most exciting artists
            </div>
            <div className="text-xs md:text-lg flex mt-8">
              <button className="uppercase flex-grow bg-blue-400 border border-gray-200 rounded-md text-center mr-4 py-2 px-2">
                listen now
              </button>
              <button className="uppercase flex-grow border border-gray-200 rounded-md text-center py-2 px-2">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-end pb-24">
        <div className="w-3/4 px-4 pr-10">
          <div className="text-2xl text-left font-bold mt-4">Top Artists</div>
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 pt-6">
            <Artist num="1" name="Dimension" price="120" />
            <Artist num="2" name="Dimension" price="120" />
            <Artist num="3" name="Dimension" price="120" />
            <Artist num="4" name="Dimension" price="120" />
            <Artist num="5" name="Dimension" price="120" />
            <Artist num="6" name="Dimension" price="120" />
            <Artist num="7" name="Dimension" price="120" />
            <Artist num="8" name="Dimension" price="120" />
            <Artist num="9" name="Dimension" price="120" />
            <Artist num="10" name="Dimension" price="120" />
            <Artist num="11" name="Dimension" price="120" />
            <Artist num="12" name="Dimension" price="120" />
          </div>
          <div className="text-2xl text-left font-bold mt-12">
            Latest Releases
          </div>
          <div className="grid grid-cols-3 gap-y-6 gap-x-12 pt-4 pr-8">
            <Release
              image="https://i1.sndcdn.com/artworks-ZcNbq2HCdTNebNGt-dm8AFg-t500x500.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://upload.wikimedia.org/wikipedia/en/8/8c/TidalWavesong.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://s.mxmcdn.net/images-storage/albums/0/5/6/5/1/6/31615650_800_800.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://i1.sndcdn.com/artworks-ZcNbq2HCdTNebNGt-dm8AFg-t500x500.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://upload.wikimedia.org/wikipedia/en/8/8c/TidalWavesong.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://s.mxmcdn.net/images-storage/albums/0/5/6/5/1/6/31615650_800_800.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://i1.sndcdn.com/artworks-ZcNbq2HCdTNebNGt-dm8AFg-t500x500.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://upload.wikimedia.org/wikipedia/en/8/8c/TidalWavesong.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
            <Release
              image="https://s.mxmcdn.net/images-storage/albums/0/5/6/5/1/6/31615650_800_800.jpg"
              title="Alive"
              artist="Dimension"
              price="20"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
