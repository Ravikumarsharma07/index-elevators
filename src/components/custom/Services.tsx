import { Clock, PenToolIcon, Shield } from 'lucide-react'
import React from 'react'

const services = [
    {
        icon:<Shield className='bg-primary h-14 w-14 p-3 rounded-full mb-2'/>,
        title:"Certified Quality",
        description:"All equipments meet international safety standards"
    },
    {
        icon:<Clock className='bg-primary h-14 w-14 p-3 rounded-full mb-2'/>,
        title:"24/7 Support",
        description:"Round-the-clock technical assistance"
    },
    {
        icon:<PenToolIcon className='bg-primary h-14 w-14 p-3 rounded-full mb-2'/>,
        title:"Maintainance",
        description:"Regular services and maintainance program"
    }
] 

const Services = () => {
  return (
    <section className='bg-secondary padding-x py-20 flex justify-center lg:justify-between gap-10 max-lg:gap-16 flex-wrap'>
        {services.map((service) => (
            <div key={service.title} className='flex-center-col gap-2 text-white font-sans text-center'>
                {service.icon}
                <h3 className='text-xl md:text-2xl'>{service.title}</h3>
                <p className='text-[15px] md:text-[17px] font-serif text-white/80'>{service.description}</p>
            </div>
        ))}
    </section>
  )
}

export default Services
