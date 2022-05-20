import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import CountreyInformation from "./Screen/CountreyInformation/CountreyInformation";
import Home from "./Screen/Home";
import Search from "./Screen/Search/Index";
import Uneversty from "./Screen/Uneversty/Uneversty";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path={`/countreyinformation/name/:id`} element={<CountreyInformation />} />
        <Route path={`/university/country/:id`} element={<Uneversty />} />
      </Routes>
    </div>
  );
}

export default App;
