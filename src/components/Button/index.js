import styled from 'styled-components';


const Button = styled.button`
    padding: ${props => props.theme.spacing_sm};
    background-color: ${props => props.theme.button_bg};
    color: ${props => props.theme.button_color};
    border-radius: ${props => props.theme.button_rounding};
    margin: ${props => props.theme.spacing_sm};
    border: 0;
    display: flex;
    font-size: ${props => props.theme.font_md};
    box-shadow: ${props => props.theme.box_shadow};
    font-family: ${props => props.theme.typeface_main};

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.button_bg_hover};
        color: ${props => props.theme.button_color_hover};
    }

    > svg {
        margin-left: 0.5rem;
    }
`;


export default Button;