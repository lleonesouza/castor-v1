import React from 'react'

export default function suspenser({items}) {
    console.log(items)
    let b = items()
    return (
        <div>
               {JSON.stringify(b, null, {})}
        </div>
    )
}
