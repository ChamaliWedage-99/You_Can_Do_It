import React, {useState} from 'react';
import Form from '../Form';
import { Container } from './styles';

function Todo() {
    const {input, setInput} = useState('');
const express = require('express');
    console.log(input, "input");

  return (
    <Container><h2>To Do List</h2>
    {/*Form Component */}
    <Form input={input} setInput = {setInput}/>
     {/*ToDo List */}
      {/* Key*/}
       {/* Author Component*/}
    </Container>
  )
}

export default Todo