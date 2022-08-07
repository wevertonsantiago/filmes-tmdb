import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/ContextProver'

import { Link } from 'react-router-dom'
import { FaStart } from 'react-icons/fa'

export default function MovieCard() {


    const { filmesTop,apiIMG } = useContext(AuthContext)

    
  return (
    <div className='movie-card'>

    </div>
  )
}
