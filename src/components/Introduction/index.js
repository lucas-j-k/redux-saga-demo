import React from 'react';
import styled from 'styled-components';

import Ul from '../Ul';
import Li from '../Li';

const Introduction = props => (
    <div className={props.className}>
        <p>
            This is a demo app using:
        </p>
        <Ul bulleted>
            <Li>React</Li>
            <Li>Redux</Li>
            <Li>Styled Components</Li>
            <Li>Redux Saga</Li>
        </Ul>
        <p>Click on the Button at the top to load in a random user and image gallery.</p>
        <p>The user and image data are fetched from two separate APIs - the requests are managed with Redux Sagas</p>
    </div>
);

const StyledIntroduction = styled(Introduction)`
    width: 60%;
    margin: ${props => props.theme.spacing_xl} auto;
    color: ${props => props.theme.default_text_color};
    line-height: 1.25;
    font-size: ${props => props.theme.font_lg};
`;

export default StyledIntroduction;
