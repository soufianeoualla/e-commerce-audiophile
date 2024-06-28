import arrow from './assets/shared/desktop/icon-arrow-right.svg'
import headphones from './assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from './assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from './assets/shared/desktop/image-category-thumbnail-earphones.png'
import { Link } from 'react-router-dom'

const ProductCategory = () => {
  return (
    <section className='flex justify-between my-28 product-category md:px-10 '>
        <div className='w-[350px] h-[204px] flex flex-col items-center bg-gray rounded-lg relative md:w-[32.5%] md:h-[217px] '>
            <img className=' absolute top-[-50px] w-[181px] ' src={headphones} alt="" />
            <div className=' absolute bottom-8 flex justify-center items-center flex-col gap-4'>

            <h2 className='font-bold text-lg  md:text-base '>HEADPHONES</h2>
            <Link to={'/headphones'}>
            <div className=' text-xs flex justify-between items-center w-[57.32px] h-[18px] hover:text-brown'>
                SHOP 
                <img src={arrow} alt="" />
            </div>
            </Link>
            </div>
        </div>
        <div className='w-[350px] h-[204px] flex flex-col items-center bg-gray rounded-lg relative md:w-[32.5%] md:h-[217px]'>
            <img className=' absolute top-[-50px]  w-[181px] ' src={speakers} alt="" />
            <div className=' absolute bottom-8 flex justify-center items-center flex-col gap-4'>

            <h2 className='font-bold text-lg  md:text-base '>SPEAKERS</h2>
            <Link to={'/speakers'}>
            <div className=' text-xs flex justify-between items-center w-[57.32px] h-[18px] hover:text-brown'>
                SHOP 
                <img src={arrow} alt="" />
            </div>
            </Link>
            </div>
        </div>
        <div className='w-[350px] h-[204px] flex flex-col items-center bg-gray rounded-lg relative md:w-[32.5%] md:h-[217px]'>
            <img className=' absolute top-[-50px] w-[181px] ' src={earphones} alt="" />
            <div className=' absolute bottom-8 flex justify-center items-center flex-col gap-4'>
            <h2 className='font-bold text-lg md:text-base  '>EARPHONES</h2>
            <Link to={'/earphones'}>
            <div className=' text-xs flex justify-between items-center w-[57.32px] h-[18px] hover:text-brown'>
                SHOP 
                <img src={arrow} alt="" />
            </div>
            </Link>

            </div>
        </div>
        
    </section>
  )
}

export default ProductCategory