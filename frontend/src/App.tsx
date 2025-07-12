import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./composants/navbar/NavBar";

function App() {
  return (
    <div className="min-h-screen w-full ">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
