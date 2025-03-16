import { LocateFixed, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const contacts = [
    {
        icon:<Phone className='text-primary h-max w-16 p-3'/>,
        title:"Phone",
        description:<><Link href="tel:+917827881632">+91 7827881632</Link><Link href="tel:+918527988313">/ +91 8527988313</Link></>,
    },
    {
        icon:<Mail className='text-primary h-max w-16 p-3'/>,
        title:"Email",
        description:<Link href="mailto:indexelevators1313@gmail.com">indexelevators1313@gmail.com</Link>,
    },
    {
        icon:<LocateFixed className='text-primary h-max w-16 p-3'/>,
        title:"Address",
        description:"RZ-Q-93, G/F, KH. No. 34/24, Nihal vihar, Nilothi Extn., New Delhi-110041"
    }
] 

const date = new Date()
const currentYear = date.getFullYear()

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

    <section className='w-full mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-lg:gap-16 flex-wrap'>
        {contacts.map((service) => (
            <div key={service.title} className='flex-center-col gap-1 text-white font-sans text-center'>
                {service.icon}
                <h3 className='text-xl md:text-2xl'>{service.title}</h3>
                <p className='text-[15px] md:text-[16px] text-white/70'>{service.description}</p>
            </div>
        ))}
    </section>
    <p className="text-white/60 font-sans mt-20">
        © {currentYear} Index Elevators. All rights reserved
      </p>

    </section>
  )
}

export default ContactUs
