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
  const NavItems = [
    {
      icon: FiRss,
      name: "Explore",
    },
    {
      icon: FiGrid,
      name: "My Dubplates",
    },
    {
      icon: FiHeadphones,
      name: "Genres",
    },
    {
      icon: FiUsers,
      name: "Following",
    },
    {
      icon: FiInfo,
      name: "How it works",
    },
  ];
  const artists = [
    {
      name: "Dimension",
      price: "120",
    },
    {
      name: "Billie Eilish",
      price: "87",
    },
    {
      name: "Sigala",
      price: "61",
    },
    {
      name: "Sub Focus",
      price: "105",
    },
    {
      name: "Stromzy",
      price: "81",
    },
    {
      name: "SBTRKT",
      price: "58",
    },
    {
      name: "Drake",
      price: "92",
    },
    {
      name: "Birdy",
      price: "79",
    },
    {
      name: "zedd",
      price: "46",
    },
  ];
  const latestReleases = [
    {
      image:
        "https://i1.sndcdn.com/artworks-ZcNbq2HCdTNebNGt-dm8AFg-t500x500.jpg",
      title: "Alive",
      name: "Dimension",
      price: "20",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/8/8c/TidalWavesong.jpg",
      title: "Your love",
      name: "Fiction",
      price: "25",
    },
    {
      image:
        "https://s.mxmcdn.net/images-storage/albums/0/5/6/5/1/6/31615650_800_800.jpg",
      title: "Why",
      name: "Hybrid Minds",
      price: "20",
    },
    {
      image:
        "https://i1.sndcdn.com/artworks-ZcNbq2HCdTNebNGt-dm8AFg-t500x500.jpg",
      title: "Tidal Wave",
      name: "Sub Focus",
      price: "19",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/8/8c/TidalWavesong.jpg",
      title: "One",
      name: "Kanine",
      price: "20",
    },
    {
      image:
        "https://s.mxmcdn.net/images-storage/albums/0/5/6/5/1/6/31615650_800_800.jpg",
      title: "Summer Dreams",
      name: "Skream",
      price: "21",
    },
    {
      image:
        "https://i1.sndcdn.com/artworks-ZcNbq2HCdTNebNGt-dm8AFg-t500x500.jpg",
      title: "Easy Love",
      name: "Sigala",
      price: "32",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/8/8c/TidalWavesong.jpg",
      title: "Rush",
      name: "Wilkinson",
      price: "12.4",
    },
    {
      image:
        "https://s.mxmcdn.net/images-storage/albums/0/5/6/5/1/6/31615650_800_800.jpg",
      title: "Our Time",
      name: "Bcee",
      price: "20",
    },
  ];
  return (
    <div className="App ">
      <Navbar />
      <section className="flex pt-12 text-gray-600 ">
        <div className="md:w-1/4 md:pl-6 hidden md:block md:mr-12">
          {/* <AsideItem Icon={FiRss} name="Explore" />
          <AsideItem Icon={FiGrid} name="My Dubplates" />
          <AsideItem Icon={FiHeadphones} name="Genres" />
          <AsideItem Icon={FiUsers} name="Following" />
          <AsideItem Icon={FiInfo} name="How it works" /> */}
          {NavItems.map(({ icon, name }) => (
            <AsideItem Icon={icon} name={name} />
          ))}
        </div>
        <div className="md:flex-grow md:w-3/4 w-full md:mr-12 flex flex-col">
          <div className="mx-auto md:w-full w-10/12 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-300 text-white text-3xl md:font-semibold md:text-4xl rounded-2xl px-20 md:px-24 pt-16 text-left pb-16 shadow-lg">
            <div className="w-full">
              Buy. Sell.{" "}
              <span className="text-red-300 font-extrabold">Trade</span>.
              <div>Exclusive tracks from the worlds most exciting artists</div>
            </div>
            <div className="text-sm md:text-lg flex mt-8">
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
      <section className="flex justify-center md:justify-end pb-24">
        <div className="md:w-3/4 w-11/12 px-1 md:px-4 md:pr-10">
          <div className="md:text-2xl text-lg text-left font-bold mt-4">
            Top Artists
          </div>
          <div className="flex flex-col lg:grid md:grid-cols-3 lg:gap-4 pt-6">
            {artists.map(({ name, dimension, price }) => (
              <Artist name={name} dimension={dimension} price={price} />
            ))}
          </div>
          <div className="text-lg md:text-2xl text-left font-bold mt-12">
            Latest Releases
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-y-6 gap-x-12 pt-4 lg:pr-8">
            {latestReleases.map(
              ({
                title = { title },
                artist = { artists },
                price = { price },
              }) => (
                <Release title artist price />
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
