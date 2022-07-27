import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion"

import React from 'react'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  )
}

export default Home