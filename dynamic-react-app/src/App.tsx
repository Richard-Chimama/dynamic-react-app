import React from "react"
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
