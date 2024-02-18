import React from 'react'
import css from "../LandingPage/TopTutors.module.css"
import Image from 'next/image'
import { FaRegBookmark } from "react-icons/fa6";
import { RiGraduationCapLine,RiUserVoiceLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import { BiChat } from "react-icons/bi";
const CardCom = () => {
  return (
   <div className=''>
   <div className={css.ImgBox}>
   <Image width={772} height={515} src={"/Images/img.jpg"} alt='' />
   <div className={css.topHeading}>
   <h4>Top Tutor</h4>
   </div>
   <div className={css.BookmarkIcon}>
   <FaRegBookmark />
   </div>
   </div>
   <div className={css.NameBox}>
   <div className={css.UserImg}>
   <Image width={76} height={75} src="/Images/img2.png" alt="" />
   </div>

   <div className={css.UserName}>
   <h2>Radhakishan J.</h2>
   <Image width={15} height={14} src="/Icons/icons1.png" alt=""/>
   <Image width={13} height={15} src="/Icons/flag1.png" alt=""/>
   </div>
 
   </div>
   <div className={css.ContentBox}>
   <div className={css.textBox}>
   <RiGraduationCapLine className={css.Icons} /> English, Geography, +3
   </div>
   <div className={css.textBox}>
   <RiUserVoiceLine className={css.Icons} /> {"English (Native), Hindi (Conversational) +1"}
   </div>
<div className={css.activityBox}>
<div className={css.activeBox}>
<span>Active </span>
<span>Students</span>
<span className={css.countCls}>3</span>

</div>
<div className={css.activeBox}>

<span>Session </span>
<span>Finished</span>
<span className={css.countCls}>45</span>
</div>
<div className={css.activeBox}>
<span className={css.starBox}>4.6 <IoIosStar className={css.starCls} /> </span>
<span>Ratings</span>
<span className={css.countCls}>172</span>

</div>
</div>
<div className={css.textBox}>
<p><span>Brief :</span> dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra</p>
</div>
<div className={css.ButtonBox}>
<div className={css.InnerButton}>
<button >Book Trial  |  $20/hr</button>

<div className={css.gradientBox1}></div>
<div className={css.gradientBox2}></div>
<div className={css.gradientBox3}></div>

</div>
</div>
<div className={css.BottomBox}>
<div className={css.textInner}>
<LuEye className={css.icons} />QuickView Details
</div>
<div className={css.textInner}>
<BiChat  className={css.icons} /> Chat with Tutor
</div>

</div>
   </div>
   </div>
  )
}

export default CardCom