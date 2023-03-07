"use client";

import styles from './page.module.css'
import { useState, useEffect } from 'react'


export default function Home() {
  const [widthSize, setWidthSize] = useState(0);
  //create a function that assigns the screen width to the state so it can be returned
  const handleResize = () => {
    setWidthSize(window.innerWidth);
  }
  //create an event listener that listens for the resize event and calls the handleResize function
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  //return the widthSize state


  return (
    <main className={styles.main}>
      <div className={styles.maindiv}>
        <h1>{widthSize}</h1>
      </div>
      <div className={styles.maindiv}>
      </div>
    </main>
  )
}
