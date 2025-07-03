import React from 'react'
import { motion, MotionProps } from 'framer-motion'
import { Service } from "@/types/service";
import { useRouter } from 'next/navigation';
import Image from 'next/image';


interface ServiceCardProps extends MotionProps {
  service: Service;
}

const ServiceCard = ({ service, ...props }: ServiceCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/book?service=${encodeURIComponent(service.name)}`);
  };
  return (
    <motion.div
      {...props}
      className="border rounded shadow hover:shadow-lg transition-all duration-300 bg-(--color-gray-800)/75 max-w-88 cursor-pointer transform hover:scale-105"
      onClick={handleClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="max-h-72 max-w-88">
        <Image src={service.imagePath!} alt='' height='540' width='960' />
      </div>
      <div className="body p-4">
        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
        <p className="mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">${service.price.toFixed(2)}</p>
          <span className="text-blue-400 text-sm font-medium">Click to Book →</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard