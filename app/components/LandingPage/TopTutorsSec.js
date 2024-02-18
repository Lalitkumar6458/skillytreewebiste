import React from 'react'
import css from "./TopTutors.module.css"
import Image from 'next/image'
import { FaRegBookmark } from "react-icons/fa6";
import { RiGraduationCapLine,RiUserVoiceLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import { BiChat } from "react-icons/bi";
import CardCom from '../Base/CardCom';
const TopTutorsSec = () => {
  return (
    <div className={css.TopTutorsSec}>
    <h1>
    top <span>tutors</span>
    </h1>

    <div className={css.gridBox}>
    <div  className={css.CardSec}>
    <CardCom/>
    </div>

    <div className={css.CardSec}>
    <CardCom/>
    </div>
    <div className={css.CardSec}>
    <CardCom/>
    </div>
    </div>
    </div>
  )
}

export default TopTutorsSec