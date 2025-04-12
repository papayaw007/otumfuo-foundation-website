import React from 'react'
import Image from 'next/image'
import { paymentData } from '@/lib/data'

 function PaymentBanner() {
  return (
    <div >
    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-5'>Ways to donate</p>
    <p className='mb-8 sm:mb-12 lg:mb-16 text-lg sm:text-xl'>
      I have found that among its other benefits, giving liberates the soul of the giver.
    </p>
    <div className='space-y-8 sm:space-y-10 lg:space-y-12 mb-12 sm:mb-16 lg:mb-20'>
      {paymentData.map((data) => (
        <div key={data.id} className='py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-20 rounded-xl shadow-2xl border border-gray-100'>
          <div>
            <Image
              src={data.image}
              alt="kkk"
              className='py-3 sm:py-4 lg:py-5'
            />
          </div>
          <div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 sm:space-x-0 lg:space-x-20'>
              <li className="mb-2 sm:mb-0">{data.cedititle} <span className='font-bold'>{data.cedi}</span></li>
              <li className="mb-2 sm:mb-0">{data.usdtitle}<span className='font-bold'>{data.dollar}</span></li>
              <li>{data.swifttitle}<span className='font-bold'>{data.swift}</span></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
export default PaymentBanner