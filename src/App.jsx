import "./App.css";
import { Carousel } from "./components/Carousel";
import Navbar from "./components/Navbar";

import { slides } from "./data/carouselData.json";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel data={slides} />
      
    </div>
  );
}

export default App;
