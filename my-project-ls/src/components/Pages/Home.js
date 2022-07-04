import React from 'react'
import ButtonLink from '../layout/ButtonLink'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.home_container}>
      <div><h1>Você está no <span>DreamProjects</span></h1></div>
      <p>Gerencie seus projetos dos sonhos</p>
      <ButtonLink to='/newproject' text='Crie um projeto'/>
      <img src='https://i.imgur.com/ERTvYw7.png' alt='Projetos' />
    </section>
  )
}
