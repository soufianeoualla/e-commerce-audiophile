import logo from './assets/shared/desktop/logo.svg'
import { FaSquareXTwitter,FaSquareFacebook,FaSquareInstagram   } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className=" bg-black-light h-[365px] md:h-full md:pb-4 sm:h-[100vh]">
        <div className="max-w-[1110px] m-auto relative pt-14 md:px-10 ">
            <div className="rectangle absolute w-[101px] h-[4px] bg-brown top-0 sm:left-[37%] "></div>
            <div className='flex justify-between items-center md:flex-col md:items-start md:gap-8 sm:justify-center sm:items-center'>
                <img src={logo} alt="" />
                <ul className='text-xs font-medium tracking-widest flex justify-between items-center gap-8 text-white sm:flex-col sm:items-center sm:gap-4 '>
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

            <div className='flex justify-between items-end mt-8 sm:text-center'>
                <p className='text-gray mt-8 w-[50%] text-opacity-65 text-base md:relative sm:w-full'>Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

            <div className="social-icons flex items-center gap-4 text-white text-xl md:absolute md:right-10 md:bottom-0 sm:left-[50%] translate-x-[-35%] sm:bottom-[-40px] ">
                <FaSquareFacebook/>
                <FaSquareXTwitter/>
                <FaSquareInstagram/>

            </div>

            </div>
                <p className='text-gray mt-14 text-opacity-65 text-base sm:text-center '>
                Copyright {year}. All Rights Reserved
                </p>
            <div>
           

            </div>
        </div>

    </footer>
  )
}

export default Footer