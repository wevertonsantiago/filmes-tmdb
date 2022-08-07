import React, {useState, useContext} from 'react'
import styles from './NavBar.module.css'

import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import { AuthContext } from '../contexts/ContextProver'

export default function NavBar() {

    const { setNumeroPageFilmesTop, setNumeroPageFilmesSearch } = useContext(AuthContext)

    const [ search, setSearch ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    const handleLogo = () =>{
        setNumeroPageFilmesTop(1)
        setNumeroPageFilmesSearch(1) 
    }

  return (
    <div>
        <nav className={styles.navbar}>
            <h2 onClick={() => handleLogo() }>
                <Link to='/'>
                    <BiCameraMovie/>
                    MoviesLib
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='Busque um filme' 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    </div>
  )
}
