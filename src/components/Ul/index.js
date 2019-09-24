import styled from 'styled-components';

const Ul = styled.ul`
    padding-left: ${props => props.bulleted ? props.theme.spacing_md : "0"};
    list-style-type: ${props => props.bulleted ? "auto": "none"};
`;

export default Ul;


