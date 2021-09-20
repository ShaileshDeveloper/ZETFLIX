import React, { useContext, useState } from 'react'
import Featured from '../../components/featured/Featured'
import Movielist from '../../components/movielist/movielist'
import { useEffect } from 'react'
import axios from "axios"
import Movielistitems from '../../components/movielistItems/Movielistitems'
import { PlayListContext } from '../../context/playlistContext/playlistContext'
import './MyList.css'
import ListItems from '../../components/listItems/listItems'

function MyList() {
const {list , setList} = useContext(PlayListContext)

useEffect(() =>{
    const fixture = async () => {
     const res = await axios.get('https://Zetflix-football-app.shaileshweb.repl.co/api/movies/mylist')
      setList(res.data)
      console.log(res.data)
    }
    fixture()
},[])
    return (
        <>
        <div className='list'>
        <span style={{fontSize:'30px'}}className='heading'>MY LIST</span>
        <div className='list_container'>
           {list.map(item => <ListItems item={item._id} list={list}/>)} 
           </div>
        </div>
        </>
    )
}

export default MyList
