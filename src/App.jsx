
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Projects from "./pages/Projects"
import Work from "./pages/Work"
import TooltipHeader from "./components/my-components/TooltipHeader"
import Index from "./pages/Index"
import Tools from "./pages/Tools"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from "./pages/NotFound"


function App() {
  return (
    <>

      <Router>
        <TooltipHeader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
        <Toaster position="bottom-center" reverseOrder={true} />

      </Router>
    </>
  )
}

export default App
