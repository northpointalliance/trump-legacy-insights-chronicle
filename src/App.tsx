import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TradeHistory from "./pages/TradeHistory";
import BusinessControversies from "./pages/BusinessControversies";
import FoxNews from "./pages/FoxNews";
import TrumpXPosts from "./pages/TrumpXPosts";
import TrumpInsults from "./pages/TrumpInsults";
import SiteMap from "./pages/SiteMap";
import NotFound from "./pages/NotFound";
import FirstPresidency from "./pages/FirstPresidency";
import CongressionalDepartures from "./pages/CongressionalDepartures";
import EpsteinFiles from "./pages/EpsteinFiles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/first-presidency" element={<FirstPresidency />} />
          <Route path="/trade-history" element={<TradeHistory />} />
          <Route path="/business-controversies" element={<BusinessControversies />} />
          <Route path="/fox-news" element={<FoxNews />} />
          <Route path="/trump-x-posts" element={<TrumpXPosts />} />
          <Route path="/trump-insults" element={<TrumpInsults />} />
          <Route path="/congressional-departures" element={<CongressionalDepartures />} />
          <Route path="/epstein-files" element={<EpsteinFiles />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
