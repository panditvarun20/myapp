import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = () =>{
    const [title, setTitle] = useState('');
    const titleChange = (event) => {
        setTitle(event.target.value);
        // console.log(setTitle);
    }
    return(
        <>
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2019-10-10' max='2023-10-10' />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='Submit'>Add Expense</button>
            </div>
        </form>
        </>
    );
}

export default ExpenseForm;