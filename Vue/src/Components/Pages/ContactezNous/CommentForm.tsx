import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CommentForm() {
    const notify = () => toast.success("Votre message a été bien envoyé ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      });

    return (
      <form className="flex flex-col gap-[8vh]" method='POST'>
          <div className="flex flex-col gap-[2vh]">
            <input type="text" className="bg-white max-w-[40vw] h-[10vh] font-bold flex items-center text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]" name="Name" id="" placeholder="Name" />
            <input type="e-mail" className="bg-white max-w-[40vw] h-[10vh] font-bold flex items-center text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]" name="E-mail" id="" placeholder="E-mail" />
            <textarea className="bg-white max-w-[40vw] pb-[20vh] font-bold flex pt-[5%] text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]" name="Message" id="" placeholder="Message" />
          </div>
          <button className="bg-Red max-w-[40vw] h-[10vh] font-bold px-[15vw] text-[1.5rem] text-white rounded-[4px]" type="button" onClick={notify}>Submit</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </form>
    );
  };
  
  export default CommentForm;