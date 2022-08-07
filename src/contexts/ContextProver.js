import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext({})

export default function ContextProver({children}) {

    const [loadingPage, setLoadingPage] = useState(false)
    const [filmesTop, setFilmesTop] = useState()
    const [totalPageFilmesTop, setTotalPageFilmesTop] = useState()
    const [numeroPageFilmesTop, setNumeroPageFilmesTop] = useState(1)
    // const [filmesTopIMG, setFilmesTopIMG] = useState()
    const [totalPageFilmesSearch, setTotalPageFilmesSearch] = useState()
    const [numeroPageFilmesSearch, setNumeroPageFilmesSearch] = useState(1)

    const apiKey = 'api_key=625af59a7c4bf8f5f5f4de041ba624ce'
    const apiURL = 'https://api.themoviedb.org/3/movie/550?api_key=625af59a7c4bf8f5f5f4de041ba624ce&language=pt-BR'
    // const apiBase = 'https://api.themoviedb.org/3/movie/550?'
    const apiBase = 'https://api.themoviedb.org/3/movie/'
    const apiIMG = 'https://image.tmdb.org/t/p/w500'
    const apiSearch = 'https://api.themoviedb.org/3/search/movie/'
    const apiPTBR = '&language=pt-BR'
    // https://api.themoviedb.org/3/movie/550?api_key=625af59a7c4bf8f5f5f4de041ba624ce&language=pt-BR

    useEffect(()=>{
      async function apiFilmes(){
        setLoadingPage(false)
        const response = await axios.get(`${apiBase}top_rated?${apiKey}${apiPTBR}&page=${numeroPageFilmesTop}`)
        // console.log('PAGINAS CONTEXT =', response.data.total_pages)
        setTotalPageFilmesTop(response.data.total_pages)
        // console.log('FILMESTOP CONTEXT =', response.data.results)
        setFilmesTop(response.data.results)
        const genero = await axios.get(`${apiBase}${550}?${apiKey}${apiPTBR}`)
        // console.log('GENERO CONTEXT =', genero.data)
        setLoadingPage(true)
      }
      apiFilmes()

    },[numeroPageFilmesTop])


  return (
    <AuthContext.Provider value={{filmesTop,loadingPage,apiIMG,apiSearch,apiKey,apiURL,
    apiBase,apiPTBR,totalPageFilmesTop,setNumeroPageFilmesTop,numeroPageFilmesTop,
    totalPageFilmesSearch, setTotalPageFilmesSearch,numeroPageFilmesSearch, setNumeroPageFilmesSearch}} >
        {children}
    </AuthContext.Provider>
  )
}
