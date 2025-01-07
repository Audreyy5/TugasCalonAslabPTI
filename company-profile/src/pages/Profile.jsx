import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  
import gambar1 from '../pics/gambar1.jpeg';
import gambar2 from '../pics/gambar2.png';
import gambar3 from '../pics/gambar3.jpeg';
import gambar4 from '../pics/gambar4.jpg';

function Profile() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-6xl mt-8 p-8 bg-white rounded-lg">
        <motion.h1
          className="text-6xl font-extrabold text-black-800 mb-6 text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
        >
          Our Company
        </motion.h1>

        <div className="text-center mb-10">
          <motion.p
            className="text-xl text-gray-800 italic"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }} 
          >
            Welcome to our company profile! Discover who we are, our vision, mission, and the leadership behind our success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          <motion.img
            src={gambar1}
            alt="Gambar 1"
            className="w-full h-60 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 1 }} 
          />
          <motion.img
            src={gambar2}
            alt="Gambar 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.img
            src={gambar3}
            alt="Gambar 3"
            className="w-full h-60 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Company Overview</h2>
          <p className="text-lg text-gray-600 font-serif text-center">
            We are a leading company committed to providing high-quality services and innovative solutions. With a focus on
            customer satisfaction, we continuously strive to exceed expectations and deliver impactful results. Our team is
            dedicated to pushing boundaries, and our diverse portfolio of projects reflects our expertise and commitment to
            excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-lg text-gray-600 font-serif">
              Our vision is to be the most trusted and innovative company, continuously evolving to meet the ever-changing
              needs of our clients and making a lasting impact on the world through our solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission</h2>
            <p className="text-lg text-gray-600 font-serif">
              Our mission is to provide cutting-edge solutions that help our clients succeed in their industries, fostering
              long-term partnerships built on trust, collaboration, and integrity.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our CEO</h2>
          <div className="flex items-center space-x-6">
            <motion.img
              className="w-32 h-32 rounded-full border-4 border-gray-300"
              src={gambar4}
              alt="CEO"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">John Thor</h3>
              <p className="text-lg text-gray-600">Chief Executive Officer</p>
              <p className="text-gray-600 mt-4 font-serif">
                John Thor has been leading the company with a visionary approach, guiding it towards consistent growth and
                success. With over 10 years of experience in the industry, he remains committed to innovation and building
                a sustainable future for the company and its customers.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Company History</h2>
          <p className="text-lg text-gray-600 font-serif text-center">
            Founded in 2015, our company started with a simple mission: to provide excellent customer service and
            high-quality solutions. Over the years, we have expanded our services and client base, becoming a trusted name
            in the industry. Our journey has been marked by a passion for innovation, teamwork, and an unwavering
            commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="bg-gray-500 text-white p-6 rounded-lg shadow-md text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h3 className="text-2xl font-bold italic">Innovation</h3>
              <p className="text-lg mt-4 font-serif">We embrace creativity and continuous improvement in all aspects of our business.</p>
            </motion.div>
            <motion.div
              className="bg-gray-700 text-white p-6 rounded-lg shadow-md text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h3 className="text-2xl font-bold italic">Integrity</h3>
              <p className="text-lg mt-4 font-serif">We uphold the highest ethical standards and maintain transparency in all our dealings.</p>
            </motion.div>
            <motion.div
              className="bg-gray-600 text-white p-6 rounded-lg shadow-md text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h3 className="text-2xl font-bold italic">Customer Focus</h3>
              <p className="text-lg mt-4 font-serif">Our clients' needs are at the heart of everything we do, and we strive for their success.</p>
            </motion.div>
            <motion.div
              className="bg-gray-700 text-white p-6 rounded-lg shadow-md text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h3 className="text-2xl font-bold italic">Excellence</h3>
              <p className="text-lg mt-4 font-serif">We deliver the highest quality products and services, constantly exceeding expectations.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h3 className="text-2xl font-bold italic">Collaboration</h3>
              <p className="text-lg mt-4 font-serif">We believe in teamwork and collaboration to achieve our goals and foster a positive work environment.</p>
            </motion.div>
            <motion.div
              className="bg-gray-900 text-white p-6 rounded-lg shadow-md text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h3 className="text-2xl font-bold italic">Sustainability</h3>
              <p className="text-lg mt-4 font-serif">We are committed to sustainable practices that positively impact the environment and society.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Get in Touch!</h2>
          <p className="text-lg text-gray-600 font-serif">
            Have any questions? Feel free to reach out to us, and we will be happy to assist you!
          </p>
          <Link to="/contact-us">
            <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-500 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
