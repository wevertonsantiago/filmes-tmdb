import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import './MoviesGrid.css'

import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import moment from 'moment'

import { AuthContext } from '../contexts/ContextProver'
import NavBar from './NavBar'

import PageSearch from './PageSearch'


export default function Search() {

  const {apiSearch,apiKey,apiIMG,apiPTBR,setTotalPageFilmesSearch,
    numeroPageFilmesSearch, setNumeroPageFilmesSearch } = useContext(AuthContext)

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const [movieSearch , setMovieSearch] = useState()
  const [loadingFilmesIMG, setLoadingFilmesIMG] = useState(false)


useEffect(()=>{
  setNumeroPageFilmesSearch(1)
},[query])

  useEffect(()=>{
    async function img(){
      const searchMovieURL = await axios.get(`${apiSearch}?${apiKey}&query=${query}${apiPTBR}&page=${numeroPageFilmesSearch}`)
      setTotalPageFilmesSearch(searchMovieURL.data.total_pages)
      console.log('searchMovieURL = ', searchMovieURL.data.results)
      const searchMovieMap = searchMovieURL.data.results

        setLoadingFilmesIMG(false)
        const filmesSearchIMG = await searchMovieMap.map(item => {
            return(
              <div key={item.id}>
              <img style={{borderRadius:10}} src={`${apiIMG}${item.poster_path}`}/>
              <div style={{ width:'90%', borderColor:'transparent', height:0, justifyContent:'center', alignItems:'flex-end' }}>
                <div style={{flexDirection:'row', width:40, padding:5}}>
                  <FaStar size={20} color='#F7D354'/> {Number(item.vote_average).toFixed(1)}
                </div>
              </div>
              <h2 className='lineBottom' style={{marginTop:-60}}>
                {item.title}
              </h2>
              <br/>
              <span className='lineBottom'>Avaliações: {(item.vote_count).toLocaleString('pt-BR')}</span>
              <br/>
              <span className='lineBottom'>Lançamento: {moment(item.release_date).format('YYYY')}</span>
              <br/>
              <br/>
              <span style={{marginTop:5}}>{item.overview}</span>
          </div>
            )
        })
        setMovieSearch(filmesSearchIMG) 
        setLoadingFilmesIMG(true)  
    }
    img()
},[query,numeroPageFilmesSearch])


  return (
    <div className='container' >
      <NavBar/>
      <PageSearch/>
      <h2 className='title'>
        Resultados para : <span className='quey-text'>{query}</span>
      </h2>
      <div className='movies-container'> 
      
      </div>
   
        <div className='movies-container'>
            {!loadingFilmesIMG && ( <span>CARREGANDO</span>)}
            {loadingFilmesIMG && (movieSearch)}
        </div>
        <PageSearch/>
        <div style={{height:60}}/>
    </div>
  )
}
