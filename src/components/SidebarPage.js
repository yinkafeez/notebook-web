import Container from "react-bootstrap/Container"
import {FaNotesMedical} from "react-icons/fa"
import {TbNotebook} from "react-icons/tb"
import {MdFavorite} from "react-icons/md"
import {RiDeleteBinFill} from "react-icons/ri"
import {RiSettings4Fill} from "react-icons/ri"
import {MdOutlineAdd} from "react-icons/md"




function SidebarPage({handleClick,setOpen,setSidebarFavoriteOpen,setSidebarDeleteOpen}) {


    // side bar note display page function
    function noteDisplayFunction(){
        setOpen(false)
        setSidebarFavoriteOpen(false)
        setSidebarDeleteOpen(false)
    }

    // side bar add note page function
    function addNoteFunction(){
        setOpen(true)
        setSidebarFavoriteOpen(false)
        setSidebarDeleteOpen(false)
    }

    // side bar favorite page function
    function handleFavoriteClick(){
        setSidebarFavoriteOpen(true)
        setSidebarDeleteOpen(false)
    }

    // side bar delete page function
    function handleDeleteClick(){
        setSidebarDeleteOpen(true)
        setSidebarFavoriteOpen(false)
    }
    

    return(
        <Container fluid className="side-bar-container">
                <div>
                   <div className="side-bar-header">
                        <b className="text-danger">.</b><b className="text-warning">.</b><b className="text-success">.</b>
                   </div>
                   <div className="side-bar-list">
                        <p className="side-bar-item text-white" onClick={noteDisplayFunction}>
                           <FaNotesMedical className="side-bar-icon" /> All Note
                        </p>
                        <p className="side-bar-item text-white" onClick={addNoteFunction}>
                            <TbNotebook className="side-bar-icon" /> Notebook
                        </p>
                        <p className="side-bar-item text-white" onClick={handleFavoriteClick}>
                            <MdFavorite className="side-bar-icon" /> Favorite
                        </p>
                        <p className="side-bar-item text-white" onClick={handleDeleteClick}>
                            <RiDeleteBinFill className="side-bar-icon" /> Deleted
                        </p>
                        <p className="side-bar-item text-white">
                            <RiSettings4Fill className="side-bar-icon" /> Settings
                        </p> 
                   </div>

                   <div className="side-bar-add-note-icon-container">
                        <MdOutlineAdd 
                            className="side-bar-add-note-icon text-white"
                            onClick={handleClick}
                        />
                    </div>
                </div>  

                
        </Container>
    )
}

export default SidebarPage