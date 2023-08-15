import React from 'react'
import styles from './Card.module.css'
import JhonWick from '../svg/JhonWick'
// import NextIcon from "../svg/Next"


function Card({ texto }) {
  return (
    <div>
      <div className={styles['main-card']}>
        <JhonWick />

        <div className={styles['movie-info']}>
            <div className={styles["text"]}>

        <div className={styles["title"]}>Jhon Wick 4</div>{texto}
        </div></div>
        {/* <NextIcon  /> */}

      </div>
    </div>
  )
}

export default Card