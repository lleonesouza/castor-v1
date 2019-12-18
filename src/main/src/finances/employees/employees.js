import React, {useState} from 'react'
import {SecondDiv} from '../../../../css/wrappers/wrappers'

//Components
import Employee from './src/employee'
import ListEmployees from './src/listEmployees'
import NewEmployees from './src/newEmployees'


export default function employees() {
    [newEmployee, setNewEmployee] = useState()
    return (
        <SecondDiv>

            <NewEmployees/>
            <ListEmployees/>
            <Employee/>

        </SecondDiv>
    )
}
