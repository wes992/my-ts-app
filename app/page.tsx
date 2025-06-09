'use client'

import Image from "next/image"
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroTags } from "@/components/HeroTags";


export default function Home() {
  return (
    <main className="parent h-[calc(100vh-60px)] relative">
      <Image src='/static/images/web-code-block.jpg' alt='IDE with code written in various colors' fill className="hero" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex child flex-col items-center justify-center h-full p-8">
        <h1 className="text-6xl font-bold mb-6">Welcome to World Wise Web</h1>
        <p className="mb-4 text-xl text-center max-w-lg">We offer top-notch services to meet all your web needs. Book your service today!</p>
        <div className="flex gap-4">
          <Link href='/services' className="px-4 py-2 bg-blue-600 text-white rounded">View Services</Link>
          <Link href='/book' className="px-4 py-2 bg-green-600 text-white rounded">Book Today</Link>
        </div>
      </motion.div>
      <HeroTags tags={['Clean', 'Dry', 'Predictable']} />
    </main>
  )
}