import { LocateFixed, Mail, Phone } from 'lucide-react'
import React from 'react'

const contacts = [
    {
        icon:<Phone className='text-primary h-max w-16 p-3'/>,
        title:"Phone",
        description:"+91 8920878094"
    },
    {
        icon:<Mail className='text-primary h-max w-16 p-3'/>,
        title:"Email",
        description:"index-elevators@gmail.com"
    },
    {
        icon:<LocateFixed className='text-primary h-max w-16 p-3'/>,
        title:"Address",
        description:"Tilak nagar, phase-1"
    }
] 

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-secondary border-t border-border px-10 md:px-20 lg:px-28 pt-20 pb-10 flex-center-col gap-4 text-center"
    >
      <h2 className="text-white text-4xl font-sans font-semibold">Contact Us</h2>
      <p className="text-white/70">
        Get in touch with our expert team
      </p>

    <section className='w-full mt-8 md:mt-16 flex justify-center lg:justify-between gap-10 max-lg:gap-16 flex-wrap'>
        {contacts.map((service) => (
            <div key={service.title} className='flex-center-col gap-1 text-white font-sans text-center'>
                {service.icon}
                <h3 className='text-xl md:text-2xl'>{service.title}</h3>
                <p className='text-[15px] md:text-[16px] text-white/70'>{service.description}</p>
            </div>
        ))}
    </section>
    <p className="text-white/60 font-sans mt-20">
        © 2025 Index Elevators. All rights reserved
      </p>

    </section>
  )
}

export default ContactUs
