import "./App.css";
import { Route, Routes } from "react-router-dom";

import AllCartoonsPage from "./pages/AllCartoonsPage";
import NewCartoonPage from "./pages/NewCartoonPage";
import FavoriteCartoonsPage from "./pages/FavoriteCartoonsPage";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={AllCartoonsPage()} />
          <Route path="/add-new-cartoon" element={NewCartoonPage()} />
          <Route path="/favorites" element={FavoriteCartoonsPage()} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
