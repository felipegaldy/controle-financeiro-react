import React from 'react';
import * as C from './style.js';


const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
        <C.Header>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            <Icon style={{background:"transparent"}} />
        </C.Header>
        <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default ResumeItem