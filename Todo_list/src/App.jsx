import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
 import { IoSearchSharp } from "react-icons/io5";
 import { FiPlusCircle } from "react-icons/fi";
 import {collection, getDocs} from 'firebase/firestore'


function App() {
  

  const [contant, setContant]= useState([]);
  useEffect(()=>{
    const getContacts= async ()=>{
      try {
        const contactsRef= collection(db,"contacts");
        const contactsSnapshot= await  getDocs(contactsRef);
        console.log(contactsSnapshot);
      } catch (error) {
        
      }
    }
  })

  return (
    <>
    <div className='max-w-[370px] px-4'>
      <Navbar/>
      <div className='flex gap-2 '>
      <div className='flex relative flex-grow items-center'>
      <IoSearchSharp className='text-white text-3xl absolute ml-1' /> 

        <input type='text'
         className='border flex-grow h-10 bg-transparent border-white text-white pl-10 rounded-md '/>
      </div>
      <FiPlusCircle className='text-white text-4xl cursor-pointer'/>
      </div>


     
     
      </div>
    </>
  )
}

export default App
