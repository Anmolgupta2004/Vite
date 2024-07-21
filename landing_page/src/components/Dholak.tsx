"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

const Dholak = () => {
  return (
    


<div className="flex justify-center text-center items-center flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-2xl md:text-5xl max-w-3xl mx-auto mb-10">
        Visit to Our Website and learn to play the 
        <LinkPreview
          url="https://www.euroschoolindia.com/wp-content/uploads/2023/10/different-types-of-indian-musical-instruments-jpg.webp"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >{" "}
          Musical Instrument
        </LinkPreview>{" "}
        Like{" "}
        <LinkPreview url="https://www.euroschoolindia.com/wp-content/uploads/2023/10/different-types-of-indian-musical-instruments-jpg.webp" 
         className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
         Tabla
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://t3.ftcdn.net/jpg/05/42/87/34/360_F_542873436_R2EcIWPnCW2QrdQtuRhPn2ttn2to9b6N.jpg"
        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
         Sitaar
        </LinkPreview>{" "}
        
      </p>
    
    </div>
    
  )
}

export default Dholak
