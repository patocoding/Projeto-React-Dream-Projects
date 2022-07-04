import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li >
          <FaFacebook/>
        </li>
        <li >
          <FaInstagram/>
        </li>
        <li >
          <FaLinkedinIn/>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>DreamProjects</span> &copy; 2022
      </p>
      </footer>
  )
}
