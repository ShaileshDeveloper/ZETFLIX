import React from 'react'
import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/navbar'
import './home.css'

function Home() {
    return (
        <div className="fpp">
          <Navbar />
          <Featured />
        </div>
    )
}

export default Home
