import React, { useEffect, useState } from 'react'
import Logo from '/logo.svg'
import Orange from '/decoration-2.png'
import "./Header.css"
export const Header = () => {
    const[menu,setMenu]=useState(true);
    const[mobile,setMobile] = useState(null);
    useEffect(()=>{
        setMobile(screen.width)
    },[screen.width])
    return (
    <>
        <div className="content">
            <div className='scroll-watcher'></div>
            <div className='contecnt__nav'>
                <span >
                    <img src={Logo} alt="" className='logo' />
                </span>
                <i className={!menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={()=>setMenu(!menu)}></i> 
                <div className={!menu ? "content__list active" : "content__list"}>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                    </ul>
                <button>Contact</button>
                </div>
            </div>
            <div className="content__header">
                <h1 className="content__heading">We are creatives</h1>
                <i className="fa-solid fa-arrow-down-long"></i>
            </div>
            <img src={Orange} className='orange' />
        </div>
    </>
  )
}
