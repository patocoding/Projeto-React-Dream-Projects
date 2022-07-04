import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ButtonLink.module.css'

export default function ButtonLink({to, text}) {
  return (
        <Link className={styles.button} to={to}>{text}</Link>
  )
}
