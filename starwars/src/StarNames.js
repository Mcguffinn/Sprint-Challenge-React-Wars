import React from "react";

const AppContent = props =>{
    console.log(props.name);
    return (
        <div className='star-container' key={props.id}>
            
            <div className="hero">
                <h1>{props.name}</h1>
                <p>{props.gender}</p>
            </div>
        </div>
    );
}

export default AppContent;