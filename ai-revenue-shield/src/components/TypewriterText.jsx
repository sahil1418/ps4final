import { motion } from 'framer-motion'

export default function TypewriterText({ text, delay = 0, speed = 0.028, className = '', style = {} }) {
  return (
    <span className={className} style={style} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * speed, duration: 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}
