import React from 'react';
import produk1 from '../pics/produk1.webp';
import produk2 from '../pics/produk2.webp';
import produk3 from '../pics/produk3.webp';
import produk4 from '../pics/produk4.webp';
import produk5 from '../pics/produk5.webp';
import produk6 from '../pics/produk6.webp';
import produk7 from '../pics/produk7.webp';
import produk8 from '../pics/produk8.webp';
import produk9 from '../pics/produk9.webp';

function Product() {
  const products = [
    {
      id: 1,
      name: 'Glossy Lip Balm Lock-shining Moisturizing ',
      image: produk1,  
      link: 'https://id.shp.ee/w79wWoY', 
    },
    {
      id: 2,
      name: 'Mascara Curl Eyelash Waterproof Pro-Length',
      image: produk2,  
      link: 'https://id.shp.ee/1gXuLQS', 
    },
    {
      id: 3,
      name: 'Eyebrow Cream Gel Waterproof Pensil Alis',
      image: produk3,
      link: 'https://id.shp.ee/uZs1K4S', 
    },
    {
      id: 4,
      name: 'Super Fine Loose Powder',
      image: produk4,
      link: 'https://id.shp.ee/Pj8v57X', 
    },
    {
      id: 5,
      name: 'Matte Cushion SPF50 PA+++ Lip Tint Powder Oil Control',
      image: produk5,
      link: 'https://id.shp.ee/aUjcSjq', 
    },
    {
      id: 6,
      name: 'Full Coverage Oil-control Fluid Foundation',
      image: produk6,
      link: 'https://id.shp.ee/tEPxPto', 
    },
    {
      id: 7,
      name: 'Lipstik Cream Velvet-Mist Matte Lip Clay',
      image: produk7,
      link: 'https://id.shp.ee/aywSZ3u', 
    },
    {
      id: 8,
      name: 'Pro-Sculpt 3-in-1 3D Palette Highlighter & Contour & Blush',
      image: produk8,
      link: 'https://id.shp.ee/SVHcHdT', 
    },
    {
      id: 9,
      name: 'Eyelash Curler Super Curled Eyelashes Portable',
      image: produk9,
      link: 'https://id.shp.ee/in5GBhj', 
    },
  ];

  return (
    <div className="animate-fadeIn px-6 py-12">
      <h1 className="text-6xl font-extrabold text-center mb-8 mt-16">Our Products</h1>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {products.map((product) => (
          <div key={product.id}>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img
                src={product.image} 
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-110"
              />
            </a>
            <div className="mt-4 text-center">
              <h2 className="text-large font-semibold text-gray-700">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
