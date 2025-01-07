import React from 'react';
import { motion } from 'framer-motion';
import ig from '../pics/ig.png';
import shopee from '../pics/shopee.jpg';
import tiktok from '../pics/tiktok.png';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    window.location.href = '/contact';
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const hoverEffect = { scale: 1.1 };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="px-6 py-12"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-5xl font-extrabold text-center mb-8 mt-16"
      >
        Contact Us
      </motion.h1>

      <motion.div
        variants={fadeInUp}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 italic">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={hoverEffect}
            type="submit"
            className="mt-6 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Company Address</h2>
        <p className="text-lg mt-4 text-center">
          Universitas Multimedia Nusantara, Jl. Scientia Boulevard, Gading
          Serpong, Tangerang, Banten, Indonesia
        </p>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.4003627097983!2d106.63395609966682!3d-6.28927859968556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418d8b1c710933%3A0x5534e2bc2b2456a6!2sUniversitas%20Multimedia%20Nusantara!5e0!3m2!1sen!2sid!4v1672953104977!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Information</h2>
        <h5 className="text-xl mb-4 italic text-center">
          Connect with us through phone and mail:
        </h5>
        <p className="text-lg text-center">Phone: +62 21 5482222</p>
        <p className="text-lg text-center">Email: contact@umn.ac.id</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Follow Us</h2>
        <div className="flex space-x-6 justify-center mt-10">
          {[ig, shopee, tiktok].map((icon, index) => (
            <motion.a
              whileHover={hoverEffect}
              key={index}
              className="text-3xl text-gray-700 hover:text-blue-500"
            >
              <img
                src={icon}
                alt={`social-${index}`}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform transform"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
        <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p className="text-lg">Saturday - Sunday: Closed</p>
      </motion.div>
    </motion.div>
  );
}

export default ContactUs;
