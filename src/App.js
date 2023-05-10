import './App.css';
import  Navbar from "./components/Navbar";
import Home from "./routes/Home"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Service from "./routes/Service"


function App() {
  return (
   <div className='App'>
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
