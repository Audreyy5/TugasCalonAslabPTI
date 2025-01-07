import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../pics/logo1.webp';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <motion.div
        className="w-full max-w-6xl mt-8 p-8 bg-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={logo1}
          alt="Company Logo"
          className="w-128 h-32 mx-auto mb-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-xl text-gray-700 mb-6 text-center font-semibold font-serif text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hello from Focallure, pronounced as “Fo-co-llure”, a unique beauty brand dedicated to crafting dazzling, luminous beauty products...
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="bg-blue-400 text-white p-6 rounded-lg shadow-md flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h2 className="text-3xl font-bold">1500</h2>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="text-4xl">
              <i className="fas fa-briefcase"></i>
            </div>
          </motion.div>

          <motion.div
            className="bg-yellow-400 text-white p-6 rounded-lg shadow-md flex items-center justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h2 className="text-3xl font-bold">2 Million+</h2>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div className="text-4xl">
              <i className="fas fa-smile"></i>
            </div>
          </motion.div>

          <motion.div
            className="bg-pink-400 text-white p-6 rounded-lg shadow-md flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h2 className="text-3xl font-bold">150+</h2>
              <p className="text-lg">Team Members</p>
            </div>
            <div className="text-4xl">
              <i className="fas fa-users"></i>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Company Overview</h2>
          <p className="text-lg text-gray-700 font-serif text-center">
            We believe in making our users the center of focus, offering a unique opportunity to shine and radiate confidence...
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 italic">Recent Projects</h2>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ul className="space-y-4">
              <motion.li
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-small text-gray-600">Project Glisten Opal Hydrating Lip Balm</span>
                <span className="text-sm text-gray-500">Completed - 2 days ago</span>
              </motion.li>
              <motion.li
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-small text-gray-600">Glam Metal Liquid Lipstick</span>
                <span className="text-sm text-gray-500">Ongoing - 1 week ago</span>
              </motion.li>
              <motion.li
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-small text-gray-600">Instant Retouch Highlight Powder</span>
                <span className="text-sm text-gray-500">Coming Soon - In 2 weeks</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 italic">Recent Activities</h2>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ul className="space-y-4">
              <motion.li
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-small text-gray-600">PR Packages Delivered</span>
                <span className="text-sm text-gray-500">31 December 2024</span>
              </motion.li>
              <motion.li
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-small text-gray-600">New Clients Welcoming</span>
                <span className="text-sm text-gray-500">02 January 2025</span>
              </motion.li>
              <motion.li
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-small text-gray-600">After Party Product Launching</span>
                <span className="text-sm text-gray-500">1 day ago</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
