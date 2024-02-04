import { useState } from 'react';
import styled from 'styled-components';


const CustomQuestion = styled.div`
    display: flex;
    color: #000000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`;

function Question() {
    return (
        <CustomQuestion>
            <h2>1. What is the quadratic formula?</h2>
        </CustomQuestion>
    )
}

export default Question;