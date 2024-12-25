import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { NoPage } from "./Pages/NoPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Project } from "./Pages/Project";
import { Service } from "./Pages/Service";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
