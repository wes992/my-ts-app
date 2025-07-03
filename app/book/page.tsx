'use client'

import React, { Suspense } from 'react'
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import { BookingForm } from '@/components/BookingForm';
import { useSearchParams } from 'next/navigation';


const BookingPageContent
  = () => {
    const searchParams = useSearchParams();
    const selectedService = searchParams.get('service');


    const tags = ['Infinite Frameworks',
      'Many Languages',
      'Hosting',
      'Databases'];

    const solveList = [
      'Skip hours debugging.',
      'We handle the code, you handle the business.',
      'Professional results, delivered.',
      'Clean, scalable code, zero hassle'
    ]

    return (
      <main>
        <motion.video autoPlay muted className={'bg'} initial={{ opacity: 0 }} animate={{ opacity: .75 }} transition={{ duration: 0.5 }}>
          <source src="/static/videos/web-typing.mp4" type="video/mp4" />
        </motion.video>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: 0.5 }} className="p-16 grid gap-6 row-gap-8 md:grid-cols-2">
          <div className="text-left justify-center">
            <h1 className="text-3xl font-bold mb-6">Web Development is hard.</h1>
            <ul className="statement-list text-left pl-8 text-lg">
              {tags.map((tag, index) => <li key={tag + index} className="mb-4">
                <div className="row flex gap-4">
                  <XMarkIcon className="size-6 text-orange-500" />
                  {tag}
                </div>
              </li>)}
            </ul>
          </div>
          <div className="image">
            <Image alt='web woman developing' src='/static/images/web-woman-developing.jpg' height={1920} width={1280} style={{ position: 'relative' }} />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: 0.5 }} className='col-span-2 p-16 grid gap-12 md:grid-cols-2 bg-(--color-gray-800)/75'>
          <div className="text-left justify-center">
            <h1 className="text-2xl font-bold mb-6">We are here to fix that.</h1>
            <p>Forget messing with HTML and CSS. Let us build it for you, in the framework you choose.</p>
          </div>
          <ul className="statement-list text-left pl-8">
            {solveList.map((item, index) =>
              <li className='mb-4' key={item + index}>
                <div className="row flex gap-4">
                  <CheckIcon className="size-6 text-blue-500" />
                  {item}</div>
              </li>
            )}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: -50 }} transition={{ delay: .75, duration: 0.5 }} className="form col-span-2 mx-8 justify-self-center p-4 rounded-lg shadow-lg hover:shadow-md bg-(--color-gray-600) max-w-250 text-white" >
          <h1 className="text-3xl font-bold mb-6">Book a Service</h1>
          {selectedService && (
            <div className="mb-4 p-3 bg-blue-600 rounded-lg">
              <p className="text-sm">Selected Service: <span className="font-semibold">{selectedService}</span></p>
            </div>
          )}
          <BookingForm preSelectedService={selectedService || undefined} />
        </motion.div>
      </main>
    )
  }

const BookingPage = () => {
  return (
    <Suspense fallback={
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </main>
    }>
      <BookingPageContent />
    </Suspense>
  );
}

export default BookingPage
