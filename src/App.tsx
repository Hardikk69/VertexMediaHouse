import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pitchdeck from "./pages/Pitch-deck";
import Calender from "./pages/Calender";
import Preloader from "./components/preloader";
import { useState } from "react";
import VideoEditing from "./pages/Video-editing";
import WebDesign from "./pages/Web-design";
import AIAutomation from "./pages/AI-automation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* {loading && <Preloader onFinish={() => setLoading(false)} />}
        {!loading && ( */}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pitch-deck" element={<Pitchdeck />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* )} */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;

