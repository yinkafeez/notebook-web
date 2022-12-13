import{useState} from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { BsThreeDots} from "react-icons/bs"
import {RiDeleteBinFill} from "react-icons/ri"


function Favorite({todos}){


    let color= ["FD99FF","FF9E9E","91F48F","FFF599","6E74A3","9EFFFF"]
    let randomColor = color[Math.floor(Math.random() * color.length)]
    const style={
        backgroundColor: '#' + randomColor
    }

    const bgColor = true

    //menu open state handler
    const[isOpen, setisOpen] = useState(false)

    // menu open function
    function handleClick(id){
        setisOpen(!isOpen)
    }

    // deleting clicked notes from favorite page and adding it to delete page
    function delTodo(i){
        todos[i].pinned = 3;  // pinned = 3 when user wantr to delete
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setisOpen(false)
    }


    return(
        <Container fluid>
            <div className="favorite-container">
                <Row>
                    <Col xs={5} md={2}> <p className="favorite-header"> FAVORITES </p> </Col>
                    <Col xs={7} md={10}> <hr /> </Col>
                </Row>
                <div>
                    {todos.map((todo, i) =>{
                        if(todo.pinned == 2){
                            return(
                                <>
                                    <div 
                                        key={i} 
                                        className="other-note-list text-black"
                                        style={bgColor? style : null }
                                    >
                                        <div className="note-icon-div">
                                            <BsThreeDots 
                                                className="note-icon"
                                                style={{width:"40px",height:"27px"}}
                                                onClick={() => handleClick(todo.id) }
                                            />
                                        </div>

                                        <h3 className="other-note-title"> {todo.title} </h3>
                                        <p className="other-note-content"> {todo.content} </p>
                                    </div>

                                    {isOpen?(
                                        <div className="delete-list">
                                            <p 
                                                className="delete-item"
                                                onClick={() => delTodo(i) }
                                            > 
                                            <RiDeleteBinFill className="me-4" /> Delete
                                            </p>
                                        </div>
                                    ):(
                                    null
                                    )}
                                </>
                            )
                        } 
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Favorite