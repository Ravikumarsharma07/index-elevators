"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";

const PowerWinchReqForm = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [form, setForm] = useState({
        liftingCapacity: "",
        ropelength: ""
    });

    const router = useRouter()

    const handleSubmit = ()=>{
      if(!form.liftingCapacity || !form.ropelength) return;
      router.push(`https://api.whatsapp.com/send/?phone=%2B917827881632&text=Hi+I+am+interested+in+ordering+Power+winch+machine+of+lifting+capacity+${form.liftingCapacity}-tons+and+rope+length+${form.ropelength}-metres+from+Index+Elevators,+please+send+me+the+latest+price.&type=phone_number&app_absent=0`)
    }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-[400px] w-[90%] h-max max-sm:mb-20 p-0 m-0 border-none bg-white font-sans rounded-xl">
        <DialogHeader className="p-4 px-6 h-max">
          <DialogTitle className="text-2xl sm:text-3xl text-center font-bold text-primary ">
            requirements for power winch
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
          <p className="px-6 text-xl font-semibold">Rope length</p>
          <div className="px-6 flex-center">
            <input
              onChange={(e) => setForm({...form, ropelength: e.target.value})}
              value={form.ropelength}
              type="number"
              placeholder="Enter rope length"
              className="h-10 w-full rounded-l-md p-4 border-[2px] border-primary outline-none focus:border-secondary"
            />
            <button className="bg-primary w-16 text-white px-4 py-2 rounded-r-md flex-center">
              Metres 
            </button>
          </div>
        </div>
        
        <button onClick={handleSubmit} className={`my-10 ${!form.liftingCapacity || !form.ropelength ? "cursor-not-allowed opacity-70" : ""} h-10 bg-primary font-semibold place-self-center text-white px-4 py-2 rounded-md flex-center`}>Get latest price</button>
      </DialogContent>
    </Dialog>
  );
};

export default PowerWinchReqForm
