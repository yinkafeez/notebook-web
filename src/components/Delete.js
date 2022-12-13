import{useState} from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { BsThreeDots} from "react-icons/bs"
import {RiDeleteBinFill} from "react-icons/ri"


function Delete({todos,setTodos}){


    let color= ["FD99FF","FF9E9E","91F48F","FFF599","6E74A3","9EFFFF"]
    let randomColor = color[Math.floor(Math.random() * color.length)]
    const style={
        backgroundColor: '#' + randomColor
    }

    const bgColor = true


    //menu open state handler
    const[isOpen, setisOpen] = useState(false)

    // menu open function
    function handleClick(i){
        //todos[i].pinned = 4   // display menu of each note clicked
        setisOpen(true)
       
        
    }

    // delete note function
    function delTodo(id) {
        const removeItem = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(removeItem);
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        setisOpen(false)
      }


    return(
        <Container fluid>
            <div className="delete-container">
                <Row>
                    <Col xs={3}> <p className="delete-header"> DELETED NOTES </p> </Col>
                    <Col xs={9}> <hr /> </Col>
                </Row>

                <div>
                    {todos.map((todo, i) =>{
                        if(todo.pinned == 4){
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
                                                onClick={() =>  handleClick(i)  }
                                            />
                                        </div>

                                        <h3 className="other-note-title"> {todo.title} </h3>
                                        <p className="other-note-content"> {todo.content} </p>
                                    </div>
 
                                    <>
                                        {isOpen?(
                                            <div className="delete-list">
                                                <p 
                                                    className="delete-item"
                                                    onClick={() => delTodo(todo.id) }
                                                > 
                                                <RiDeleteBinFill className="me-4" /> Delete
                                                </p>
                                            </div>
                                        ):(
                                        null
                                        )}
                                    </>
                                    
                                </>
                            )
                        }
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Delete