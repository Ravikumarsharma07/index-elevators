"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";

const WireHoistForm = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [form, setForm] = useState({
          liftingCapacity: "",
          ropeHeight: "",
          endCarriage: false,
      });
  
      const router = useRouter()
  
      const handleSubmit = ()=>{
        if(!form.liftingCapacity || !form.ropeHeight) return;
        router.push(`https://api.whatsapp.com/send/?phone=%2B917827881632&text=Hi+I+am+interested+in+ordering+EOT+crane+${form.endCarriage ? "with" : "without"}+end+carriage+of+lifting+capacity+${form.liftingCapacity}-tons+and+rope+height+${form.ropeHeight}-metres+from+Index+Elevators,+please+send+me+the+latest+price.&type=phone_number&app_absent=0`)
      }
    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[400px] w-[90%] h-max p-0 max-sm:mb-20 m-0 border-none bg-white font-sans rounded-xl">
          <DialogHeader className="p-4 px-6 h-max">
            <DialogTitle className="text-2xl sm:text-3xl text-center font-bold text-primary ">
              requirements for Electrical wire hoist
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <p className="px-6 text-xl font-semibold">Lifting capacity</p>
            <div className="px-6 flex-center">
              <input
                onChange={(e) => setForm({...form, liftingCapacity: e.target.value})}
                value={form.liftingCapacity}
                type="number"
                placeholder="Enter lifting capacity"
                className="h-10 w-full rounded-l-md p-4 border-[2px] border-primary outline-none focus:border-secondary"
              />
              <button className="bg-primary w-16 text-white px-4 py-2 rounded-r-md flex-center">
                Tons
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="px-6 text-xl font-semibold">Rope height</p>
            <div className="px-6 flex-center">
              <input
                onChange={(e) => setForm({...form, ropeHeight: e.target.value})}
                value={form.ropeHeight}
                type="number"
                placeholder="Enter rope height"
                className="h-10 w-full rounded-l-md p-4 border-[2px] border-primary outline-none focus:border-secondary"
              />
              <button className="bg-primary w-16 text-white px-4 py-2 rounded-r-md flex-center">
                Metres 
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="px-6 flex-start">
              <input
                onChange={(e) => setForm({...form, endCarriage: e.target.checked})}
                checked={form.endCarriage}
                id="end-carraige"
                type="checkbox"
                className="h-10 w-[25px] rounded-l-md p-4 border-[2px] border-primary outline-none focus:border-secondary"
              />
              <label htmlFor="end-carraige" className="text-lg cursor-pointer px-2 font-semibold">With End carraige</label>
            </div>
          </div>
          <button onClick={handleSubmit} className={`my-10 ${!form.liftingCapacity || !form.ropeHeight ? "cursor-not-allowed opacity-70" : ""} h-10 bg-primary font-semibold place-self-center text-white px-4 py-2 rounded-md flex-center`}>Get latest price</button>
        </DialogContent>
      </Dialog>
  );
};

export default WireHoistForm;
