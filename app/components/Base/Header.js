"use client"
import React, { useState } from 'react'
import css from "./Header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  return (
    <div className={`${css.header}`}>
      <div className={css.logo}>
        <Image width={218} height={54} src="/Images/Logo.png" alt='logo' />
      </div>

      {
        showSearchBar ? <div className={css.SearchBox}>
          <div className={css.SearchInput}>
            <FiSearch className={css.searchIcon}  />
            <input type='text' placeholder='SEARCH A SKILL' />
          </div>
          <HiOutlineMenuAlt2 className={css.menuIcon} onClick={()=>setShowSearchBar(false)} />
        </div> : <div className={css.navbar}>
          <FiSearch className={css.searchIcon} onClick={()=>setShowSearchBar(true)} />
          <ul className=''>
            <li>
              <Link className={css.active} href={"#"}>Home</Link>
              <div className={css.activeLine}></div>
            </li>
            <li>
              <Link href={"#"}>find tutors</Link>
            </li>
            <li>
              <Link href={"#"}>how it works?</Link>
            </li>
          </ul>
        </div>
      }

      <div className={css.buttonSec}>
        <div className={css.loginBtn}>
          <LuLogIn />
          Log In
        </div>
        <button>
          join as tutor
        </button>
      </div>
    </div>
  )
}

export default Header