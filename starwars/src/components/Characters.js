import React from "react";
import { Card, CardTitle } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
    text-decoration: none;

`;

const Appcontent = props =>{
  
    return (
        <div className='star-container'>
            <Wrapper>
                <Card>
                    <CardTitle>
                        <h1>{props.name}</h1>
                    </CardTitle>
                    <p>{props.gender}</p>
                    <p>{props.birth_year}</p>
                </Card>
            </Wrapper>
        </div>
    );
}

export default Appcontent;