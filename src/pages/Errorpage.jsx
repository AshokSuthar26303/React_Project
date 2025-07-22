import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Errorpage = () => {
  const error = useRouteError();
  console.log(error);
  
  return (
  <>
    <h1>404 Not Found</h1>
    {error && <p>{error.data}</p>}
    <NavLink to={"/"}><button>Go Home</button></NavLink>
  </>
  )
}

export default Errorpage