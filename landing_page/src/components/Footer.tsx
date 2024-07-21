import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
            <h2 className='text-white text-lg font-semibold'>About Us</h2>
            <p>Music School is a premier Institution dedicated to teaching the art and Science of music</p>
        </div>
        <div>
            <h2 className='text-white text-lg font-semibold'>
                Quick Links
            </h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='gap-4'>
            <h2 className='text-white text-lg font-semibold'>Follow Us</h2>
            <ul>
                <li> <a>Facebook</a></li>
                <li><a>Twitter</a></li>
                <li> <a>Instagram</a></li>
            </ul>
           
            
           
        </div>
        <div>
            <h2 className='text-white text-lg font-semibold'>Contract Us</h2>
            <p>New Delhi, India</p>
            <p> Delhi 10001</p>
            <p>Email:anmolgupta32068@gmail.com</p>
            <p>Phone:(+91) 63982-05124</p>
        </div>
        </div>
        <p className='text-center text-xs pt-8'>o 2024 Music School, All rights reserved.</p>

    </footer>
  )
}

export default Footer
