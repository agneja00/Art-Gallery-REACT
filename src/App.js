import './App.css';
import { Route, Routes } from "react-router-dom";
import routes from "./constants/routes.js";
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import CustomerSupportPage from './pages/CustomerSupportPage/CustomerSupportPage';
import ArtWorkPage from './pages/ArtWorkPage/ArtWorkPage';
import SimilarArtWorkPage from './pages/SimilarArtPage/SimilarArtPage';
import ArtistsPage from './pages/ArtistsPage/ArtistsPage';
import ArtistWorksPage from './pages/ArtistWorksPage/ArtistWorksPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.js";


function App() {

  return (
    <div>
      <Navbar />
      <Layout>
        <Routes>
          <Route path={routes.homePage} element={ <HomePage />} />
          <Route path={routes.galleryPage} element={<GalleryPage />} />
          <Route path={routes.artWorkPage} element={<ArtWorkPage />} />
          <Route path={routes.similarArtWorkPage} element={<SimilarArtWorkPage />} />
          <Route path={routes.artistsPage} element={<ArtistsPage />} />
          <Route path={routes.artistPage} element={<ArtistWorksPage />} />
          <Route path={routes.customerSupportPage} element={<CustomerSupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
