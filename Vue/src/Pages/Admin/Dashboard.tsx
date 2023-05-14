import { useLoaderData } from 'react-router';
import Box from '../../Components/Pages/Admin/Dashboard/Box';
import {useState , useEffect} from "react"
import { AdminStat } from '../../Model/AdminStat';



function Dashboard() {

  return (
      <div className='h-screen w-screen flex justify-center items-center'>
     <div className='flex flex-col gap-[4vw]'>
          <div className='flex gap-[4vw]'>
              <Box text1='Admins' text2="1" />
              <Box text1='banques' text2="14" />
          </div>
          <div className='flex gap-[4vw]'>
              <Box text1='Annonces' text2="3" />
              <Box text1='Comparisons' text2="10k" />
          </div>
      </div>
    </div>
    )
}
  export default Dashboard