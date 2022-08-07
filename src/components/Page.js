import React, {useContext} from 'react'
import styles from './Page.module.css'

import { AuthContext } from '../contexts/ContextProver'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


export default function Page() {

    const { totalPageFilmesTop,setNumeroPageFilmesTop,numeroPageFilmesTop} = useContext(AuthContext)

    function handlePageRight(){
        if(totalPageFilmesTop > numeroPageFilmesTop ){
            setNumeroPageFilmesTop(numeroPageFilmesTop + 1)
            window.scrollTo(0, 0)
        } else{}
    }
    function handlePageLeft(){
        if(numeroPageFilmesTop >= 2){
            setNumeroPageFilmesTop(numeroPageFilmesTop - 1)
            window.scrollTo(0, 0)
        } else {}
    }

  return (
    <div className={styles.containerPage}>
        <div className={styles.containerTextNumero}>
            <button className={styles.buttonArrowPage} 
            onClick={() => handlePageLeft()}
            disabled={numeroPageFilmesTop === 1 ? true : false}
            >
                <FaAngleLeft color='#F7D354' size={32}/>
            </button>
            <span className={styles.textPage}>Pagina</span>
            <span className={styles.numeroPage} >{numeroPageFilmesTop} / {totalPageFilmesTop}</span>
            <button className={styles.buttonArrowPage} 
            onClick={() => handlePageRight()}
            disabled={numeroPageFilmesTop === totalPageFilmesTop ? true : false}>
                <FaAngleRight color='#F7D354' size={32}/>
            </button>
        </div>
    </div>
  )
}
