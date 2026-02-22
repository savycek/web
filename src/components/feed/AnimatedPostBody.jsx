"use client"

import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'

const AnimatedPostBody = ({ content, components, noContentText }) => {

    const containerVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="prose prose-invert prose-lg prose-p:text-[#8E8E93] prose-headings:text-white prose-a:text-white w-full max-w-none leading-relaxed"
        >
            {content ? (
                <PortableText
                    value={content}
                    components={components}
                />
            ) : (
                <p className="text-[#8E8E93]">{noContentText}</p>
            )}
        </motion.div>
    )
}

export default AnimatedPostBody