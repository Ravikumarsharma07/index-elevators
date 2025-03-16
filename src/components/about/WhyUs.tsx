import { CheckCircle, Clock, Rocket, Settings, Shield, Users } from 'lucide-react';
import React from 'react'


function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
            <p className="text-secondary/60 font-sans">{description}</p>
          </div>
        </div>
      </div>
    );
}


const WhyUs = () => {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Clock}
            title="Experience & Expertise"
            description="With a legacy dating back to 2015, we've been at the forefront of manufacturing high-quality lifting equipment for diverse industrial needs."
          />
          <FeatureCard
            icon={Shield}
            title="Superior Quality & Innovation"
            description="Our machines are designed for strength, safety, and longevity, adhering to IS: 3938 standards with continuous innovation."
          />
          <FeatureCard
            icon={Settings}
            title="Custom Solutions"
            description="We provide tailor-made lifting solutions, from EOT Cranes to custom-built wire rope hoists for continuous usage."
          />
          <FeatureCard
            icon={CheckCircle}
            title="Safety & Compliance"
            description="Safety is at our core. Our equipment meets rigorous safety regulations, ensuring secure operations for our clients."
          />
          <FeatureCard
            icon={Users}
            title="Dedicated Support"
            description="From consultation to after-sales service, our expert team provides end-to-end assistance for maximum efficiency."
          />
          <FeatureCard
            icon={Rocket}
            title="Innovation Focus"
            description="We continuously innovate to enhance operational efficiency and reliability in all our solutions."
          />
        </div>
      </section>
      
  )
}

export default WhyUs
