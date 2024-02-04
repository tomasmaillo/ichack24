import { useState } from 'react';
import styled from 'styled-components';


const CustomQuestion = styled.div`
    color: #000000;
`;

function Question() {
    return (
        <CustomQuestion>
            <h2>1. What is the quadratic formula?</h2>
        </CustomQuestion>
    )
}

export default Question;