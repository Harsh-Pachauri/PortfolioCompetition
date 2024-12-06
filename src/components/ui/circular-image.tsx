'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface CircularImageProps {
  imageSrc: string
  imageAlt: string
  size?: 'sm' | 'md' | 'lg' | 'xlg'
}

export default function CircularImage({ 
  imageSrc, 
  imageAlt,
  size = 'md' 
}: CircularImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizes = {
    sm: { wrapper: "w-64 h-64", circle: "w-32 h-32", offset: "translate-x-2 translate-y-2" },
    md: { wrapper: "w-80 h-80", circle: "w-40 h-40", offset: "translate-x-3 translate-y-3" },
    lg: { wrapper: "w-96 h-96", circle: "w-48 h-48", offset: "translate-x-4 translate-y-4" },
    xlg: { wrapper: " h-[32rem]", circle: "w-64 h-64", offset: "translate-x-6 translate-y-6" }
  }

  return (
    <div 
      className={`relative ${sizes[size].wrapper} p-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Left circle */}
        <motion.div
          animate={{ 
            x: isHovered ? 0 : -24, 
            y: isHovered ? 0 : -24,
            opacity: isHovered ? 0 : 1
          }}
          transition={{ duration: 0.3 }}
          className={`absolute ${sizes[size].circle} rounded-full bg-red-500/20 
          backdrop-blur-sm shadow-[0_0_30px_rgba(239,68,68,0.3)]
          transition-all duration-300 hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]`}
        />
        
        {/* Center circle with image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`absolute ${sizes[size].circle} rounded-full overflow-hidden 
          shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 
          hover:shadow-[0_0_50px_rgba(0,0,0,0.7)]
          transition-all duration-300`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </motion.div>

        {/* Right circle */}
        <motion.div
          animate={{ 
            x: isHovered ? 0 : 24, 
            y: isHovered ? 0 : 24,
            opacity: isHovered ? 0 : 1
          }}
          transition={{ duration: 0.3 }}
          className={`absolute ${sizes[size].circle} rounded-full bg-blue-500/20 
          backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.3)]
          transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]`}
        />
      </motion.div>
    </div>
  )
}

