import React, {useContext} from 'react'
import styles from './Page.module.css'

import { AuthContext } from '../contexts/ContextProver'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


export default function PageSearch() {

    const { totalPageFilmesSearch, setTotalPageFilmesSearch,numeroPageFilmesSearch, setNumeroPageFilmesSearch} = useContext(AuthContext)

    function handlePageRight(){
        if(totalPageFilmesSearch > numeroPageFilmesSearch ){
            setNumeroPageFilmesSearch(numeroPageFilmesSearch + 1)
            window.scrollTo(0, 0)
        } else{}
    }
    function handlePageLeft(){
        if(numeroPageFilmesSearch >= 2){
            setNumeroPageFilmesSearch(numeroPageFilmesSearch - 1)
            window.scrollTo(0, 0)
        } else {}
    }

  return (
    <div className={styles.containerPage}>
        <div className={styles.containerTextNumero}>
            <button className={styles.buttonArrowPage} 
            onClick={() => handlePageLeft()}
            disabled={numeroPageFilmesSearch === 1 ? true : false}
            >
                <FaAngleLeft color='#F7D354' size={32}/>
            </button>
            <span className={styles.textPage}>Pagina</span>
            <span className={styles.numeroPage} >{numeroPageFilmesSearch} / {totalPageFilmesSearch}</span>
            <button className={styles.buttonArrowPage} 
            onClick={() => handlePageRight()}
            disabled={numeroPageFilmesSearch === totalPageFilmesSearch ? true : false}>
                <FaAngleRight color='#F7D354' size={32}/>
            </button>
        </div>
    </div>
  )
}
