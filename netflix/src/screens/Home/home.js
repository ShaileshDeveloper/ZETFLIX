import React,{ useRef, useState,useEffect,useContext} from 'react'
import Featured from '../../components/featured/Featured'
import Movielist from '../../components/movielist/movielist'
import Navbar from '../../components/navbar/navbar'
import './home.css'
import axios from 'axios'
import { AuthContext } from '../../context/authContext/authContext'


function Home({type}) {
  const [lists , setLists] = useState([]);
 const {user} = useContext(AuthContext)
 console.log(user,"shailesh")
  
  useEffect(() =>{
    const getRandomLists = async() => {
      const {data} = await axios.get(`https://Zetflix-football-app.shaileshweb.repl.co/api/lists/${type && '?type=' + type}`,{})
      setLists(data.body)
    }
    getRandomLists()
  },[type])

    return (
        <div className="fpp">
          <Navbar />
          <Featured type={type}/>
          {lists.map(list => {
           return <Movielist lists={list}/>
          })}
        </div>
    )
}

export default Home
