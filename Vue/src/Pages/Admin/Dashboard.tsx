import Box from '../../Components/Pages/Admin/Dashboard/Box';

function Dashboard() {
    
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='flex flex-col gap-[4vw]'>
            <div className='flex gap-[4vw]'>
                <Box text1='banque' text2='20' />
                <Box text1='banque' text2='20' />
            </div>
            <div className='flex gap-[4vw]'>
                <Box text1='banque' text2='20' />
                <Box text1='banque' text2='20' />
            </div>
        </div>
        
      </div>
    )
  }
  
  export default Dashboard