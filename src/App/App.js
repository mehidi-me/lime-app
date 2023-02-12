import Home from "./pages/Home";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navigate from "./navigation/Navigate";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Navigate />
  );
}

export default App;
