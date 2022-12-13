import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import NoteDisplay from  "./NoteDisplay"
import { useState } from "react"
import {BsThreeDots} from "react-icons/bs"
import {AiFillSave} from "react-icons/ai"
import {BsPinAngleFill} from "react-icons/bs"
import AllNote from "./AllNote"
import PinnedNote from "./PinnedNote"



function AddNotePage({open,setOpen,addTodo}) {


     // input state
     const [titleInput,setTitleInput] = useState("") 
     const [contentInput,setContentInput] = useState("") 
    
 
     // titleInput onChange Function 
     function titleInputOnChange(e){
         setTitleInput(e.target.value)
     }
     // contentInput onChange Function 
     function contentInputOnChange(e){
         setContentInput(e.target.value)
     }



    // open submit list state
     const[isOpen,setIsOpen] = useState(false)

    function handleSaveClick(){
        if(titleInput.trim() && contentInput.trim() ){
            setOpen(false)
             // adding todo
            addTodo(titleInput,contentInput, 0)
            
        }
    
        else{
            alert("Please Type Something")
            setTitleInput("")
            setContentInput("")
        }
        
        setTitleInput("")
        setContentInput("")
    }

    function handlePinClick(){
        if(titleInput.trim() && contentInput.trim()){
            setOpen(false)
             // adding todo
            addTodo(titleInput,contentInput, 1)
            
        }
    
        else{
            alert("Please Type Something")
            setTitleInput("")
            setContentInput("")
        }
        
        setTitleInput("")
        setContentInput("")
    }


    


    return(
        <Container fluid>
            {open? (
                <>
                    <div>
                        <h3  className="add-note-page-title"> ADD NEW NOTE </h3>
                        <textarea
                            type="text"
                            placeholder="Enter note title"
                            className="add-note-page-title-input"
                            value={titleInput}
                            onChange={titleInputOnChange}
                        /><br /><br />
                        <textarea
                            placeholder="Enter note content"
                            className="add-note-page-content-input"
                            value={contentInput}
                            onChange={contentInputOnChange}
                        />
                        <BsThreeDots 
                            className="add-note-page-icon"
                            onClick={() => setIsOpen(!isOpen) }
                        />
                    </div>
                    {isOpen?(
                        <div className="add-note-page-submit-list">
                            <p 
                                className="add-note-page-submit-item"
                                onClick={handleSaveClick }
                            > 
                               <AiFillSave className="me-4" /> Save 
                            </p>
                            <p 
                                className="add-note-page-submit-item"
                                onClick={handlePinClick }
                            > 
                               <BsPinAngleFill className="me-4" /> Pin Note 
                            </p>
                        </div>
                    ):
                    null
                    }<br /><br />

                        <div className="add-note-page-bottom-input"></div> 
                    
                </>
                
            ):(
                <NoteDisplay titleInput={titleInput} contentInput={contentInput} />
            )}
            
        </Container>
    )
}

export default AddNotePage