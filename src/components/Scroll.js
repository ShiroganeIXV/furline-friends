import React from "react";
const Scroll = (props) => { // this need to return the children
    return (
        // make this div scroll-able
        <div style={{overflowY:'scroll', border:'1px solid white', height:'550px',padding:'10px'}}> 
            {props.children}
        </div>
       
    )
}
export default Scroll;