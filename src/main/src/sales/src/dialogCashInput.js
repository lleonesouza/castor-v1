import React from 'react'
import {Dialog} from '../css'

export default function dialogCashInput({setOpenCash}) {
    return (
        <Dialog>
            <label>Valor Em dinheiro:</label>
            <br/>
            <input/>
            <br/>
            <button onClick={() => setOpenCash(false)}>Cancel</button>
            <button>Ok</button>
        </Dialog>
    )
}
