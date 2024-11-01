import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color:#fff;
    color: #000;
    font-size: 14px;;

    @media (min-width: 768px){
        color: red;
        font-size: 16px;
    }
    
    @media (min-width: 992px){
        color: blue;
        font-size: 18px;
    }
`;

function MyComponent(){
    return(
        <Wrapper>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
        </Wrapper>
    );
}
export default MyComponent;