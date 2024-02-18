import React from 'react'
import css from "./ReviewSec.module.css"
import Image from 'next/image'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
const ReviewSec = () => {
  return (
    <div className={css.reviewSec} >
    <div className={css.innerWrapper}>
    <h1>REVIEWS FROM OUR <span>CUSTOMERS</span></h1>

    <div className={css.reviewCard}>
    <div className={css.gradientCircle1}></div>
    <div className={css.gradientCircle2}></div>

    <div className={css.gradientCircle3}></div>
    <div className={css.gradientCircle4}></div>
    <div className={css.commentSec}>
     

    <div className={css.contentBox}>
    <div className={css.ImageBox}>
    <div className=''>
    <Image width={112} height={112} src="/Images/img4.png" alt=""/>
    </div>
    <div className=''>
    <h3>andrew holt</h3>
    <p className={css.EmailBox}>graphics123@gmail.com</p>
    </div>
    </div>
    <div className=''>
    <p className={css.descCls}>
    <RiDoubleQuotesL className={css.qouteIcon1} />
    I had been dreaming to learn guitar for 4 yrs. One day I visited Peppertree.com. I clicked "Buy a Trial Session". Later all happened automatically, I kept attending the amazing tutor online and she kept me motivated. It's been 4 weeks & 40 sessions. And woohoo! I just  all my friends at a party with my skills! Stop desiring a skill, just start with Peppertree! <RiDoubleQuotesR className={css.qouteIcon2} /></p>
    </div>
    </div>
    </div>
    </div>

    <div className={css.SlideDots}>
    <div className={css.active}></div>
    <div className=''></div>
    <div className=''></div>
    </div>
    </div>
    </div>
  )
}

export default ReviewSec