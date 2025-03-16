import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className='md:col-span-5 lg:col-span-1'>
          <Image
            width={500}
            height={500}
            src="/workshop-ai.webp"
            alt="Industrial Crane"
            className="rounded-2xl shadow-2xl w-full max-h-[400px]"
          />
        </div>
        <div className='md:col-span-7 lg:col-span-1 '>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="space-y-6 text-gray-600 font-sans">
            <p>
              Index Elevators was founded by Gurvinder Singh with a vision to revolutionize the lifting and hoisting industry. 
              Since 2015, we have been a leading manufacturer, delivering robust, high-performance lifting solutions tailored to 
              diverse industrial applications.
            </p>
            <p>
              With a state-of-the-art workshop and a highly skilled team, we specialize in designing and manufacturing heavy-duty 
              fabricated structures, precision-engineered gearboxes, and high-capacity electric wire rope hoists.
            </p>
            <p>
              From 0.5-ton to 50.0-ton lifting capacities, our machines are built to last, perform, and ensure maximum safety. 
              Whether you need a standard hoist or a custom-built solution, Index Elevators is your reliable partner in lifting excellence.
            </p>
            <div className="pt-4">
                <Link href="#contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us Today
              </button>
                </Link>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default WhoWeAre
