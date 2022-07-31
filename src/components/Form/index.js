import React, {useState} from 'react';
import * as C from './style';
import Grid from '../Grid';

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);



    const handleSave = () => {
        if(!desc || !amount) {
            alert('Preencha todos os campos');
            return;
        }else if(amount < 1) {
            alert('O valor deve ser positivo');
            return;
        }

        const transaction = {
            id: generateID(),
            desc:  desc,
            amount: Number(amount),
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    

    return(
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input  value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input type="radio" 
                    id="rIncome" 
                    defaultChecked 
                    name="group1" 
                    onChange={() => setIsExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input 
                    type="radio"
                    id="rExpense"
                    name="group1"
                    onChange={() => setIsExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rExpense">Saída</C.Label>

                </C.RadioGroup>
                <C.Button onClick={handleSave}>Salvar</C.Button>
            </C.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    );
};

export default Form