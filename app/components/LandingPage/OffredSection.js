import React from 'react'
import css from "./OffredSec.module.css"
import Image from 'next/image'
import { Roboto } from "next/font/google";
import { IoArrowForwardOutline } from 'react-icons/io5';
const roboto = Roboto({ subsets: ["latin"],weight:['400','500','700','900'] });
const OffredSection = () => {
  return (
    <div className={css.OffredSection}>
     <div className={css.OffredGrid}>
     <div className={css.gridChild1}>
     <h1>skills <span>offered</span></h1>
     <h2>gardening classes</h2>
     <p className={roboto.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada eget congue vel vivamus massa ornare. Tellus fringilla urna, ultricies id justo. Nisl adipiscing faucibus sed auctor tristique lorem volutpat vulputate</p>
     <span className={css.priceText}>rs. 999/hr</span>

     <button className={css.CommonBtn}>{"EXPLORE MORE"} <IoArrowForwardOutline className={css.icons} /></button>
     </div>
     <div className={css.gridChild2}>
     <div className={css.ImageBox}>
     <Image width={731} height={723} src="/Images/offredImg.png" alt='images' />
     </div>
     </div>
     </div>
    </div>
  )
}

export default OffredSection