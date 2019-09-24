import React from 'react';
import styled from 'styled-components';





const ImgTag = styled.img`
    width: 80%;
    margin: ${props => props.theme.spacing_lg} auto;
    box-shadow: ${props => props.theme.box_shadow};
    @media(min-width: 768px) {
        width: 48%;
        margin-bottom: ${props => props.theme.spacing_lg};
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
    }
`;

const Image = (props)=>(
    <ImgTag src={props.source} alt={props.title} />
);


export default Image;