"use client";

import styles from './page.module.css'
import { useState, useEffect, useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';



export default function Home() {
  const swiperRef = useRef(null);
  const [itemKey, setItemKey] = useState('01')
  const [textId, setTextId] = useState(0)
  const [swiperElements, setSwiperElements] = useState(0)
  const swiperData = [
    { 
      id: 1,
      imgSrc: "https://res.cloudinary.com/dyvgcv5se/image/upload/v1677172489/uwl/Phonez/Untitled-1.png",
      imgAlt: "Picture of the author",
      width: 329,
      height: 400,
      quality: 100,
      priority: true,
      description: "Experience Unmatched Innovation with the New Samsung S23 Ultra: The Ultimate Device for Power Users!"
    },
    {
      id: 2,
      imgSrc: "https://res.cloudinary.com/dttaprmbu/image/upload/v1677956802/Untitled_ske8sa.png",
      imgAlt: "Picture of the author",
      width: 329,
      height: 400,
      quality: 100,
      priority: true,
      description: "Samsung S23: Redefining Smartphone Technology with Impressive Features and Sleek Design"
    },
    {
      id: 3,
      imgSrc: "https://res.cloudinary.com/dttaprmbu/image/upload/v1678028837/SamsungS23Plus_xxdeeo.png",
      imgAlt: "Picture of the author",
      width: 329,
      height: 400,
      quality: 100,
      priority: true,
      description: "Samsung S23+: Elevating the Smartphone Experience with Advanced Features and Stylish Design"
    }
  
  ];
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
//set the number of the active slide, format it into two digit string
  const handleSwiperItemIndex = () => {
    const swiper = swiperRef.current.swiper;
    const index = swiper.realIndex + 1;
    const formattedIndex = String(index).padStart(2, '0');
    setItemKey(formattedIndex);
    setTextId(swiper.realIndex)
  }

  useEffect(() => {
    if ((widthSize < 1024) && (widthSize > 768)) {
      setSwiperElements(2)
    } else {
      setSwiperElements(1)
    }
  }, [widthSize])


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
        <div className={styles.divtwo}>
        <div className={styles.swiperDiv}>
        <Swiper
          className={styles.myswiperr}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{
            el: '.swiper-custom-pagination',
            clickable: true,
            
          }}
          slidesPerView={swiperElements}
          ref={swiperRef}
          spaceBetween={10}
          loop={true}
          speed={1500}

          onSlideChange={handleSwiperItemIndex}
          >
          {swiperData.map((item, index) => (
          <SwiperSlide key={index}>
          <Image 
               src={item.imgSrc}
               alt="Picture of the author"
               width={item.width}
               height={item.height}
               quality={100}
               priority={true}
             />
          </SwiperSlide>
          ))}
          </Swiper>
 
        </div>
        </div>
        <div className={styles.divthree}>
        <div className={styles.divwrapper}>          
        <div>
          <div className={styles.number}><h1>{itemKey}</h1><h5>\ {String(swiperData.length.toString()).padStart(2, '0')}</h5></div>
          <span>{swiperData[textId].description}</span>
        </div>
        <div className={styles.swipebuttons}>
          <div className="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()}>
            <Image
              className={styles.arrowleft}
              src="https://res.cloudinary.com/dttaprmbu/image/upload/v1677960910/arrowleft_bxtl9u.svg"
              alt="prev-arrow"
              width={50}
              height={37}
            />
          </div>
          <div className="nextButton" onClick={() => swiperRef.current.swiper.slideNext()}>
            <Image
              className={styles.arrowright}
              src="https://res.cloudinary.com/dttaprmbu/image/upload/v1677960910/arrowright_tpil92.svg"
              alt="arrow-next"
              width={50}
              height={37}
            />
          </div>
        </div>
        </div>
        </div>
      </section>

      <div className={styles.middlediv}>{widthSize}</div>

      <section className={styles.sectiontwo}></section>
    </main>
  )
}
