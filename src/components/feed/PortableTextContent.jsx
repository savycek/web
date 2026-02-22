"use client"

import { PortableText } from '@portabletext/react'
import { motion } from 'framer-motion'
import urlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = urlBuilder(client)
const urlFor = (source) => builder.image(source)

const components = {
    types: {
        image: ({ value }) => {
            if (!value?.asset) return null;
            return (
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={urlFor(value).url()}
                    alt={value.alt || 'Obrázek'}
                    className="w-full rounded-xl border border-white/10 my-8"
                />
            )
        }
    },
    block: {
        normal: ({ children }) => (
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 last:mb-0"
            >
                {children}
            </motion.p>
        )
    }
}

export default function PortableTextContent({ value }) {
    return (
        <div className="prose prose-invert prose-lg prose-p:text-[#8E8E93] prose-headings:text-white prose-a:text-white w-full max-w-none leading-relaxed">
            <PortableText value={value} components={components} />
        </div>
    )
}