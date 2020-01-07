import React, {useContext} from 'react'
import { Link , Routes} from 'react-router-dom'
import Day from './day/day'
import Month from './month/month'
import Year from './year/year'
import Custom from './custom/custom'


export default function reports() {
    let routes = [
      {
        title: 'day',
        url: "",
        component: Day
      },
      {
        title: 'month',
        url: "",
        component: Month
      },
      {
        title: 'year',
        url: "",
        component: Year
      },
      {
        title: 'custom',
        url: "",
        component: Custom
      }
    ];

  


    

    let months = {}

    
    return (
        <div>
                <Link to="/"> Voltar </Link>

            <li> Day </li>
            <li> Month </li>
            <li> Year </li>
            <li> Custom </li>

            <Year months={months}/>

            estoque financeiro
            despesas


              


            cnp
        </div>
    )
}
