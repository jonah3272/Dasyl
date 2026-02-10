import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy load pages for code splitting
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SetHeaderVar from "./components/SetHeaderVar";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import { ErrorBoundary } from "./components/ErrorBoundary";
import SkipToContent from "./components/SkipToContent";
import LoadingSpinner from "./components/LoadingSpinner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <SkipToContent />
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <SetHeaderVar />
              <Navigation />
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre-mi" element={<Suspense fallback={<LoadingSpinner />}><About /></Suspense>} />
                  <Route path="/servicios" element={<Suspense fallback={<LoadingSpinner />}><Services /></Suspense>} />
                  <Route path="/experiencia" element={<Suspense fallback={<LoadingSpinner />}><Experience /></Suspense>} />
                  <Route path="/contacto" element={<Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>} />
                  <Route path="/privacidad" element={<Suspense fallback={<LoadingSpinner />}><Privacy /></Suspense>} />
                  <Route path="/about" element={<Suspense fallback={<LoadingSpinner />}><About /></Suspense>} />
                  <Route path="/services" element={<Suspense fallback={<LoadingSpinner />}><Services /></Suspense>} />
                  <Route path="/experience" element={<Suspense fallback={<LoadingSpinner />}><Experience /></Suspense>} />
                  <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>} />
                  <Route path="/privacy" element={<Suspense fallback={<LoadingSpinner />}><Privacy /></Suspense>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
              <WhatsAppButton />
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
