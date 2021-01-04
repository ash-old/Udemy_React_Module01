import React from 'react';
import './userOutput.css';

const userOutput = (props) => {

    return(
        <div className="paragraph">
            <p>This is one Paragraph written by {props.user}.</p> 
            <p>This is another Paragraph!</p> 
        </div>
    
    )


}


export default userOutput;