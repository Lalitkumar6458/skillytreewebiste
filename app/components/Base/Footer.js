import React from 'react'
import css from "./Footer.module.css"
import Image from 'next/image'
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"],weight:['400','500','700','900'] });
const Footer = () => {
  return (
    <div className={css.FooterSec} >
    
    <div className={css.GridChild}>
     <Image width={218} height={60} src={"/Images/Logo.png"} alt='logo'/>
    </div>
    <div className={css.GridChild}>
    <h4>Latest Blog Post</h4>
    <h3>Ready to get started?</h3>
    <p className={roboto.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <button >
    start free trial
    </button>
    </div>
    <div className={`${css.GridChild} ${css.linkSec}`}>
   <div className={css.BoxCss}>
   <div className={css.ProductLink}>
   <h1>Product</h1>
   <div >
   <ul>
   <li>Product</li>
   <li>Product</li>
   <li>Product</li>
   <li>Product</li>
   <li>Product</li>
   </ul>
   </div>
    </div>
    <div className={css.companyLink}>
    <h1>Company</h1>
    <div className=''>
    <ul>
    <li>Company</li>
    <li>Company</li>
    <li>Company</li>
    <li>Company</li>
    <li>Company</li>
    </ul>
    </div>
 
    </div>
    </div>
    <div className={css.footerEnd}>
    <h4>© 2010 — 2020 Privacy — Terms</h4>
    </div>
    </div>
    </div>
  )
}

export default Footer