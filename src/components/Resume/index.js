import React from 'react';
import ResumeItem from '../ResumeItem/index.js';
import * as C from './style.js';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';

function Resume({ income, expense, total }) {
  return (
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume