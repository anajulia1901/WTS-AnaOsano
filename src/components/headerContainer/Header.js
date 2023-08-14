import React from 'react'
import styles from './Header.module.css'
import Logo from '../svg/Logo'

function Header() {
  return (
    <div className={styles['header-container']}>

       <Logo/>

        <div className={styles['options-container']}>
          <div className={styles['options1']}>Destacadas</div>
          <div className={styles['options']}>Cartelera</div>
          <button className={styles['header-button']}>Comprar ticket</button>
        </div>


    </div>
  )
}

export default Header
