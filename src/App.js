import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Credit from "./components/Credit";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from './components/Work'
import Hero from "./components/Hero";


function App() {
  return (
    <div >

<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="*" element={<Hero/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/contact" element={<Contacts/>} />
    </Routes>
<Credit/>
</BrowserRouter>

    </div>
  );
}

export default App;
