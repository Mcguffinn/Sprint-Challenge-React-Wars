import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`

background-color: red;
`;
const Appcontent = props =>{
    console.log(props.birth_year);
    return (
        <div className='star-container' key={props.x}>
            <Wrapper>
                <Card>
                    <CardTitle>
                        <h1>{props.name}</h1>
                    </CardTitle>
                    <p>{props.gender}</p>
                    <p>{props.birth_year}</p>
                </Card>
            </Wrapper>
            <div className="hero">
                
            </div>
        </div>        
    );
}

export default Appcontent;