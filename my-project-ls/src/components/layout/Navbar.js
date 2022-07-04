import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Container customClass='min-height'>
            <Link to= "/"><img src='https://i.imgur.com/QoZlabV.png' alt='Pet Script'/></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to= "/">Home</Link></li>
                <li className={styles.item}><Link to= "/newproject">Novo Projeto</Link></li>
                <li className={styles.item}><Link to= "/contato">Contato</Link></li>
                <li className={styles.item}><Link to= "/sobre">Sobre</Link></li>
                
            </ul>
        </Container> 
  </nav>
  )
}
