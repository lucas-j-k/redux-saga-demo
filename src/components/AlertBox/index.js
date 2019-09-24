import styled from 'styled-components';

const AlertBox = styled.div`
    color: ${props => props.theme.default_text_color};
    text-align: center;
    font-size: ${props => props.theme.font_xl};
    letter-spacing: ${props => props.theme.letter_spacing};
    width: 50%;
    margin: ${props => props.theme.spacing_xl} auto;
    overflow: auto;
    animation: ${ props => props.blink ? "blink 0.8s alternate infinite" : ""};
    
    @keyframes blink {
        0% {
            opacity: 1
        }
        100% {
            opacity: 0.2
        }
    }
`;

export default AlertBox;