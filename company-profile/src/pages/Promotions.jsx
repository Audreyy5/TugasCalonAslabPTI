import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import produk10 from '../pics/produk10.webp';
import produk11 from '../pics/produk11.webp';
import produk12 from '../pics/produk12.webp';

function Promotions() {
  const promotions = [
    {
      title: 'Special Summer Sale',
      description: 'Get up to 50% off on all products this summer! Don\'t miss out on the best deals of the season.',
      image: produk10,
    },
    {
      title: 'Exclusive Member Discounts',
      description: 'Join our membership program and enjoy exclusive discounts, early access to sales, and more!',
      image: produk11,
    },
    {
      title: 'Limited-Time Offer',
      description: 'Hurry! Enjoy up to 30% off on selected items. This offer is available for a limited time only.',
      image: produk12,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPromotion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const prevPromotion = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-extrabold text-black mb-4 mt-16">Our Latest Promotions</h1>
          <p className="text-xl max-w-3xl mx-auto text-black opacity-80">
            Discover our exciting promotions and exclusive offers! Take advantage of these limited-time deals before they're gone.
          </p>
        </motion.div>

        <div className="relative mb-10">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.img
                src={promotions[currentIndex].image}
                alt="Promotion"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-4">{promotions[currentIndex].title}</h2>
              <p className="text-lg mb-6">{promotions[currentIndex].description}</p>
            </motion.div>
          </div>

          <motion.button
            onClick={prevPromotion}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-pink-600 p-3 rounded-full shadow-xl hover:bg-pink-700 transition"
          >
            &#8592;
          </motion.button>
          <motion.button
            onClick={nextPromotion}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-pink-600 p-3 rounded-full shadow-xl hover:bg-pink-700 transition"
          >
            &#8594;
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Don't Miss Out on These Amazing Deals</h2>
          <p className="text-lg max-w-2xl mx-auto text-black mb-8">
            We regularly update our promotions to bring you the best offers. Check back often to ensure you never miss a deal!
          </p>
        </motion.div>

        <div className="flex justify-center gap-8">
          <motion.a
            href="https://id.shp.ee/fPKFxHN"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition">
              Shop Now
            </button>
          </motion.a>
          <motion.a
            href="https://id.shp.ee/fPKFxHN"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-4 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
