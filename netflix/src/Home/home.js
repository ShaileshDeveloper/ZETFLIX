import React from 'react'
import Featured from '../components/featured/Featured'
import Movielist from '../components/movielist/movielist'
import Navbar from '../components/navbar/navbar'
import './home.css'


function Home() {
    return (
        <div className="fpp">
          <Navbar />
          <Featured />
          <Movielist />
          <Movielist />
          <Movielist />
          <Movielist />
        </div>
    )
}

export default Home
