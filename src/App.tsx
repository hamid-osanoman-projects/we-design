import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import IntroAnimation from "./components/IntroAnimation";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  // const [showIntro, setShowIntro] = useState(true);

  // Hide intro after 5 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => setShowIntro(false), 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* {showIntro ? (
          <IntroAnimation />
        ) : ( */}
          <BrowserRouter>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppButton />
          </BrowserRouter>
        {/* )} */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
