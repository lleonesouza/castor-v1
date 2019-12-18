import React, {Fragment, useState, useEffect} from 'react'

export default function clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
      
        return function cleanup() {
            clearInterval(timerID);
          };
       });

       var tick = () => {
        setDate(new Date());
       }

    return (
        <Fragment>
            {date.toLocaleTimeString()}
        </Fragment>
    )
}
