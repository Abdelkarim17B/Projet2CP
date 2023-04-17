import { ButtonToolbar } from 'react-bootstrap';
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
      <div className="flex flex-col gap-[8vh]">
          <div className="flex flex-col gap-[2vh]">
            <div className="bg-white max-w-[40vw] h-[10vh] font-bold flex items-center text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]">Name</div>
            <div className="bg-white max-w-[40vw] h-[10vh] font-bold flex items-center text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]">E-Mail</div>
            <div className="bg-white max-w-[40vw] h-[32vh] font-bold flex pt-[5%] text-[1.3rem] rounded-[4px] text-Blue66 font-light pl-[5%]">Message</div>
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
      </div>
    );
  };
  
  export default CommentForm;