import styled from "styled-components";


export const Table = styled.table`
    width: 100%;
    background: #6c757d;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: 1px solid #dfe6e9;
    padding-bottom: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;