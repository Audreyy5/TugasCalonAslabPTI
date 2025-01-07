import React from 'react';
import logo from '../pics/logo1.webp';
import ig from '../pics/ig.png';
import shopee from '../pics/shopee.jpg';
import tiktok from '../pics/tiktok.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 border-t border-gray-700">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <img src={logo} alt="Logo" className="w-36 mb-4 mx-auto md:mx-0" />
                    <h3 className="text-3xl font-semibold">Focallure Company Indonesia</h3>
                    <p className="text-gray-400 text-sm">© Focallure, IND.</p>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="text-xl font-semibold mb-4">Contact</h4>
                    <p className="text-sm text-gray-300">
                        <b>Email:</b>{' '}
                        <a href="mailto:rbisionkarawang@gmail.com" className="text-blue-400 hover:underline">
                            focallureindonesia@gmail.com
                        </a>
                    </p>
                    <div className="mt-4">
                        <p className="text-sm text-gray-300">
                            Jalan Scientia Boulevard Gading, Curug Sangereng,<br />
                            Serpong, Kabupaten Tangerang, Banten 15810
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-16 justify-center md:justify-start text-2xl">
                        <a
                            href="https://www.instagram.com/focallurebeautyid/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-500"
                        >
                            <img
                                src={ig}
                                alt="Instagram"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform transform hover:scale-110"
                            />
                        </a>
                        <a
                            href="https://id.shp.ee/fPKFxHN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-500"
                        >
                            <img
                                src={shopee}
                                alt="Shopee"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform transform hover:scale-110"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@focallure.beauty?lang=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-500"
                        >
                            <img
                                src={tiktok}
                                alt="TikTok"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform transform hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4">
                <p className="text-center text-sm text-gray-400">Powered by Focallure Global</p>
            </div>
        </footer>
    );
};

export default Footer;
