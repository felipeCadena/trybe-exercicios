import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
      navigate('/coffees');
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={ handleClick }>Coffees</button>
    </div>
  )
}

export default Home