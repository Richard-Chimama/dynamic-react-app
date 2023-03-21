import React from "react"
import './App.css'
import Footer from "./Footer"
import Header from './Header/Header'
import MovieAPI from './MovieAPI/MovieAPI'

function App() {
  return (
    <div className="App" >
      <Header />
      <MovieAPI />
      <Footer />
    </div>
  )
}

export default App
