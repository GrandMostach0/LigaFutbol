import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./page/Main"
import NavBar from "./components/NavBar.jsx"
import FooterBar from "./components/FooterBar.jsx"
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <FooterBar />
    </Router>
  )
}

export default App
