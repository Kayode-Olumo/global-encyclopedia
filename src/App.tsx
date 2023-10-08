import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home/Home.tsx";
import CountryDetails from "./pages/CountryDetails/CountryDetails.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
