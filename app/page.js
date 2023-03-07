"use client";

import styles from './page.module.css'
import { useState, useEffect } from 'react'


export default function Home() {
  const [fontSizeH1, setFontSizeH1] = useState(0)
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
      <section className={styles.sectionone}>
        <div className={styles.divone}>
          <div className={styles.maindivh1}>
            <h3>Unbox the Future with the new</h3>
            <h1>Samsung S23 Series</h1>
          </div>
          <div className={styles.maindivh1024}>
            <div><h1>Samsung</h1></div>
            <div><span>Unbox the Future with the New</span></div>
            <div><h1>S23 Series</h1></div>
          </div>
        </div>
        <div className={styles.divtwo}><h1>{widthSize}</h1></div>
        <div className={styles.divthree}>Div 3</div>
      </section>

      <div className={styles.middlediv}></div>

      <section className={styles.sectiontwo}></section>
    </main>
  )
}
