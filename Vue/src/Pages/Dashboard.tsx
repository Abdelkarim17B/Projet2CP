import Box from '../Components/Layout/Box';

function Dashboard() {
    return (
      <div className='h-[36.5rem] w-[100vw] flex flex-col justify-center items-center  pt-[45vh] gap-[4.5rem]'>
         <div className='flex flex-row gap-[2.75rem]'>
            <Box text1={'Banques'} text2={'20'}></Box>
            <Box text1={'Admins'} text2={'6'}></Box>
         </div>
         <div className='flex flex-row gap-[2.75rem]'>
         <Box text1={'Users'} text2={'2000'}></Box>
         <Box text1={'Annonces'} text2={'34'}></Box>
         </div>
         </div>
      
    )
  }
  
  export default Dashboard