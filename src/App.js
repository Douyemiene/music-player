import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import AsideItem from "./components/AsideItem";
import { FiRss } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="flex pt-12 text-gray-600">
        <div className="w-1/4">
          <AsideItem Icon={FiRss} name="Explore" />
          <AsideItem Icon={FiGrid} name="My Dubplates" />
          <AsideItem Icon={FiHeadphones} name="Genres" />
          <AsideItem Icon={FiUsers} name="Following" />
          <AsideItem Icon={FiInfo} name="How it works" />
        </div>
        <div className="flex-grow">
          <div className="bg-blue-600 text-white text-4xl rounded-lg  mr-12 px-24 pt-16 text-left pb-16 shadow-lg">
            <div>
              Buy. Sell.{" "}
              <span className="text-red-300 font-extrabold">Trade</span>. <br />
              Exclusive tracks from the worlds most <br />
              exciting artists
            </div>
            <div className="text-lg flex mt-8">
              <button className="uppercase flex-grow bg-blue-300 rounded-lg text-center mr-4 py-2">
                listen now
              </button>
              <button className="uppercase flex-grow border border-gray-200 rounded-lg text-center py-2">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-end">
        <div className="w-3/4">
          <div className="text-2xl text-left font-bold">Top Artists</div>
        </div>
      </section>
    </div>
  );
}

export default App;
