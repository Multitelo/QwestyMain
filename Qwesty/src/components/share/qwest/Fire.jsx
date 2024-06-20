import fireImg from '../../../assets/images/fire.svg'
import coin from '../../../assets/qwest_assets/coin.svg'
import { motion, AnimatePresence } from 'framer-motion'

function Fire() {
  return (
    <div className='qwest-fire'>
      <AnimatePresence>
        <motion.div
          className="coin"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 200, opacity: [1,0.5,0] }}
          transition={{
            duration: 2,
            ease: "easeIn",
            delay: 2,
          }}>
          <motion.img
            src={coin}
            alt="coin picture"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="fireImg">
        <img src={fireImg} alt="Image of fire" />
      </div>
    </div>
  )
}

export default Fire
