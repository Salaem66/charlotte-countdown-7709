import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeartFill, BubbleHeart, Cake, Gift } from 'lucide-react'

const App = () => {
  const [countdown, setCountdown] = useState(60)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#FFC0CB] to-[#FFB6C1] text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-full p-8 shadow-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center text-6xl font-bold text-[#FF69B4]"
        >
          {countdown}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center mt-4 text-3xl"
        >
          <HeartFill className="mr-2" />
          Countdown to Charlotte's party!
          <HeartFill className="ml-2" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex items-center justify-center"
      >
        <BubbleHeart className="mr-2 animate-bounce" />
        <Cake className="mr-2 animate-bounce" />
        <Gift className="animate-bounce" />
      </motion.div>
    </div>
  )
}

export default App