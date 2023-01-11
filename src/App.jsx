import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './card'
import Navbar from './navbar'
import './index.css'


function App() {


  return (
    <div className="App">

      {/* navbar */}
      <Navbar />

      {/* grid cards */}
      <div class="cards">
        <div class="row row-cols-4 row-cols-md-4 g-4">
          <div class="col">
            {/* card */}
            <Card />
            <Card />
          </div>

          <div class="col">
            {/* card */}
            <Card />
            <Card />
          </div>

          <div class="col">
            {/* card */}
            <Card />
            <Card />
          </div>

          <div class="col">
            {/* card */}
            <Card />
            <Card />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
