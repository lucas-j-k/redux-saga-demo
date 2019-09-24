import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    border-radius: 50%;
    margin: ${props => props.theme.spacing_md} auto;
    display: block;
`;

const Name = styled.h2`
    font-size: ${props => props.theme.font_lg};
    letter-spacing: ${props => props.theme.letter_spacing};
    margin: ${props => props.theme.spacing_sm} auto;
    font-weight: normal;
    color: ${props => props.theme.default_text_color};
    text-align: center;
    text-transform: uppercase;
`;

const UserWrapper = styled.div`
    padding: ${props => props.theme.spacing_sm};
    border-bottom: 1px solid ${props => props.theme.default_text_color};
    overflow: auto;
`;

const UserCard = (props)=> (
    <UserWrapper>
        <Avatar src={props.user.avatar} />
        <Name>{props.user.firstName} {props.user.lastName}</Name>
    </UserWrapper>
)

export default UserCard;