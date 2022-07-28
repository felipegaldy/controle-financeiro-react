import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 100%;
    background: #dfe6e9;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;
    background: #6c757d;
    @media (max-width: 768px) {
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Label = styled.label`background: #6c757d`;

export const Input = styled.input`
    border: 2px solid #dfe6e9;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    outline: none;
    background: #fff;
    color: #6c757d;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    background: transparent;
    input {
        margin-left: 20px;
        accent-color: #222;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: 2px solid #dfe6e9;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
    height: 50px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: #6c757d;
    align-self: center;

    &:hover {
        transition: 0.3s;
        transform: scale(1.05);
        shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
`;