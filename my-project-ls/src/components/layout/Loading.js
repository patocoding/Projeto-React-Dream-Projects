import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loader_container}>
        <img src='https://i.imgur.com/780apAl.png' alt=''/>
    </div>
  )
}
