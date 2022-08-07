import React, { useContext ,useState, useEffect } from 'react'
import './MoviesGrid.css'
import { AuthContext } from '../contexts/ContextProver'

import { FaStar } from 'react-icons/fa'
import moment from 'moment'

import Page from './Page'

export default function Home() {

  const { filmesTop,apiIMG} = useContext(AuthContext)

  const [filmesIMG, setFilmesIMG] = useState()
  const [loadingFilmesIMG, setLoadingFilmesIMG] = useState(false)
  const [idMovie, setIdMovie] = useState([])


  useEffect(()=>{
      async function conteudoFilmeTop(){
          setLoadingFilmesIMG(false)
          const filmesTopIMG = await filmesTop.map((item, index) => {
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
            setLoadingFilmesIMG(true)  
            setFilmesIMG(filmesTopIMG) 
        }
        conteudoFilmeTop()
    },[])
    
  return (
    <div className='container'>
            {!loadingFilmesIMG && ( <div>CARREGANDO</div>)}
            {loadingFilmesIMG && (
              <div>
                <Page/>
                <h2 className='title'>Os Melhores Filmes:</h2>
                <div className='movies-container'>
                    {filmesIMG}
                </div>
                <Page/>
                <div style={{height:60}}/>
              </div>
            )}
    </div>
  )
}