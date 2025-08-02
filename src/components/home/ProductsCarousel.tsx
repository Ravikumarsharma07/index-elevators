import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Category } from '@/lib/types'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import ImageCarousel from './ImageCarousel'
type propsTypes = {
    isDialogOpen:boolean;
    setIsDialogOpen:React.Dispatch<React.SetStateAction<boolean>>;
    category:Category
}

const ProductsCarousel = ({category, isDialogOpen, setIsDialogOpen} : propsTypes) => {
      const [isFormOpen, setIsFormOpen] = useState(false);
    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-6xl w-[90%] max-h[90%] p-0 m-0 bg-white border-none font-sans rounded-xl">
          <DialogHeader className="p-4 px-6">
            <DialogTitle className="text-xl sm:text-2xl text-start font-bold text-secondary border-b border-gray-200">
              {category.name}
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto flex-1 px-5 pb-3">
            <div className="space-y-8">
              {category.products.map((product, index) => {
                return (
                  <div
                  key={index}
                  className="bg-gray-100 border border-gray-200 rounded-2xl p-6 group flex max-md:flex-col gap-6"
                >
               <ImageCarousel product={product} />
                  <div className="flex-1 space-y-6 ">
                    <div className="flex-between">
                      <div>
                        <h3 className="text-xl font-bold font-serif text-gray-900">
                          {" "}
                          {product.name}
                        </h3>
                        <p className="text-primary bg-orange-300/40 w-max px-2 rounded-xl font-semibold mt-1">
                          {product.liftingCapacity}
                        </p>
                      </div>
                      {category.form && (
                        <category.form
                          isDialogOpen={isFormOpen}
                          setIsDialogOpen={setIsFormOpen}
                        />
                      )}
                      {category.form ? (
                        <button
                          onClick={() => setIsFormOpen(true)}
                          className="bg-orange-500 group hover:bg-orange-600 flex-between text-white text-nowrap md:font-semibold py-2 px-1 md:px-3 max-md:text-[14px] rounded-xl"
                        >
                          Get Price{" "}
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                      ) : (
                        <Link
                          target="_blank"
                          href={`https://api.whatsapp.com/send/?phone=%2B917827881632&text=Hi+I+am+interested+in+ordering+${product.name}+from+Index+Elevators,+please+send+me+the+latest+price.&type=phone_number&app_absent=0`}
                        >
                          <button className="bg-orange-500 group hover:bg-orange-600 flex-between text-white text-nowrap md:font-semibold py-2 px-1 md:px-3 max-md:text-[14px] rounded-xl">
                            Get Price{" "}
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </Link>
                      )}
                    </div>

                    <p className="text-gray-600 bg-white border-gray-200 border p-3 rounded-xl">{product.description}</p>

                    <div className='bg-white border-gray-200 border p-3 rounded-xl'>
                      <h4 className="font-semibold text-gray-900 mb-4 border-l-2 border-orange-500 px-1">
                        Specifications:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
                        {product.specifications.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2 bg-gray-100 p-2 py-3 rounded-xl">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span className="text-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </DialogContent>
      </Dialog>
  )
}

export default ProductsCarousel
