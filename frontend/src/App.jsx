import { Navbar } from "./components/global/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/global/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
