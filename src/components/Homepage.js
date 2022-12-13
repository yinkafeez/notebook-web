import React, {useState,useEffect}  from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { v4 as uuidv4 } from "uuid";
import SidebarPage from "./SidebarPage"
import NoteDisplay from  "./NoteDisplay"
import AddNotePage from "./AddNotePage"
import Favorite from "./Favorite"
import Delete from "./Delete"
import Topbar from "./Topbar"
import AddNoteTopbar from "./AddNoteTopbar"
import FavoriteTopbar from "./FavoriteTopbar"
import DeleteTopbar from "./DeleteTopbar"



function Homepage() {

    const [todos,setTodos] = useState(getInitialTodos());

 //storing of todo item in the local storage 
 useEffect(() =>{
    // console.log("test run")
      const temp = JSON.stringify(todos)
      localStorage.setItem("todos", temp)
  },[todos])

  // getting stored items from the local storage when the website onMount(reload)
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    // console.log(savedTodos)
    return savedTodos || []
  } 


  //adding of title in the user input to the todo item on pressing the submit button 
    function addTodo(title,content,pinned) {
        const newTodo = {
        //using random id from    
        id: Math.random(), 
        title: title,  
        content: content,
        pinned: pinned,
        };
        setTodos([
            ...todos, newTodo
            ]);
            // console.log(newTodo)
            //return false
    };  


    //   pinned note show menu state
    const[pinnedtoggle,setPinnedToggle] = useState(false)

      //   all  note show menu state
    const[otherNotetoggle,setOtherNoteToggle] = useState(false)


    // state to display and hide addnote page and note display page
    const[open,setOpen] = useState(false)

    // sidebar on click to show add note page
    function handleClick(e){
        setOpen(true)
    }

    // side bar onclick state to hide other pages and show favorite page
    const[sidebarFavoriteOpen,setSidebarFavoriteOpen] = useState(false)

    // side bar onclick state to hide other pages and show delete page
    const[sidebarDeleteOpen,setSidebarDeleteOpen] = useState(false)



    return(
        <Container fluid>
            {sidebarDeleteOpen?(
                <Row className="top-nav-container">
                    <DeleteTopbar />
                </Row>
            ):(
                <>
                    {sidebarFavoriteOpen?(
                        <Row className="top-nav-container">
                            <FavoriteTopbar />
                        </Row>
                    ):(
                        <>
                            {open?(
                                <Row className="top-nav-container">
                                    <AddNoteTopbar />
                                </Row>
                            ):(
                                <Row className="top-nav-container">
                                    <Topbar />
                                </Row> 
                            )}
                        </>
                    )}
                </>
            )}
           
            

            <Row>

                <Col xs={2} className="side-bar-container-col">
                   <SidebarPage 
                        handleClick={handleClick} 
                        setOpen={setOpen}
                        open={open}
                        setSidebarFavoriteOpen={setSidebarFavoriteOpen}
                        setSidebarDeleteOpen={setSidebarDeleteOpen}
                    />
                </Col>
                
                {sidebarDeleteOpen?(
                    <Col xs={10} className="note-display-container">
                        <Delete todos={todos} setTodos={setTodos} />
                    </Col>
                ):(
                    <>
                        {sidebarFavoriteOpen? (
                            <Col xs={10} className="note-display-container">
                                <Favorite todos={todos} />
                            </Col>
                        ):(
                            <>
                                {open? (
                                    <Col xs={10} className="note-display-container">
                                        <AddNotePage 
                                            setOpen={setOpen}
                                            open={open}
                                            addTodo={addTodo}
                                            
                                        />
                                    </Col> 
                                ):(
                                        <Col xs={10} className="note-display-container">
                                            <NoteDisplay
                                                todos={todos}
                                                addTodo={addTodo}
                                                pinnedtoggle={pinnedtoggle}
                                                setPinnedToggle={setPinnedToggle}
                                                otherNotetoggle={otherNotetoggle}
                                                setOtherNoteToggle={setOtherNoteToggle}
                                            />
                                            
                                        </Col>
                                
                                )}
                            </>
                        )}
                    </>
                )}
               
            </Row>
  
        </Container>
    )
}

export default Homepage