import React, { useState } from 'react';
import './ExpenseItem.css';
import './ExpenseDate.css';

function ExpenseItem (props){
    const [title, setTitle] = useState(props.title);
 const expenseDate = new Date(2022, 2, 22);

//  let titleafterClick = props.title;
 const clickHandler = () => {
    setTitle('Updated Value');
    // titleafterClick = 'Updated Title';
    console.log(title);
    // console.log('Clicked by arrow functions');
 }
return(
    <div className='expense-item'>
        {/* <div>This is component test</div> */}
        {/* <div>{props.date.toISOString()}</div> */}
        <div className='expense-date'>
        <div className='expense-date__month'>{props.date.toLocaleString('en-US', {month:'long'})}</div>
        <div className='expense-date__year'>{props.date.toLocaleString('en-US', {year:'numeric'})}</div>
        <div className='expense-date__day'>{props.date.toLocaleString('en-US', {day:'numeric'})}</div>
        </div>
        <div className='expense-item__description'>
            {/* <h2>{props.title}</h2> */}
            <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        </div>  
    </div>
);
}

export default ExpenseItem;