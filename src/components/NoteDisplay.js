import React, {useState,useEffect}  from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import AllNote from "./AllNote"
import PinnedNote from "./PinnedNote"
import {AiOutlineSearch} from "react-icons/ai"


function NoteDisplay({todos,pinnedtoggle,setPinnedToggle,otherNotetoggle,setOtherNoteToggle,addTodo}) {
    const[display,setDisplay] = useState(false)

    // search input state
    const[searchTerm, setSearchTerm] = useState('')


    return(
        <Container>

            {/* if(sidebarStatus == 0) {
                return( */}
                    <div>
                        <Row>
                            <Col xs={4}> <p className="note-display-header"> All Notes </p> </Col>
                            <Col xs={2}></Col>
                            <Col xs={6} className="note-display-input-col">
                                <textarea
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="note-display-input"
                                />

                                <AiOutlineSearch  
                                    className="note-display-icon" 
                                    onClick={() => addTodo(searchTerm)} 
                                />
                            </Col>
                        </Row>
                        <PinnedNote
                                todos={todos}
                                display={display}
                                pinnedtoggle={pinnedtoggle}
                                setPinnedToggle={setPinnedToggle}
                            
                        />

                            <AllNote 
                                todos={todos}
                                otherNotetoggle={otherNotetoggle}
                                setOtherNoteToggle={setOtherNoteToggle}
                        />
                    </div>
                {/* )
            } */}
                
        </Container>
    )
}

export default NoteDisplay