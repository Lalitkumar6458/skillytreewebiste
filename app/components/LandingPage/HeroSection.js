import React from 'react'
import css from "./HeroSec.module.css"
import Image from 'next/image'
import { Roboto } from "next/font/google";
import { IoArrowForwardOutline } from "react-icons/io5";
const roboto = Roboto({ subsets: ["latin"],weight:['400','500','700','900'] });
const HeroSection = () => {
  return (
    <div className={css.heroSection}>
    <div className={css.GridBox}>
<div className={css.contentBox}>
<h1>Upskill with a
<br/>
<span>
Personal Touch !
</span></h1>
<p className={roboto.className}>Video learning is boring because learning gets procrastinated 9 out of 10 times. Guarantee yourself a skill in a time you decide, connect to a live tutor now!</p>

<button className={css.CommonBtn}>{"Book a Trial"} <IoArrowForwardOutline className={css.icons} /></button>
</div>
<div className={css.HeroSecImg}>
<Image width={762} height={704} src={"/Images/heroImg.png"} alt='hero section Images' />
</div>

    </div>

    <div className={css.slideDots}>
    <div className={css.active}></div>
    <div className=''></div>
    <div className=''></div>

    </div>
    </div>
  )
}

export default HeroSection