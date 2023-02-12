import Home from "./pages/Home";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Home />
  );
}

export default App;
