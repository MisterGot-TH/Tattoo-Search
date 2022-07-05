import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";

function App() {
  const [slectedTattoo, setSelectedTatto] = useState(null);
  const [searchText, setSearchText] = useState("");
  function onTattooOpenClick(theTattoo) {
    setSelectedTatto(theTattoo);
  }
  function onTattooCloesClick() {
    setSelectedTatto(null);
  }
  const tattooElements = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return (
        <TattooItem
          key={index}
          tattoo={tattoo}
          onTattooClick={onTattooOpenClick}
        />
      );
    });
  let tattooPost = null;
  if (!!slectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={slectedTattoo} onBgClick={onTattooCloesClick} />
    );
  }
  return (
    <div className="App">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
