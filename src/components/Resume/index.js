import React from 'react';
import ResumeItem from '../ResumeItem/index.js';
import * as C from './style.js';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';

function Resume() {
  return (
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
        <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </C.Container>
  )
}

export default Resume