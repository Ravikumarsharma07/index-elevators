import { 
    Package, 
    Box, 
    Disc, 
    Wind, 
    Move, 
    HardDrive, 
    Settings, 
    Activity, 
    Truck, 
    Sliders, 
    Anchor, 
    AlertCircle 
  } from "lucide-react";
  
  const machines = [
    {
      title: "Safe Working Load",
      description: "0.5 ton to 50.0 ton. Index Elevators Electric Wire Rope Hoists are designed & manufactured as per IS: 3938, ensuring compact and modular design for easy operation & maintenance.",
      icon: <Package size={35} />, 
    },
    {
      title: "Frame",
      description: "All steel fabricated, machined, and bolted type. The gear box is rigidly aligned with the end load plates, ensuring structural integrity and motor support.",
      icon: <Box size={35} />,
    },
    {
      title: "Rope Drum",
      description: "Made of seamless pipe or fabricated from steel plates, grooved to take the full lift without overwinding. The drum shaft revolves in ball bearings for smooth operation.",
      icon: <Disc size={35} />,
    },
    {
      title: "Wire Rope",
      description: "6 × 36 construction special plough hemp core flexible steel wire rope, ensuring a high safety factor of 6 for class II and 7 for class III duty.",
      icon: <Wind size={35} />,
    },
    {
      title: "Rope Guide",
      description: "Equipped with a rope guide and pressure ring to ensure correct rope lay, preventing misalignment and enhancing durability.",
      icon: <Move size={35} />,
    },
    {
      title: "Motor",
      description: "Foot-mounted squirrel cage induction motor designed as per IS: 325, totally enclosed, high starting torque, suitable for frequent start-stop operations.",
      icon: <HardDrive size={35} />,
    },
    {
      title: "Brake",
      description: "AC/Disc spring-loaded brakes mounted on the non-driving end of the motor for heavy-duty operations and easy accessibility.",
      icon: <Settings size={35} />,
    },
    {
      title: "Gears",
      description: "Alloy steel hobbed teeth helical-spur gears with solid pinions, hardened and tempered to minimize wear and extend machine life.",
      icon: <Activity size={35} />,
    },
    {
      title: "Trolley",
      description: "Cross Travel Trolley designed for standard rolled steel or box girder, bolted rigidly to the hoist frame, with ball-bearing-mounted EN 9 steel axles.",
      icon: <Truck size={35} />,
    },
    {
      title: "Controls",
      description: "Heavy-duty control panel with air brake contactors, transformer, and MCB in a dustproof metal cabinet. Pendant push button station operates at 24/110 volts for safety.",
      icon: <Sliders size={35} />,
    },
    {
      title: "Bottom Block",
      description: "Drop forged steel hook assembly mounted on thrust ball bearings with a large diameter sheave and steel hook plates for secure load handling.",
      icon: <Anchor size={35} />,
    },
    {
      title: "Limit Switch",
      description: "Prevents overwinding or over-lowering of wire rope, ensuring maximum safety by restricting the highest and lowest load positions.",
      icon: <AlertCircle size={35} />,
    },
  ];
  
  export default machines;
  