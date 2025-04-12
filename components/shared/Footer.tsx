import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'

function Footer() {
  return (
    

<footer className="bg-primary text-white rounded-lg shadow-sm dark:bg-primary m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <div className='w-44'>
            <Image src={logo} className="object-contain" alt="Flowbite Logo" />
            </div>
                
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-md text-white sm:text-center dark:text-white">© 2025 <a href="/home" className="hover:underline">Otumfuo Foundation</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer