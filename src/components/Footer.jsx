import logo from './assets/shared/desktop/logo.svg'
import { FaSquareXTwitter,FaSquareFacebook,FaSquareInstagram   } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className=" bg-black-light h-[365px] md:h-[440px]">
        <div className="max-w-[1110px] m-auto relative pt-14 md:px-10">
            <div className="rectangle absolute w-[101px] h-[4px] bg-brown top-0 "></div>
            <div className='flex justify-between items-center md:flex-col md:items-start md:gap-8'>
                <img src={logo} alt="" />
                <ul className='text-xs font-medium tracking-widest flex justify-between items-center gap-8 text-white'>
                <Link to={'/'} >
                <li className=' hover:text-brown'>HOME</li>
              </Link>

              <Link to={'/headphones'}>
              <li className=' hover:text-brown'>HEADPHONES</li>
              </Link>

              <Link to={'/speakers'}>
              <li className=' hover:text-brown'>SPEAKERS</li>
              </Link>

              <Link to={'/earphones'}>
              <li className=' hover:text-brown'>EARPHONES</li>
              </Link>
            </ul>

            </div>

            <div className='flex justify-between items-end mt-8'>
                <p className='text-gray mt-8 w-[50%] text-opacity-65 text-base md:relative'>Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

            <div className="social-icons flex items-center gap-4 text-white text-xl md:absolute md:right-10 md:bottom-0 ">
                <FaSquareFacebook/>
                <FaSquareXTwitter/>
                <FaSquareInstagram/>

            </div>

            </div>
                <p className='text-gray mt-14 text-opacity-65 text-base'>
                Copyright {year}. All Rights Reserved
                </p>
            <div>
           

            </div>
        </div>

    </footer>
  )
}

export default Footer