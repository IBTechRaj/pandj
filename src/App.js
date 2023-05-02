import React from "react";
// import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
import Sermons from './components/Sermons'
import Sermons2022 from './components/Sermons2022'
import Statement from './components/Statement'
import Programs from './components/Programs'

export default function App() {
  return (
    <div >
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/sermons2022" element={<Sermons2022 />} />
          <Route path="/blog" element={<Blog />}>
            <Route path="" element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
