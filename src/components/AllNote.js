import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { useState,useEffect } from "react"
import {BsThreeDots} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"
import {RiDeleteBinFill} from "react-icons/ri"


function AllNote({todos,otherNotetoggle,setOtherNoteToggle}){
    const[isOpen,setIsOpen] = useState(false)

    // showing options of each note
    function handleClick(i){
        todos[i].pinned = 4;  // pinned = 2 when user want to add to favorite
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setOtherNoteToggle(!otherNotetoggle)
    }

    let color= ["FFF599","6E74A3","9EFFFF"]
    let randomColor = color[Math.floor(Math.random() * color.length)]
    const style={
        backgroundColor: '#' + randomColor
    }

    const bgColor = true

    // adding clicked item to favorite
    function addFavorite(i){
        todos[i].pinned = 2;  // pinned = 2 when user want to add to favorite
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setOtherNoteToggle(false)
    }

    // deleting clicked notes from homepage and adding it to delete page
    function delTodo(i){
        todos[i].pinned = 4;  // pinned = 3 when user what to delete
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setOtherNoteToggle(false)
    }

    return(
        <>
            {isOpen?(
                <div className="All-note-container">
                    <Row>
                        <Col xs={2}> <p className="All-note-header"> OTHER NOTES </p> </Col>
                        <Col xs={10}> <hr /> </Col>
                    </Row>

                    <div className="empty">
                        <h2> No Notes to display </h2>    
                    </div> 
                </div>
            ):(
                <div className="All-note-container">
                    <Row>
                        <Col xs={2}> <p className="All-note-header"> OTHER NOTES </p> </Col>
                        <Col xs={10}> <hr /> </Col>
                    </Row>
                    {todos.map((todo,i) => {
                        
                        if(todo.pinned == 0) {
                            return(
                                <>
                                <div 
                                    className=" other-note-list text-black" 
                                    key={i}
                                    style={bgColor? style : null }
                                >
                                    <div className="note-icon-div">
                                        <BsThreeDots 
                                            className="note-icon"
                                            style={{width:"40px",height:"27px"}}
                                            onClick={() => handleClick(i) }
                                        />
                                    </div>
                                    <h4 className="other-note-title"> {todo.title} </h4>
                                    <p className="other-note-content"> {todo.content} </p>
                                </div>

                                {todo.pinned == 4 ? otherNotetoggle?  
                                <div className="note-display-submit-list" >
                                        <p 
                                            className="note-display-submit-item"
                                            onClick={() => addFavorite(i) }
                                        > 
                                        <MdFavorite className="me-4 note-display-submit-icon" /> Favorite 
                                        </p>
                                        <p 
                                            className="note-display-submit-item"
                                            onClick={() => delTodo(i) }
                                        > 
                                        <RiDeleteBinFill className="me-4 note-display-submit-icon" /> Delete
                                        </p>
                                </div>
                                :"Hello, How are you"  : null } 
                                </>
                            )
                            
                        }

                        
                    })}
                
                </div>
            )}
            
        </>
       
    )
}
export default AllNote