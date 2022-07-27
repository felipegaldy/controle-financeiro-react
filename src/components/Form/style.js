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

    @media (max-width: 768px) {
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    border: 1px solid #dfe6e9;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    outline: none;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        accent-color: #fff;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    background: #636e72;
`;