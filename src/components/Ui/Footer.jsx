import React from 'react'
import Footerdata from "../../Api/footerData.json";
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
const Footer = () => {
  const footericon ={
    MdPlace:<MdPlace />,
    IoCallSharp: <IoCallSharp/>,
    TbMailPlus: <TbMailPlus/>,
  }
  return (
    <>
    <footer className='footer-section'>
      <div className="container grid grid-three-cols">
        {
          Footerdata.map((curelem , index)=>{
            const {icon ,title,details} = curelem ;
            return    <li key={index} className="footer-contact">
                  <div className="icon">{footericon[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                      <p>{details}</p>
                  </div>
              </li>
            
            

          })
        }
      </div>
    </footer>
    </>
  )
}

export default Footer