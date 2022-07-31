import styled from "styled-components";


export const Tr = styled.tr``;

export const Td = styled.td`
    padding-top: 10px;
    text-align: ${props => props.alignCenter ? "center" : "start"};
    word-break: break-all;

    svg{
        width: 18;
        height: 18px;
    }

`;