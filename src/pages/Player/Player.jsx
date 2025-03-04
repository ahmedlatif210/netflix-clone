import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'


const Player = () => {


  const{id}=useParams();

  const backToHome=()=>{
    return history.back();
  }

  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  })


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTY3ZDQ4OGJlZmIwZDdkMjc3ZjQyYzY4ODgyMDYyNyIsIm5iZiI6MTc0MTAzNjkzOS40Niwic3ViIjoiNjdjNjFkOGJhMzI3N2FiNGExZTc5MmNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UQi2eGF-GjNjRB7MX-ZXmHKz4CLSSg5s809JtGzMOMg'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));


  },[])
  




  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={backToHome} />
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
                width='90%' height='90%' 
                title='trailer' frameBorder='0' allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
