"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";



const people = [
    {
      id: 1,
      name: "Priyanshu Omer",
      image:
        "/omer.jpg",
    },
    {
      id: 2,
      name: "Omendra Singh",
      image:
        "/omendra.jpg",
    },
    {
      id: 3,
      name: "Priyanshu Mishra",
      image:
        "/mishra.jpg",
    },
    {
      id: 4,
      name: "Divyanshu Raj",
     image:
        "/divyanshu.jpg",
     } ,
    {
      id: 5,
      name: "Anmol Gupta",
      image:
       "/me (1).jpg", },
    
  ];

const People = () => {
  return (
    <div>
<p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Meet our Instructors
      </p>

<div className="flex flex-row items-center justify-center mt-12 mb-12 w-full">
      <AnimatedTooltip items={people} />
    </div>
        
 
    </div>
  )
}

export default People
