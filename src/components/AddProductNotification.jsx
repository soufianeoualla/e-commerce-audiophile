import { motion } from "framer-motion";
import gif from '../components/assets/Animation - 1708706076883.gif'
const AddProductNotification = () => {
  

  return (
    <motion.div
      className='p-2 pr-4 bg-white text-black rounded-lg text-sm  font-bold  h-10 flex gap-2 justify-center items-center capitalize  text-opacity-70 fixed right-[40%] shadow-lg sm:right-[25%] '
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5, delay: 0.25 }}
    >
            <img width={'35px'} height={'35px'} src={gif} alt="" />

      
      <span>item added to cart</span>
    </motion.div>
  );
};

export default AddProductNotification;
