import React from 'react'

export default function Item({item}) {
    return (
        <li>
            {item.nome}, {item.quantidade}, {item.preco}
        </li>
    )
}
