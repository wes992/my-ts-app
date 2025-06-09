import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';


interface HeroTagsProps {
  tags: string[]
}

const HeroTags = ({ tags = [] }: HeroTagsProps) => {

  return (
    <motion.footer initial={{ opacity: 0, y: -64 }} animate={{ opacity: 1 }} className='bg-white shadow-sm dark:bg-gray-800 w-full'>
      <ul className="flex flex-wrap justify-center text-center items-center mt-3 text-2xl font-bold text-gray-500 dark:text-gray-400 sm:mt-0 w-full">
        {tags.map((tag, index) => <li className={`px-32 md:px-20 sm:px-16 py-4 ${index === 1 && 'sm:border-x-2'}`} key={tag + index}>
          <div className="row flex gap-4">
            <CheckIcon className="size-6 text-blue-500" />
            {tag}</div>
        </li>)}
      </ul>

    </motion.footer>
  )
}

export { HeroTags }