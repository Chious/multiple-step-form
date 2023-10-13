import "./App.scss";
import { FormProvider } from "./contexts/FormContext";
import MobileApp from "./pages/MobileApp";
import DesktopApp from "./pages/DesktopApp";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkIsMobile(); // Check the initial screen size
    window.addEventListener("resize", checkIsMobile); // Listen for window resize events

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <FormProvider>{isMobile ? <MobileApp /> : <DesktopApp />}</FormProvider>
  );
}

export default App;
