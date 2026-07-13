import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileContactBar } from './components/layout/MobileContactBar';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';

/** Řeší skok na kotvu (#sekce) po změně routy a scroll na začátek u ostatních stránek. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col pb-[3.75rem] md:pb-0">
      <ScrollManager />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ochrana-osobnich-udaju" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
