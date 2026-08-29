// Reference-fidelity design system: one shared public shell across route-driven service pages, with no platform-specific overlays or branding.

import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { pageTitles } from "@/lib/site";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import { PrivacyPolicy, TermsAndConditions } from "@/pages/Legal";
import ServiceAreas from "@/pages/ServiceAreas";
import Services from "@/pages/Services";
import NotFound from "@/pages/NotFound";

function RouteTitle() {
  const [location] = useLocation();
  useEffect(() => {
    document.title = pageTitles[location] ?? "Carlson Cleaning Services | Accra, Ghana";
  }, [location]);
  return null;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/service-areas" component={ServiceAreas} />
    <Route path="/contact" component={Contact} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/terms-and-conditions" component={TermsAndConditions} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <><RouteTitle /><Router /></>;
}
