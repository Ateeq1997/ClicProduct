import { Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import Marble from "@/pages/Marble";
import Manufacturers from "./pages/Manufacturers";
import { Architects } from "./pages/Architects";
import { Retailers } from "./pages/Retailers";
import { Renovation } from "./pages/Renovation";
import { MarbleSEO } from "./pages/MarbleSEO";
import { WoodSEO } from "./pages/WoodSEO";
import { WebDevelopment } from "./pages/WebDevelopment";
import { WoodWebDevelopment } from "./pages/WoodWebDevelopment";
import { DigitalMarketing } from "./pages/DigitalMarketing";
import { DigitalMarketingWood } from "./pages/DigitalMarketingWood";
import { ClicproductSoftware } from "@/pages/ClicproductSoftware";
import { Contact } from "./pages/Contact";
import Wood from "@/pages/Wood";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";

function AppRoutes() {
  return (
    <>
      <Route path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/Marble">
        <Marble />
      </Route>
      <Route path="/Wood">
        <Wood />
      </Route>
      <Route path="/Manufacturers">
        <Manufacturers />
      </Route>
      <Route path="/Architects">
        <Architects />
      </Route>
      <Route path="/Retailers">
        <Retailers />
      </Route>
      <Route path="/Renovation">
        <Renovation />
      </Route>
      <Route path="/ClicproductSoftware">
        <ClicproductSoftware />
      </Route>
      <Route path="/WebDevelopment">
        <WebDevelopment />
      </Route>
      <Route path="/WoodWebDevelopment">
        <WoodWebDevelopment />
      </Route>
      <Route path="/MarbleSEO">
        <MarbleSEO />
      </Route>
      <Route path="/DigitalMarketing">
        <DigitalMarketing />
      </Route>
      <Route path="/DigitalMarketingWood">
        <DigitalMarketingWood />
      </Route>
      <Route path="/WoodSEO">
        <WoodSEO />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </>
  );
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang.toLowerCase());
    }
  }, [i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base="/">
          <AppRoutes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
