import React, { useState } from "react";
import {BiCommentDetail} from "react-icons/bi"
import {GoMail} from "react-icons/go"
import {BsFillPersonFill} from "react-icons/bs"
import { IUComment } from "../../../Models/IUComment";


interface CommentFormState{
  commentaire : IUComment
}
interface CommentFormProps{}

const CommentForm: React.FC<CommentFormProps> = ({}) => {

      let [CommentState , setCommentState] = useState<CommentFormState>({
        commentaire : {
          nom : '',
          adresseMail : '',
          commentaires : '',
        }
      })

      let updateInputNameEmail = (event:React.ChangeEvent<HTMLInputElement>):void => {
          setCommentState({
            commentaire : {
              ...CommentState.commentaire ,
              [event.target.name] : event.target.value 
            }
          })
      }
      let updateInputComment = (event:React.ChangeEvent<HTMLTextAreaElement>):void => {
        setCommentState({
          commentaire : {
            ...CommentState.commentaire ,
            [event.target.name] : event.target.value 
          }
        })

      }
      let commentSubmitted = (event:React.ChangeEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(CommentState.commentaire)
      }
    return (
      <React.Fragment>
        {/*<pre>{JSON.stringify(CommentState.commentaire)}</pre>*/}
          <div className="flex flex-col items-center justify-center">
          <div className="rounded-lg bg-gray-200 w-[781px] h-[80px] mt-28 flex items-center"> {/* the name Field */}
              <div className="pl-4">
                  <BsFillPersonFill size='47px'  />
              </div>
              <div className="pl-20 absolute">
                  <input type="name" placeholder="Nom" required={true} name="nom" value={CommentState.commentaire.nom} onChange={updateInputNameEmail} className="bg-gray-200 w-[400px] outline-none"></input>
              </div>
          </div>
          <div className="rounded-lg bg-gray-200 w-[781px] h-[80px] mt-16 flex items-center "> {/* the name Field */}
              <div className="pl-4">
                  <GoMail size='47px' />
              </div>
              <div className="pl-20 absolute">
                  <input type="email" placeholder="Email" required={true} name="adresseMail" value={CommentState.commentaire.adresseMail} onChange={updateInputNameEmail} className="bg-gray-200 w-[600px] outline-none"></input>
              </div>
          </div>
          <div className="rounded-lg bg-gray-200 w-[781px] h-[356px] mt-16"> {/* the name Field */}
            <div className="pl-4 pt-5">
              <BiCommentDetail size='47px' />
              <div>
              <textarea id="multiLineInput" className="bg-gray-200 text-3xl max-h-[8em] resize-none pl-5 outline-none" rows="7" cols="50" placeholder="Vos commentaires ..." required={true} name="commentaires" value={CommentState.commentaire.commentaires} onChange={updateInputComment} />
              </div>
            </div>  
          </div>
          <div className="pt-16 pb-32">
            <button className="border-2  rounded-full px-24 py-4 bg-red-500 text-white text-4xl hover:bg-white hover:border-black hover:text-black" onClick={commentSubmitted} >Submit</button>
          </div>
        </div>
        
      </React.Fragment>
    );
  };
  
  export default CommentForm;