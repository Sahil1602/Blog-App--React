import React from 'react';
import './blogLink.css';
import { myArr } from './AppData'


export const linkArr = myArr.map((elem) =>{
    return(
        <a className="link" href="#">{elem.title}</a>
    )
})

    


