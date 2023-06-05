import { useLoaderData } from 'react-router';
import Box from '../../Components/Pages/Admin/Dashboard/Box';
import {useState , useEffect} from "react"
import { AdminStat } from '../../Model/AdminStat';



function Dashboard() {
  const [Stat , setStats] = useState<AdminStat>();
  useEffect(() => {
    const statFetching = async () => {
      const data = await (
        await fetch('https://projet2-cp-i8rn.vercel.app/admin/stat')
      ).json();
        setStats(data);
    };
    statFetching();
  }, []);
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='flex flex-col gap-[4vw]'>
            <div className='flex gap-[4vw]'>
                <Box text1='Banques' text2={Stat?.bankNumber ? Stat.bankNumber : ""} />
                <Box text1='Announces' text2={Stat?.annonceNumber ? Stat.annonceNumber : ""} />
            </div>
            <div className='flex gap-[4vw]'>
                <Box text1='Admins' text2={Stat?.adminNumber ? Stat.adminNumber : ""} />
                <Box text1='Comparaisons' text2="10K" />
            </div>
        </div>
      </div>
    )
}
  export default Dashboard