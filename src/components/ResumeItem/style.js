import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #b2bec3;
    border-radius: 10px;
    padding: 5px 15px;
    width: 30%;

    @media (max-width: 768px) {
        width: 20%;

        p{
            font-size: 12px;
        }
        span{
            font-size: 20px;
        }
        svg{
            display: none;
        }

    }

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    background: #b2bec3;
    margin-top: 10px;
    margin-bottom: 10px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
    background: #b2bec3;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
    background: #b2bec3;
`;