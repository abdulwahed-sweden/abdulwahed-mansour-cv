import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CVPage } from './pages/CVPage';
import { CoverLetter } from './pages/CoverLetter';
import { NotFound } from './pages/NotFound';
import { PrintableCV } from './pages/PrintableCV';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv/:slug" element={<CVPage />} />
            <Route path="/resume" element={<PrintableCV />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
