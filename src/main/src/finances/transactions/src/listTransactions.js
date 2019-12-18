import React, {useContext} from 'react'
import { Div, Ul, Li, InsideUl } from '../../../css'
import {Context} from '../../../../../redux/contexts'



export default function Transactions() {
    let {transactions} = useContext(Context)
    console.log(transactions)
    return (
            <Div>
                <Ul>
                    <Li>
                        Testing
                    </Li>
                    <Li>
                        Testing
                    </Li>
                    <Li>
                        Testing
                    </Li>
               </Ul>
                
            </Div>
   
    )
}
