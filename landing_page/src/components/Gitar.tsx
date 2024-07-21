"use client";
import musical3 from "../public/musical3.png"

 
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
const Gitar = () => {
  return (
    <div className='flex float-left  items-center justify-center'>
        <div>
         <CardContainer className="inter-var ml-4">
      <CardBody 
      // className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
      >
        <Image
            src="/musical3.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
       
       
       </CardBody>
    </CardContainer> 
        </div>
      <div>
        <h1 className='ml-8 mb-28 text-2xl md:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center flex  mr-4'>Guide to Standard Guitar Tuning and Playing with Fingers</h1>
      </div>
    </div>
  )
}

export default Gitar
