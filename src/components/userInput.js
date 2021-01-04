import React, { Component } from 'react';

const userInput = props => {

     const style = {
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        textAlign: 'center'
     };

      return(
        <div>
            <input style={style} type="text" value={props.user} onChange={props.change}/>
        </div>   
     )  
    
}


export default userInput;