import {useState} from "react"

function Sample() {
    // const[item,setItem] = useState("")
    const[open,setOpen] = useState(false)
    
    const [samples,setSapmles] = useState([
        {
            id : 1,
            pinned:0,
            btn:  "Enter",
        },
        {
            id : 2,
            pinned:0,
            btn: "submit" ,
        },
        {
            id : 3,
            pinned:0,
            btn:  "click" ,
        },
    ]
    )

    function onClick(id) {
        samples[id].pinned = 4;
        // console.log("clicked",id)
        // return
        setOpen(!open)
        

    }

    return(
        <div style={{textAlign: "center"}}>
            <br /> <br />

           {samples.map(sample => {
                return(
                    <>
                        <div key={sample.id}>
                            <button className=" mt-4 " onClick={() => onClick(sample.id)} > {sample.btn} </button>
                        </div> 
                        {sample.pinned == 4 ? open? "Hello, How are you" : null : null}
                        
                    </>
                )
           })}
            <br /> <br />

            {/*  */}
        </div>
    )
}

export default Sample