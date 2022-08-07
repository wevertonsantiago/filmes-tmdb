import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

import { AuthContext } from './contexts/ContextProver'
import MovieCard from './components/MovieCard'

export default function App() {

  const {loadingPage} = useContext(AuthContext)

  return (
      <div className='App' >
        {!loadingPage && ( 
        <div>
          <span>CARREGANDO....</span>
        </div>)}

        {loadingPage && (
          <div>
              <NavBar/>
              <Home/>
              <MovieCard/>
              <Outlet/>
          </div>
        )}
      </div>
  )
}
