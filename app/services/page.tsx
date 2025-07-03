'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';


export const services = [
  {
    id: "1",
    name: "Web Development",
    description: "Full-stack web development for businesses and individuals.",
    imagePath: "/static/images/web-code-block.jpg",
    price: 1500,
  },
  {
    id: "2",
    name: "SEO Optimization",
    description:
      "Improve your site's ranking and visibility with modern SEO strategies.",
    imagePath: "/static/images/web-women-developing.jpg",
    price: 500,
  },
  {
    id: "3",
    name: "Content Creation",
    description:
      "High-quality blogs, videos, and graphics tailored to your brand.",
    imagePath: "/static/images/web-blog.jpg",
    price: 800,
  },
]

const ServicesPage = () => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push('/book');
  };

  return (
    <main className="p-8">
      <Image src='/static/images/web-man-typing-with-screen.jpg' alt='developer typing on a laptop' className='bg' height='1080' width='1920' />
      <motion.h1 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>How can we help?</motion.h1>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index * 0.5) }} />
        ))}
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center py-12 px-8 bg-(--color-gray-800)/90 rounded-lg shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      ><h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {"Choose from our professional services and book your appointment today."}
          {"We're here to make your life easier with our reliable and efficient solutions."}
        </p>
        <motion.button
          onClick={handleBookNow}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Your Service Now
        </motion.button>
      </motion.div>
    </main>
  )
}

export default ServicesPage