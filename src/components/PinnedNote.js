import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import {FaNotesMedical} from "react-icons/fa"
import {CgMenuGridR} from "react-icons/cg"
import {MdOutlineFilterList} from "react-icons/md"
import { BsThreeDots} from "react-icons/bs"
import {MdFavorite} from "react-icons/md"
import {RiDeleteBinFill} from "react-icons/ri"


function PinnedNote({display,todos,pinnedtoggle,setPinnedToggle}) {


    function handleClick(id){
        
        setPinnedToggle(!pinnedtoggle)
        
    }
    let color= ["FD99FF","FF9E9E","91F48F"]
    let randomColor = color[Math.floor(Math.random() * color.length)]
    const style={
        backgroundColor: '#' + randomColor
    }

    const bgColor = true
    
    // adding clicked item to favorite
    function addFavorite(i){
        todos[i].pinned = 2;  // pinned = 2 when user wantr to add to favorite
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setPinnedToggle(false)
    }

    // deleting clicked notes from homepage and adding it to delete page
    function delTodo(i){
        todos[i].pinned = 3;  // pinned = 3 when user wantr to delete
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setPinnedToggle(false)
    }

    

    return(
        <div>
            {display? (
                <div className="pt-5">
                    <Row>
                        <Col xs={2}>
                            <p> PINNED NOTE </p>
                        </Col>
                        <Col xs={10} className="text-white">
                            <FaNotesMedical className="ms-2" /> <CgMenuGridR className="ms-2" /> <MdOutlineFilterList  className="ms-2" /><br />
                            <hr />
                        </Col>
                    </Row>

                    <div className="empty">
                        <h2> No Notes to display </h2>    
                    </div> 
                </div>
                ):(
                <div className="pinned-note-div">
                    <Row>
                        <Col xs={2}>
                            <p className="pinned-note-header"> PINNED NOTE </p>
                        </Col>
                        <Col xs={10} className="text-white pinned-note-icon-col">
                            <FaNotesMedical className="ms-2 pinned-note-icon" /> <CgMenuGridR className="ms-2 pinned-note-icon" /> <MdOutlineFilterList  className="ms-2 pinned-note-icon" />
                            <hr />
                        </Col>
                    </Row>
                    {/* <ul> */}
                    {todos.map((todo,i) => {
                        if(todo.pinned == 1){
                            return(
                                <>
                                    <div 
                                        className=" other-note-list text-black" 
                                        key={todo.id}
                                        
                                        style={bgColor? style : null }
                                    >
                                        <div className="note-icon-div">
                                            <BsThreeDots 
                                                className="note-icon"
                                                style={{width:"40px",height:"27px"}}
                                                onClick={() => handleClick(todo.id) }
                                            />
                                        </div>

                                        <h4 className="other-note-title"> {todo.title} </h4>
                                        <p className="other-note-content"> {todo.content} </p>
                                    </div>
                                       
                                    {pinnedtoggle?(
                                        <div className="note-display-submit-list">
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
                                    ):(
                                    null
                                    )}
                                       
                                </>
    
                            )
    
                        }
                    })}
                    {/* </ul> */}
                </div> 
            )}
        </div>
    )
}


export default PinnedNote