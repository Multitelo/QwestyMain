import fireImg from '../../../assets/images/fire.svg'
import coin from '../../../assets/qwest_assets/coin.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import CountDown from '../../mahtot/qwest/CountDown'

function Fire() {
  const [retakeQwes, setRetakeQwes] = useState(false)
  const [coinFallen, setCoinFallen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoinFallen(true)
    }, 1000000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='qwest-fire'>
      <div className='qwest-fire-anim'>
        {coinFallen ? (
          retakeQwes?
            <CountDown/>:
            <motion.div
              className="retake-qwes"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{
                duration: 1,
                ease: 'easeIn',
                delay: 0,
              }} >
              <div>
                <p>Would you like to recover your qwes?</p>
              </div>
              <div className='retake-btns'>
                <button onClick={() => setRetakeQwes(true)}>Yes</button>
                <button onClick={() => setRetakeQwes(false)}>No</button>
              </div>
            </motion.div>


        ) : (
          <AnimatePresence>
            <motion.div
              className="coin"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 400, opacity: [1, 0.5, 0] }}
              transition={{
                duration: 2,
                ease: 'easeIn',
                delay: 3,
              }}
              onAnimationComplete={() => setCoinFallen(true)}
            >
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
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
     
      <div className="fireImg">
        <img src={fireImg} alt="Image of fire" />
      </div>
    </div>
  )
}

export default Fire
